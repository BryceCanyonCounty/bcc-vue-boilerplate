# BCC Vue Boilerplate
> A full-fledge Vue 3 + NUI boilerplate to get you developing beautiful and responsive UI's in no time!

## Features
- **True** Hot Middle Reload [HMR] (No need to restart scripts to see your changes)
- Page Routing via [Vue Router](https://router.vuejs.org)
- State Management via [pinia](https://pinia.vuejs.org)
- Minification and Bundled via [webpack](https://webpack.js.org/)
- ES6 Ready via [babel](https://babeljs.io/)
- Modern http requests via [axios](https://axios-http.com/docs/intro)
- Modern CSS Framework via [tailwindcss](https://tailwindcss.com/)
- Auto build releases via GitHub Actions (See below)

## First Time setup
### Required
- [yarn](https://yarnpkg.com/)

### Install
- Download this repo
- Copy and paste `bcc-vue-boilerplate` folder to `resources/bcc-vue-boilerplate`
- Open Project in terminal.
- Navigate to the UI folder

```bash
cd ui
```

- Install Yarn Packages
```bash
yarn i
```

- Add `ensure bcc-vue-boilerplate` to your `server.cfg` file
- Now you are ready to get coding!

### Run in Development (compiles and hot-reloads for development)
```bash
yarn run serve
```

### Run in Production (compiles and minifies for production)
- Open release.yml (ui/.github/workflows)
- Modify line 26 (files) to include all of your static files.
    - folders are denoted by its name without an extension
    - include all files you need in the release (images for inventory etc.)
- Rename line 28 (dest) to your scripts name.zip
- Rename line 41 (files) to your scripts name.zip
- Open your GitHub repository
- Go to Settings
- Click on Actions on the left side
- Click on General
- Under Workflow Permissions set to Read and Write access

### Setting your release version
- Open the package.json file (ui/package.json)
    - This value is used as the release tag
- Update the version on line 3
- Open the fxmanifest.lua
- Update the version on the bottom

### Lints and fixes files
```
yarn run lint
```
