import type {StorybookViteConfig} from "@storybook/builder-vite";
import {loadConfigFromFile, mergeConfig} from "vite";
import * as path from "path";

const config: StorybookViteConfig = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-scss"
    ],
    framework: "@storybook/svelte",
    core: {
        builder: "@storybook/builder-vite"
    },
    features: {
        // On-demand store does not work for .svelte stories, only CSF.
        // Requires all stories to be loaded in bulk.
        // REFERENCE https://storybook.js.org/docs/svelte/configure/overview#feature-flags
        storyStoreV7: true,
        // use own babel config instead of storybook provided one
        babelModeV7: true
    },
    async viteFinal(config, {configType}) {
        const userConfig = await loadConfigFromFile({command: "build", mode: process.env.NODE_ENV || "development"},
            path.resolve(__dirname, "../vite.config.js")
        );
        // return the customized config
        return mergeConfig(config, {
            ...userConfig,
            // customize the Vite config here
            resolve: {
                alias: {
                    $lib: path.resolve(__dirname, '../src/lib'),
                    $i18n: path.resolve(__dirname, "../src/i18n"),
                    $app: path.resolve(__dirname, './mocks/app/')
                },
            },
        });
    },
}

export default config