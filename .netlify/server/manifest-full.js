export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.uFV1W1q2.js","app":"_app/immutable/entry/app.UdjpeGbf.js","imports":["_app/immutable/entry/start.uFV1W1q2.js","_app/immutable/chunks/entry.B8Kf1Csf.js","_app/immutable/chunks/scheduler.BboCKSUd.js","_app/immutable/chunks/index.C5NFXbCP.js","_app/immutable/entry/app.UdjpeGbf.js","_app/immutable/chunks/scheduler.BboCKSUd.js","_app/immutable/chunks/index.GiIZ0nsZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cms",
				pattern: /^\/cms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/elisa",
				pattern: /^\/elisa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/emozionale",
				pattern: /^\/emozionale\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/osteopatia",
				pattern: /^\/osteopatia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/fa-brands-400.Ch568Ea9.woff2":117852,"_app/immutable/assets/fa-brands-400.DHHcbFjz.ttf":209128,"_app/immutable/assets/fa-regular-400.9VThgXHM.woff2":25392,"_app/immutable/assets/fa-regular-400.C54-fRIQ.ttf":67860,"_app/immutable/assets/fa-solid-900.QWY35r5r.woff2":156400,"_app/immutable/assets/fa-solid-900.Cm9M9sZB.ttf":420332,"_app/immutable/assets/fa-v4compatibility.BRdYr4HJ.woff2":4792,"_app/immutable/assets/fa-v4compatibility.DLBX5pNp.ttf":10832}
	}
}
})();
