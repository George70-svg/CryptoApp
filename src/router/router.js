import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/views/login/loginPage.vue'
import CryptoPage from '@/views/crypto/CryptoPage.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/crypto',
        name: 'CryptoPage',
        component: CryptoPage,
    },
]

const router = createRouter({
    history,
    routes,
})

export default router
