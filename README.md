# Vue.js Playground
Vue Playground using [Vuetify](https://vuetifyjs.com/), [Axios](https://github.com/axios/axios) and [Vue-Router](https://github.com/vuejs/vue-router)

<p align="center">
  <img height="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png">
  <img height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlOE7epYC7FIQtKkn0nkCme29AxdkkXRUvPVI0jotRuEv4ZdB&s">
</p>

## Notes
The idea of this project is to provide a UI that consume the apis exposed in the following Web APIs repositories:
- [NetCore.Playground.Api](https://github.com/joacod/NetCore.Playground.Api)
- [go-playground-api](https://github.com/joacod/go-playground-api)
- [node-playground-api](https://github.com/joacod/node-playground-api)

*All API projects implements the exact same endpoints.*

What we get from this:
- We have API implementations to download and hook up with our UI project.
- We can practice different approaches in Vue

## Prerequisites
- [Install Vue](https://vuejs.org/)
- [VS Code Extension for Vue](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## How to Run it
1. From the terminal: `npm run serve`
2. Once it's running, go to a browser
3. Hit the following url http://localhost:4545/
4. For the pages to work properly you will need a backend Web API up and running too, you can choose either of this:
    - [NetCore.Playground.Api](https://github.com/joacod/NetCore.Playground.Api)
    - [go-playground-api](https://github.com/joacod/go-playground-api)
    - [node-playground-api](https://github.com/joacod/node-playground-api)
