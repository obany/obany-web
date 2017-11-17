SystemJS.config({
	"baseURL": "",
	"paths": {
		"aurelia-animator-css": "node_modules/aurelia-animator-css/dist/system/aurelia-animator-css",
		"aurelia-binding": "node_modules/aurelia-binding/dist/system/aurelia-binding",
		"aurelia-bootstrapper": "node_modules/aurelia-bootstrapper/dist/system/aurelia-bootstrapper",
		"aurelia-dependency-injection": "node_modules/aurelia-dependency-injection/dist/system/aurelia-dependency-injection",
		"aurelia-event-aggregator": "node_modules/aurelia-event-aggregator/dist/system/aurelia-event-aggregator",
		"aurelia-fetch-client": "node_modules/aurelia-fetch-client/dist/system/aurelia-fetch-client",
		"aurelia-http-client": "node_modules/aurelia-http-client/dist/system/aurelia-http-client",
		"aurelia-framework": "node_modules/aurelia-framework/dist/system/aurelia-framework",
		"aurelia-history": "node_modules/aurelia-history/dist/system/aurelia-history",
		"aurelia-history-browser": "node_modules/aurelia-history-browser/dist/system/aurelia-history-browser",
		"aurelia-loader": "node_modules/aurelia-loader/dist/system/aurelia-loader",
		"aurelia-loader-default": "node_modules/aurelia-loader-default/dist/system/aurelia-loader-default",
		"aurelia-logging": "node_modules/aurelia-logging/dist/system/aurelia-logging",
		"aurelia-logging-console": "node_modules/aurelia-logging-console/dist/system/aurelia-logging-console",
		"aurelia-metadata": "node_modules/aurelia-metadata/dist/system/aurelia-metadata",
		"aurelia-pal": "node_modules/aurelia-pal/dist/system/aurelia-pal",
		"aurelia-pal-browser": "node_modules/aurelia-pal-browser/dist/system/aurelia-pal-browser",
		"aurelia-path": "node_modules/aurelia-path/dist/system/aurelia-path",
		"aurelia-polyfills": "node_modules/aurelia-polyfills/dist/system/aurelia-polyfills",
		"aurelia-route-recognizer": "node_modules/aurelia-route-recognizer/dist/system/aurelia-route-recognizer",
		"aurelia-router": "node_modules/aurelia-router/dist/system/aurelia-router",
		"aurelia-task-queue": "node_modules/aurelia-task-queue/dist/system/aurelia-task-queue",
		"aurelia-templating": "node_modules/aurelia-templating/dist/system/aurelia-templating",
		"aurelia-templating-binding": "node_modules/aurelia-templating-binding/dist/system/aurelia-templating-binding",
		"whatwg-fetch": "node_modules/whatwg-fetch/fetch",
		"moment": "node_modules/moment/moment",
		"systemjs-plugin-text": "node_modules/systemjs-plugin-text/text",
		"aurelia-dialog": "node_modules/aurelia-dialog/dist/system",
		"aurelia-templating-resources": "node_modules/aurelia-templating-resources/dist/system",
		"aurelia-templating-router": "node_modules/aurelia-templating-router/dist/system",
		"aurelia-validation": "node_modules/aurelia-validation/dist/system"
	},
	"packages": {
		"": {
			"defaultExtension": "js"
		},
		"aurelia-dialog": {
			"main": "aurelia-dialog"
		},
		"aurelia-templating-resources": {
			"main": "aurelia-templating-resources"
		},
		"aurelia-templating-router": {
			"main": "aurelia-templating-router"
		},
		"aurelia-validation": {
			"main": "aurelia-validation"
		}
	},
	"map": {
		"text": "systemjs-plugin-text"
	},
	"meta": {
		"dist/*.js": {
			"format": "system"
		},
		"dist/app-module-config.js": {
			"format": "global"
		},
		"dist/*/node_modules/systemjs-plugin-text/text.js": {
			"format": "global"
		}
	}
});
preloadModules = [];
