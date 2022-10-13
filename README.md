# Laravel NuxtJS Starter template

## Requirement

- Docker >= 20.10
- Docker compose plugin

Preferred for convenience during development:

- PHP 8.1
- NodeJS 16

If you don't have the dependencies above, you can still use the ones provided inside docker containers.

## Setup development environment

Run the following command in the root of project to bootstrap the development environment.

```sh
make devup
```

A `.env` file will be created in the project's root directory.
You can customize development environment to your preferences by editing it.

Install dependencies and run migrations.

```sh
make devinstall
make devmigrate
```

Start the web app in development mode.

```sh
make devrun
```

The web app will be available at your configured domain and port, by default it's `project.localhost:8000`.

## Read more

Relevant documentations:

- [Laravel documentation](https://laravel.com/docs)
- [Nuxt 3](https://v3.nuxtjs.org/)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
