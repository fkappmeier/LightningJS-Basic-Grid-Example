import { Router, Utils } from '@lightningjs/sdk'
import routerConfig from './lib/routerConfig.js'

export default class App extends Router.App {
  static _template() {
    return {
      Background: { w: 1920, h: 1080, rect: true, color: this.bindProp('background') },
      ...super._template(),
    }
  }

  static getFonts() {
    return [
      { family: 'Fresca', url: Utils.asset('fonts/Fresca-Regular.ttf') },
      { family: 'Londrina', url: Utils.asset('fonts/LondrinaSolid-Regular.ttf') },
    ]
  }

  static colors() {
    return true
  }

  _setup() {
    Router.startRouter(routerConfig, this)
  }
}
