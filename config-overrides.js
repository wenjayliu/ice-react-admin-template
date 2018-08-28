const path = require('path');
const { injectBabelPlugin, paths } = require('react-app-rewired');
const rewireAliases = require('react-app-rewire-aliases');
const WebpackPluginImport = require('webpack-plugin-import');
const rewireSass = require('./rewire-scss');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: '@icedesign/base' }],
    config
  );
	config = rewireAliases.aliasesOptions({
		'@src': path.resolve(__dirname, `${paths.appSrc}/`)
  })(config)
  
  config.plugins.push(
    new WebpackPluginImport([
      {
        libraryName: /^@icedesign\/base\/lib\/([^/]+)/,
        stylePath: 'style.js',
      },
      {
        libraryName: /@icedesign\/.*/,
        stylePath: 'style.js',
      },
    ])
  );
  config = rewireMobX(config, env);
  config = rewireSass(config);

  return config;
};
