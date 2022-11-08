module.exports = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-essentials",
    ],
    core: {
        builder: "storybook-builder-vite"
    }
}