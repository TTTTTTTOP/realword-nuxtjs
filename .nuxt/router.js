import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f012be6a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _12e8e280 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _49c2dcb0 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _66e79828 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _074b7d84 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _7c27c70e = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _4db1db75 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _f012be6a,
    children: [{
      path: "",
      component: _12e8e280,
      name: "home"
    }, {
      path: "/login",
      component: _49c2dcb0,
      name: "login"
    }, {
      path: "/register",
      component: _49c2dcb0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _66e79828,
      name: "profile"
    }, {
      path: "/settings",
      component: _074b7d84,
      name: "settings"
    }, {
      path: "/editor",
      component: _7c27c70e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4db1db75,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
