import { Home, HomeKey } from './pages.js'

export default {
  root: 'home',

  routes: [
    {
      path: 'home',
      component: Home,
    },
    {
      path: 'home/:key',
      component: HomeKey,
      on: (page, key) => {
        return new Promise((resolve, reject) => {
          fetch(
            `https://rpapi-middleware-prod.radioplayer.org/api/v2/de-DE/stations/alphanumericKeys/${key.key}`,
            {
              method: 'GET',
              headers: {
                client: 'tizen',
              },
            }
          )
            .then(async res => {
              const data = await res.json()
              page.data = data
              resolve()
            })
            .catch(e => {
              reject(e)
            })
        })
      },
    },
  ],
}
