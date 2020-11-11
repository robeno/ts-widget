import purgeCss from '@fullhuman/postcss-purgecss';

export default {
    webpack(config, env, helpers) {
        const nonModuleStyleLoader = config.module.rules[5];
        nonModuleStyleLoader.sideEffects = true;

        const purgecss = purgeCss({
            content: ['src/**/*.tsx', 'demo/**/*.tsx'],
            whitelist: ['html', 'body'],
        });

        const postCss = helpers.getLoadersByName(config, 'postcss-loader')[0];
        if (env.production) {
            config.output.publicPath = 'https://rschristian.github.io/ts-widget';
            postCss.loader.options.plugins.push(purgecss);

            // This cuts out all CSS from 'bundle.css' that can be found in 'index.html'; bad for
            // multi-route apps, fine for single page demos
            const critters = helpers.getPluginsByName(config, 'Critters')[0];
            if (critters) critters.plugin.options.pruneSource = true;
        }
    },
};
