

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BWm-l7bN.js","_app/immutable/chunks/scheduler.BboCKSUd.js","_app/immutable/chunks/index.GiIZ0nsZ.js","_app/immutable/chunks/index.iZweDoLH.js","_app/immutable/chunks/Button.BD2fndp5.js"];
export const stylesheets = ["_app/immutable/assets/3.DyXxoGlf.css","_app/immutable/assets/Button.BkxGHTJc.css"];
export const fonts = [];
