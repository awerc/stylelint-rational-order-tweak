const path = require('path');

module.exports = ({
  "plugins": [
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
    path.join(__dirname, './plugin'),
  ],
  "rules": {
    'plugin/rational-order-tweak': [true, {
      "border-in-box-model": false,
      "empty-line-between-groups": true,
    }],
    'max-nesting-depth': 3,
    'selector-max-id': 1,
    "order/properties-order": [],
  }
});
