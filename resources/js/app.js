import '../css/app.css';
import './bootstrap';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';

// custom css
import "../js/assets/vendor/css/core.css";
import "../js/assets/vendor/css/theme-default.css";
import "../js/assets/css/demo.css";
import "../js/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../js/assets/vendor/libs/apex-charts/apex-charts.css";
// custom css

// custom js
import "../js/assets/vendor/js/helpers.js";
import "../js/assets/js/config.js";
import "../js/assets/vendor/js/menu.js";
import "../js/assets/vendor/libs/jquery/jquery.js";
import "../js/assets/vendor/libs/popper/popper.js";
import "../js/assets/vendor/js/bootstrap.js";
import "../js/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
import "../js/assets/vendor/libs/apex-charts/apexcharts.js";
import "../js/assets/js/main.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
// import '../js/assets/js/dashboards-analytics.js';
import "https://buttons.github.io/buttons.js";
// custom js

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
