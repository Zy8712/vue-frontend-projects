import { createRouter, createWebHistory } from 'vue-router';

import QRCodeVueV1 from '../pages/qr-code-component-vue-v1.vue';
import ThreeColVueV1 from '../pages/3-column-preview-card-component-vue-v1.vue';

const routes = [
    {
        path: '/3-column-preview-card-component-vue-v1',
        name: '3 Column Vue V1',
        component: ThreeColVueV1
    },
    {
        path: '/qr-code-component-vue-v1',
        name: 'QR Code Vue V1',
        component: QRCodeVueV1
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
