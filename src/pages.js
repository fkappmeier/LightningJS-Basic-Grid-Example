import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { Grid } from '@lightningjs/ui'
import Item from './Item'

export class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff30be96,
      Header: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: 'Home Page',
          fontFace: 'Bold',
          fontSize: 128,
        },
      },
      Arrows: {
        Up: {
          flex: { direction: 'column' },
          Arrow: {
            flexItem: { marginTop: 50, marginBottom: 20 },
            mountX: 0.5,
            x: 960,
            src: Utils.asset('arrow.png'),
          },
          Label: {
            mountX: 0.5,
            x: 960,
            text: { text: 'Browse Page', fontFace: 'Regular' },
          },
        },
      },
      WrapperGrid: {
        mount: 0.5,
        x: 0,
        y: 0,
        MyGrid: {
          type: Grid,
          itemType: Item,
          columns: 4,
        },
      },
    }
  }

  _setup() {
    this.tag('MyGrid').add(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => {
        return { label: number, h: 225, w: 300, rect: true, color: 0xffabcdef }
      })
    )
  }

  _getFocused() {
    return this.tag('MyGrid')
  }

  set persist(args) {
    console.log('we received data:', args)
  }

  _handleDown() {
    Router.navigate('home/a')
  }

  pageTransition() {
    return 'up'
  }
}

export class HomeKey extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff00bec6,
      Header: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: 'Page Two',
          fontFace: 'Bold',
          fontSize: 128,
        },
      },
      Arrows: {
        Up: {
          flex: { direction: 'column' },
          Arrow: {
            flexItem: { marginTop: 50, marginBottom: 20 },
            mountX: 0.5,
            x: 960,
            src: Utils.asset('arrow.png'),
          },
          Label: {
            mountX: 0.5,
            x: 960,
            text: { text: 'Browse Page', fontFace: 'Regular' },
          },
        },
      },
      WrapperGrid: {
        mount: 0.5,
        x: 0,
        y: 0,
        MyGrid: {
          type: Grid,
          itemType: Item,
          columns: 4,
        },
      },
    }
  }

  _setup() {
    // this.tag('MyGrid').add(
    //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => {
    //     // return { h: 225, w: 300, rect: true, color: 0xffabcdef }
    //     return { label: number, h: 225, w: 300, rect: true, color: 0xffabcdef }
    //   })
    // )
  }

  _getFocused() {
    return this.tag('MyGrid')
  }

  set persist(args) {
    console.log('we received data:', args)
  }

  _handleUp() {
    Router.navigate('home')
  }

  _onDataProvided() {
    console.log(this.data)
    console.log(this.data.stations)

    for (const station of this.data.stations) {
      this.tag('MyGrid').add({
        label: station.name,
        h: 250,
        w: 250,
        rect: true,
        color: 0xffabcdef,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 12 },
      })
    }

    // this.tag('MyGrid').add(
    //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => {
    //     // return { h: 225, w: 300, rect: true, color: 0xffabcdef }
    //     return { label: number, h: 225, w: 300, rect: true, color: 0xffabcdef }
    //   })
    // )
  }

  pageTransition() {
    return 'up'
  }
}
