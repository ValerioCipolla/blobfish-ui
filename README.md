# blobfish-ui

Open Source Project for beginners. A playground UI library published on npm to practice creating components with React and TypeScript.

# Table of contents

- [blobfish-ui](#blobfish-ui)
- [Table of contents](#table-of-contents)
- [Installation and Usage](#installation-and-usage)
- [Docs](#docs)
  - [RoundButton](#roundbutton)
  - [SquareButton](#squarebutton)
  - [Input](#input)
  - [Contributing to blobfish ui](#contributing-to-blobfish-ui)
  - [Development](#development)
  - [Creators & Contributors](#creators--contributors)

# Installation and Usage

Install the package with npm

```js
npm i blobfish-ui
```

Import the components you need

```js
import { RoundButton } from 'blobfish-ui'
```

Use the components where you need them

```js
<RoundButton label="click me!" />
```

# Docs

- [RoundButton](#roundbutton)
- [SquareButton](#squarebutton)
- [Input](#input)

## RoundButton

Usage:

```js
<RoundButton label="click me!" />
```

`<RoundButton>` is a circular button with fixed height and width of 100px. It needs one prop `label` which is the text that will be displayed inside the button.

## SquareButton

Usage:

```js
<SquareButton label="click me!" />
```

`<SquareButton>` is a square button with fixed height and width of 100px. It needs one prop `label` which is the text that will be displayed inside the button.

## Input

Usage:

```js
<Input placeholder="Type something here" />
```

`<Input>` is an input element defaulted to `type="text"`. It needs one prop `placeholder` which is the text that prompts the user to enter data. Regular HTML `input` attributes can still be passed down as props. For example:

```js
<Input placeholder="Type something here" size="10"/>
```

## Contributing to blobfish ui

1. Fork the repo and create your branch from main.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Issue pull request

Testing and linting will be introduced soon.

## Development

Once you have forked the repo and cloned it to your machine:

1. Run `npm i` in root directory
2. Create component inside `./src/components`

- Create a folder with the name of the component
- Create `index.tsx` file
- Create `styles.scss` file

How to test the component to see what it looks like?

1. Make sure you export the component in `src/index.tsx`
2. Run `npm run build` to build library
3. Run `npm link` to link library locally to an other folder
4. Enter the `example` folder by running `cd example`
5. Install dependencies `npm i`
6. Link library to this folder by running `npm link blobfish-ui`
7. Import and use component inside `example/src/App.tsx`
8. Run `npm start` and you will be able to see component on the page

If you make changes to the component and you want to see the changes remember to re-build the library.

1. Go back to root directory `cd ..`
2. run `npm run build`

You should be able to see the changes.

## Creators & Contributors

- [Valerio Cipolla](https://github.com/ValerioCipolla/)
- [Amrit Atwal](https://github.com/amritatwal)
