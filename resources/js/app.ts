import "./bootstrap";

import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import type { DefineComponent } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/index.esm";
import { trail } from "momentum-trail";
import routes from "./Routes/routes.json";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.vue`,
			import.meta.glob<DefineComponent>("./Pages/**/*.vue"),
		),
	setup({ el, App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			.use(plugin)
			.use(trail, {
				routes,
				url: props.initialPage.url,
				absolute: true,
			})
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			.use(ZiggyVue, (window as any).Ziggy)

			.mount(el);
	},
	progress: {
		color: "#4B5563",
	},
});
