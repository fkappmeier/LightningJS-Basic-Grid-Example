import { Lightning } from '@lightningjs/sdk'

class ComponentA extends Lightning.component {
  static _template() {
    return {
      //component template
    }
  }

  _init() {
    // Fires when a component is instantiated.
  }
}

export default ComponentA
