# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

- [language-postcss](https://marketplace.visualstudio.com/items?itemName=cpylua.language-postcss)

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### relevant entries in settings.json (Ctrl + Shift + P -> Preferences: Open Settings (JSON))

```json
{
  //...
  "emmet.includeLanguages": {
    "postcss": "css"
  },
  "emmet.syntaxProfiles": {
    "postcss": "css"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["vue", "javascript", "javascriptreact", "html"],
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[graphql]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    "*.graphql": "graphql"
  }
  //...
}
```

## Vue Router

Simple starting configuration in place.

## Store

Pina with sample configuration.

## PostCSS

Plugins:

- autoprefixer
- postcss-nesting

## ESLint + Prettier

yep
