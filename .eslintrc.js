module.exports = {
    extends: [
        'eslint-config-alloy/react',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        // React: false,
        // ReactDOM: false
    },
    rules: {
        'semi': [2, 'never'],
        "indent": ["error", 2, {
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            "ignoredNodes": ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        }],
        'no-console': 0,
        "react/jsx-indent": [2, 2],
        "react/prefer-stateless-function": 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/no-array-index-key': 0,
        'func-names': 0,
        'arrow-body-style': 0,
        'no-use-before-define': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-filename-extension': [
            1,
            {
                'extensions': ['.js', '.jsx']
            }
        ],
    }
}