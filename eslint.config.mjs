{
  "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
    "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ];
  }
}
