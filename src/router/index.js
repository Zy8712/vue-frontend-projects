import { createRouter, createWebHistory } from 'vue-router';

import QRCodeVueV1 from '../pages/qr-code-component-vue-v1.vue';

const routes = [
    {
        path: '/qr-code',
        name: 'QR Code Vue V1',
        component: QRCodeVueV1
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;