import ky, { HTTPError, Options as KyOptions } from 'ky';
import _assign from 'lodash/assign';
import _forEach from 'lodash/forEach';

interface RequestOptions extends KyOptions {
    params?: object,
}

interface ParsedResponse extends Response {
    data?: any
}

function readCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^|;\\s*)(${name})=([^;]*)`));

    return match ? decodeURIComponent(match[3]) : null;
}

function makeSearchParam(params?: object): URLSearchParams | undefined {
    if (params) {
        const searchParams = new URLSearchParams();

        _forEach(params, (value, key) => {
            searchParams.set(key, value);
        });

        return searchParams;
    }

    return undefined;
}

function makeHeaders(headers: any = {}) {
    if (headers && headers['X-XSRF-TOKEN']) {
        return headers;
    }

    const csrfToken = readCookie('XSRF-TOKEN');

    return _assign({}, headers, csrfToken ? {
        Accept: 'application/json',
        'X-XSRF-TOKEN': csrfToken,
    } : {});
}

function makeKyOptions(opts: RequestOptions = {}): KyOptions {
    return {
        searchParams: makeSearchParam(opts.params),
        headers: makeHeaders(opts.headers),
    };
}

function getResponseBody(response: Response) {
    if (response.headers.get('content-type') === 'application/json') {
        return response.json();
    }

    return response.text();
}

async function send(method: string, url: string, config: RequestOptions): Promise<ParsedResponse> {
    try {
        const response = await ky(url, {
            method,
            ...config,
        });

        const data = await getResponseBody(response);

        return {
            ...response,
            data,
        };
    } catch (error) {
        if (error instanceof HTTPError) {
            const data = await getResponseBody(error.response);

            return {
                ...error.response,
                data,
            };
        }

        throw error;
    }
}

export default {
    get(url: string, opts: RequestOptions = {}) {
        return send('get', url, makeKyOptions(opts));
    },

    post(url: string, data: any, opts: RequestOptions = {}) {
        return send('post', url, { ...makeKyOptions(opts), json: data });
    },

    put(url: string, data: any, opts: RequestOptions = {}) {
        return send('put', url, { ...makeKyOptions(opts), json: data });
    },

    patch(url: string, data: any, opts: RequestOptions = {}) {
        return send('patch', url, { ...makeKyOptions(opts), json: data });
    },

    delete(url: string, config?: RequestOptions) {
        return send('delete', url, makeKyOptions(config));
    },
};
