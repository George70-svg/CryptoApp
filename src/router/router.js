import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from '@/views/login/LoginPage.vue'
import CryptoPage from '@/views/crypto/CryptoPage.vue'
import StatisticsPage from "@/views/crypto/content/StatisticsPage/StatisticsPage.vue";
import PortfolioPage from "@/views/crypto/content/PortfolioPage/PortfolioPage.vue";
import TokensPage from "@/views/crypto/content/TokensPage/TokensPage.vue";

/*TODO: [@asiuraev 06.10.2022] Add typescript validations */

const contentRoutes = [
    {
        path: '/tokens',
        name: 'TokensPage',
        component: TokensPage,
    },
    {
        path: '/portfolio',
        name: 'PortfolioPage',
        component: PortfolioPage,
    },
    {
        path: '/statistics',
        name: 'StatisticsPage',
        component: StatisticsPage,
    },
]

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
        redirect: { name: 'TokensPage' },
        children: contentRoutes,
    },
]

const history = createWebHistory()
const router = createRouter({
    history,
    routes,
})

export default router
