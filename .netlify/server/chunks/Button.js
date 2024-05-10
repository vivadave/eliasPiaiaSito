import { c as create_ssr_component, b as createEventDispatcher, e as escape, d as null_to_empty } from "./ssr.js";
const css = {
  code: ".background-light.svelte-14wfkia{background-color:#f6ede8}button.svelte-14wfkia{display:inline-flex;align-items:center;padding:0 20px;height:46px;border-radius:23px;background-color:#928781;color:white;letter-spacing:0.1rem;border:none;font-weight:600;font-size:14px;line-height:1;text-decoration:none;transition:color 0.3s, #f1e6de 0.3s;-webkit-transition:color 0.3s, #f1e6de 0.3s}button.svelte-14wfkia:hover{background-color:#4C4024}button.outline.svelte-14wfkia{background-color:white;color:#928781;border:1px solid #928781}button.outline.svelte-14wfkia:hover{background-color:#928781;color:white}button.dense.svelte-14wfkia{height:32px;border-radius:18px;padding:0 12px;font-size:12px}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nconst dispatch = createEventDispatcher();\\nexport let outline = false;\\nexport let dense = false;\\n<\/script>\\r\\n\\r\\n<button on:click={() => dispatch('click')} class=\\"{\`\${outline ? 'outline' : ''} \${dense ? 'dense' : ''}\`}\\">\\r\\n  <slot></slot>\\r\\n</button>\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\nbutton {\\n  display: inline-flex;\\n  align-items: center;\\n  padding: 0 20px;\\n  height: 46px;\\n  border-radius: 23px;\\n  background-color: #928781;\\n  color: white;\\n  letter-spacing: 0.1rem;\\n  border: none;\\n  font-weight: 600;\\n  font-size: 14px;\\n  line-height: 1;\\n  text-decoration: none;\\n  transition: color 0.3s, #f1e6de 0.3s;\\n  -webkit-transition: color 0.3s, #f1e6de 0.3s;\\n}\\n\\nbutton:hover {\\n  background-color: #4C4024;\\n}\\n\\nbutton.outline {\\n  background-color: white;\\n  color: #928781;\\n  border: 1px solid #928781;\\n}\\n\\nbutton.outline:hover {\\n  background-color: #928781;\\n  color: white;\\n}\\n\\nbutton.dense {\\n  height: 32px;\\n  border-radius: 18px;\\n  padding: 0 12px;\\n  font-size: 12px;\\n}</style>"],"names":[],"mappings":"AAUmB,gCAAkB,CACnC,gBAAgB,CAAE,OACpB,CAEA,qBAAO,CACL,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,CAAC,CACd,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,IAAI,CACpC,kBAAkB,CAAE,KAAK,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,IAC1C,CAEA,qBAAM,MAAO,CACX,gBAAgB,CAAE,OACpB,CAEA,MAAM,uBAAS,CACb,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CAEA,MAAM,uBAAQ,MAAO,CACnB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KACT,CAEA,MAAM,qBAAO,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,SAAS,CAAE,IACb"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { outline = false } = $$props;
  let { dense = false } = $$props;
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  $$result.css.add(css);
  return `<button class="${escape(null_to_empty(`${outline ? "outline" : ""} ${dense ? "dense" : ""}`), true) + " svelte-14wfkia"}">${slots.default ? slots.default({}) : ``} </button>`;
});
export {
  Button as B
};
