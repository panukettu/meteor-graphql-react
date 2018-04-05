module.exports = {
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
    }
  },
  "globals": {
    "fetch": false,
    "document": true
  },
  "plugins": [
    "react"
  ],
  "extends": ["airbnb-base","plugin:react"],
  "rules": {
    "linebreak-style": 0, "no-console": 0
  }
};