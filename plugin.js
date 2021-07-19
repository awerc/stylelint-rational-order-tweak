const stylelint = require('stylelint');
const propertiesOrder = require('stylelint-config-rational-order/plugin');

const ruleName = 'plugin/rational-order-tweak';

module.exports = stylelint.createPlugin(
  ruleName,
  (enabled, options, context) => (postcssRoot, postcssResult) => {
    if (context.fix) {
      postcssRoot.walkDecls(decl => {
        if (decl.raws.before) {
          decl.raws.before = decl.raws.before.replace(/\n+/, '\n');
        }
      });
    }

    propertiesOrder.rule(enabled, options, context)(postcssRoot, postcssResult);
  },
);

module.exports.ruleName = ruleName;
