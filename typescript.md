
+ vue/cli中通过tsconfig.json配置typescript，并在@vue/cli-plugin-typescript中配置了tslint。
```js
if (!api.hasPlugin('eslint')) {
    api.registerCommand('lint', {// ... 
    }, args => {
      return require('./lib/tslint')(args, api)
    })
  }
```
```json
  "eslintConfig": {
      "env": {
          "browser": true,
          "node": true
      },
      "rules": {
          "eqeqeq": "off",
          "curly": "error",
          "no-console": 2,
          "quotes": ["error", "double"],
          "plugin1/rule1": "error"
      }
  },
```