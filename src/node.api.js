export default pluginOptions => ({
    webpack: (config) => {
        let { includePath, alias } = pluginOptions;
        if (!includePath){
            throw new Error(
                'react-static-plugin-include-external-path: A valid `includePath` ' +
                'is required to use this plugin'
            )
        }
        if (!alias){
            throw new Error(
                'react-static-plugin-include-external-path: A valid `alias` ' +
                'is required to use this plugin'
            )
        }
        config.module.rules[0].oneOf[0].include.push(includePath);
        if (config.resolve.alias[alias] && config.resolve.alias[alias] !== includePath){
            throw new Error(
                `react-static-plugin-include-external-path: `
                +`The \`alias\` "${alias}" is already in use and resolves "${config.resolve.alias[alias]}"`
            )
        }
        config.resolve.alias[alias] = includePath;
        return config;
    }
})