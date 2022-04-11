import ComponentA from '../exampleComponents/ComponentA'
import ComponentB from '../exampleComponents/ComponentB'

const routes = [
  {
    path: 'component-A',
    component: new ComponentA(),
    widgets: ['menu'],
  },
  {
    path: 'component-B',
    component: new ComponentB(),
    widgets: ['menu'],
  },
]

export default {
  root: routes[0].path,
  routes,
}
