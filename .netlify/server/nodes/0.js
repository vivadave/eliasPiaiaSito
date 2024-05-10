import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.ByQ_lcys.js","_app/immutable/chunks/scheduler.BboCKSUd.js","_app/immutable/chunks/index.GiIZ0nsZ.js","_app/immutable/chunks/index.iZweDoLH.js","_app/immutable/chunks/translation.B5RiM4dG.js","_app/immutable/chunks/index.C5NFXbCP.js","_app/immutable/chunks/entry.DaJes0S2.js"];
export const stylesheets = ["_app/immutable/assets/0.DoQwNPJx.css"];
export const fonts = ["_app/immutable/assets/Le Jour Script.7lKJUGf3.ttf","_app/immutable/assets/Quattrocento-Regular.Bnj6A5eN.ttf"];
