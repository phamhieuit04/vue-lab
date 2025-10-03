import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import NProgress from 'nprogress'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

if (typeof document !== 'undefined') {
    NProgress.configure({
        showSpinner: false,
    })
    let timeout: ReturnType<typeof setTimeout> | undefined
    router.beforeEach((to) => {
        const delay = Array.isArray(to.meta.loaders) && to.meta.loaders.length > 0 ? 200 : 0
        timeout = setTimeout(() => {
            if (router.currentRoute.value !== to) {
                NProgress.start()
            }
        }, delay)
    })

    router.afterEach(() => {
        clearTimeout(timeout)
        NProgress.done(false)
    })

    router.onError(() => {
        clearTimeout(timeout)
        NProgress.done(false)
    })
}

if (import.meta.hot) {
    handleHotUpdate(router)
}

export default router
