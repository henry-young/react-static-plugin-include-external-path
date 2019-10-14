# react-static-plugin-include-external-path

A [React-Static](https://react-static.js.org) plugin that adds external path support for webpack imports.

This exposes a simple way to share components and functionality between sites in a monorepo without requiring extra compilation, private npm packages or symbolic links.

## Installation

In an existing react-static site run:

```bash
$ yarn add react-static-plugin-include-external-path
```

Then add the plugin to your `static.config.js` with a valid `includePath` directory and alias in the options:

```javascript
...
import path from 'path'
...
export default {
  plugins: [
    [
      'react-static-plugin-include-external-path',
      {
        includePath: path.resolve('../shared'),
        alias: "@shared"
      },
    ],
  ],
}
```

## Usage
You will now be able to import files from the `../shared` folder in your project using the `@shared` alias.

Example:
```jsx
// '../shared/SharedComponent.jsx'
import React from 'react';
export default () => <div>Shared Component</div>
```
Then import using relative path or alias
```jsx
// Any component in your "./src" folder
...
import SharedComponent from '@shared/SharedComponent';
...
export default () => <SharedComponent/>
```

## Typescript usage
When using this plugin with `react-static-plugin-typescript`, you must add the includePath and alias to `compilerOptions.paths` in your sites `tsconfig.json`

Example:
```json
{
  ...
  "compilerOptions":  {
    ...
    "paths": {
        ... 
        "@shared/*": ["../shared/*"]
      }
  }
}
```
