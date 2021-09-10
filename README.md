# FE-STARTER

## Introduction

- This repo is a frontend project scaffolding, aimed at quickly building a React SPA frontend project with out-of-box properly configured webpack, Typescript, Babel, es-lint, husky commit-lint etc.

- GitHub Template Repository is used to host this project. As a result you can generate a new repo by using this template, which is quite convenient.

- GitHub Pages auto-publishment is supported with GitHub Action CI and navigtion for React Router SPA is well-optimized, so that your project demo website can be automatically built and published once you push your code to the specified branch.

## Usage

### start-up

- Development
  - Developing through webpack-dev-server (with HMR turned on)
    - execute command `yarn` to install dependencies
    - execute command `yarn run dev` to start devServer
    - visit `http://localhost:8000`
    - start developing
  - Developing with stand-alone node web server based on Express
    - execute command `yarn` to install dependencies
    - execute command `yarn run watch` to start webpack and watch files
    - execute command `yarn run server` to start web server on which bundled files would be hosted
    - visit `http://localhost:8000`
    - start developing

- Production
  - Server production app with node web server
    - execute command `yarn` to install dependencies
    - execute command `yarn run build` to generate bundle files
    - execute command `yarn run server` to start web server on which bundled files would be hosted
    - visit `http://localhost:8000`

- PORT can be modified at `env.js`

### github-page

- For sub-projects (`https://your-user-name.github.io/your-sub-repo-name/`)
  - rename dir `.github.temp` to `.github`
  - find and replace all `fe-starter` with your github repository name
  - commit changes above and push your code to master branch
  - go to github repository - settings - pages - source, select `github-page` branch

- For github homepage (`https://your-user-name.github.io/`)
  - rename dir `.github.temp` to `.github`
  - find and replace all `/fe-starter` with `/`
  - remove `baseName="/fe-starter"` props from react-router `<Router />`
  - set `pathSegmentsToKeep = 0` at `app/views/github-page/404.ejs`
  - commit changes above and push your code to master branch
  - go to github repository - settings - pages - source, select `github-page` branch

- Branches used as codebase and built-bundle can be set at `.github-temp/workflows/deploy.yml`

## Details

- `fe-starter v2.0` uses [chakra-ui](https://chakra-ui.com/) as UI Component Library. Theme settings can be accessed at `app/theme/index.ts`.
- Responsive UI is supported with [react-responsive](https://github.com/contra/react-responsive). You can modify how the app figures out if it's running on mobile or pc devices at `app/layout/global-store.ts`. Also, there is a hook `useClassName` exported from `app/utils/hooks.ts`, with which you can generate responsive classNames.
- The axios interceptor is placed at `app/config/axios-config.ts`.
- You can pass global style variables through `lessOptions.modifyVars` provided by `less-loader` from `webpack.common.js`.
- Path shortcuts can be configured at `tsconfig.json` through `compilerOptions.paths`.
