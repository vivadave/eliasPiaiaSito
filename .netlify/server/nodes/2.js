import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DwseRAQm.js","_app/immutable/chunks/scheduler.BboCKSUd.js","_app/immutable/chunks/index.GiIZ0nsZ.js","_app/immutable/chunks/Button.BD2fndp5.js","_app/immutable/chunks/translation.B5RiM4dG.js","_app/immutable/chunks/index.C5NFXbCP.js","_app/immutable/chunks/entry.DaJes0S2.js"];
export const stylesheets = ["_app/immutable/assets/2.X9sUerCJ.css","_app/immutable/assets/Button.BkxGHTJc.css"];
export const fonts = ["_app/immutable/assets/Le Jour Script.7lKJUGf3.ttf","_app/immutable/assets/Quattrocento-Regular.Bnj6A5eN.ttf"];
