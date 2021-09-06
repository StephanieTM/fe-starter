# readme

## start-up

- Development
  - Developing through webpack-dev-server (with HMR turned on)
    - execute command `yarn` to install dependencies
    - execute command `yarn run dev` to start devServer
    - visit `http://localhost:3000`
    - start developing
  - Developing with stand-alone node web server
    - execute command `yarn` to install dependencies
    - execute command `yarn run watch` to start webpack and watch files
    - execute command `yarn run server` to start web server on which bundled files would be hosted
    - visit `http://localhost:3000`
    - start developing

- Production
  - Server production app with node web server
    - execute command `yarn` to install dependencies
    - execute command `yarn run build` to generate bundle files
    - execute command `yarn run server` to start web server on which bundled files would be hosted
    - visit `http://localhost:3000`

## github-page

- rename dir `.github.temp` to `.github`
- find and replace all `fe-starter` with current github repository name
- add `baseName={`${yourGithubRepoName}`}` to react-router `<Router />`
- commit changes above to master branch
- go to github repository - settings - pages - source, select `github-page` branch
