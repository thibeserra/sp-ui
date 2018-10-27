const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
const { override, addBabelPlugin, addDecoratorsLegacy, disableEsLint } = require('customize-cra');

module.exports = function override(config, env) {
    config = injectBabelPlugin("babel-plugin-styled-components", config);
    config = rewireMobX(config, env);

    return config;
};

module.exports = override(
    addBabelPlugin('babel-plugin-styled-components'),
    //addDecoratorsLegacy(),
    disableEsLint(),
);