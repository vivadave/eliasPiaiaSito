import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/ssr.js";
import { _ as _t, l as languageStore } from "../../../chunks/translation.js";
const css = {
  code: '@font-face{font-family:"leJour";src:url("$lib/Le Jour Script.ttf") format("truetype")}@font-face{font-family:"quattrocento";src:url("$lib/Quattrocento-Regular.ttf") format("truetype")}.description.svelte-14qj0mh.svelte-14qj0mh{font-size:1.3rem}@media(min-width: 1200px){.description.svelte-14qj0mh.svelte-14qj0mh{font-size:1.7rem}}@media(min-width: 1200px){}.title.svelte-14qj0mh.svelte-14qj0mh{text-transform:uppercase;font-size:3rem;letter-spacing:0.2rem;line-height:3.5rem}@media(min-width: 1200px){.title.svelte-14qj0mh.svelte-14qj0mh{font-size:6rem;letter-spacing:0.5rem;line-height:90px}}@media(min-width: 1200px){}.title-hidden.svelte-14qj0mh.svelte-14qj0mh{font-size:8rem;letter-spacing:0.4rem;line-height:80px}@media(min-width: 1200px){.title-hidden.svelte-14qj0mh.svelte-14qj0mh{font-size:13rem;letter-spacing:0.5rem;line-height:90px}}section.svelte-14qj0mh.svelte-14qj0mh{overflow:hidden;padding:6rem 0 8rem}@media(min-width: 1200px){section.svelte-14qj0mh.svelte-14qj0mh{padding:12rem 0 9rem}}section.svelte-14qj0mh .container.svelte-14qj0mh{display:flex;justify-content:center;align-items:center}section.svelte-14qj0mh .container .text-container.svelte-14qj0mh{display:flex;flex-direction:column;justify-content:center;height:100%;position:relative}section.svelte-14qj0mh .container .text-container .title-hidden.svelte-14qj0mh{text-transform:uppercase;color:white;top:-4rem;left:-1rem;position:absolute}section.svelte-14qj0mh .container .text-container .title.svelte-14qj0mh{text-transform:uppercase;color:#928781;z-index:1}section.svelte-14qj0mh .container .text-container .description.svelte-14qj0mh{z-index:1;padding-top:3rem}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _t } from \\"../../helper/translations\\";\\nimport { languageStore } from \\"../../store/translation\\";\\nexport let data;\\n$:\\n  translations = data.translations;\\n<\/script>\\r\\n<section class=\\"background w-full\\">\\r\\n  <article class=\\"container background h-full\\">\\r\\n      <div class=\\"text-container lg:pl-[2rem]\\">\\r\\n        <div class=\\"title\\">{  _t(translations, 'emozionaleTitle', $languageStore) }</div>\\r\\n        <div class=\\"title-hidden\\">{  _t(translations, 'emozionaleTitle', $languageStore).split(' ')?.pop() }</div>\\r\\n        <div class=\\"description lg:ml-[10%]\\">\\r\\n          {@html _t(translations, 'emozionaleDetailDesc', $languageStore) }\\r\\n        </div>       \\r\\n      </div>\\r\\n  </article>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\n@font-face {\\n  font-family: \\"leJour\\";\\n  src: url(\\"$lib/Le Jour Script.ttf\\") format(\\"truetype\\");\\n}\\n\\n@font-face {\\n  font-family: \\"quattrocento\\";\\n  src: url(\\"$lib/Quattrocento-Regular.ttf\\") format(\\"truetype\\");\\n}\\n\\n.le-jour {\\n  font-family: \\"leJour\\", serif;\\n  font-style: normal;\\n}\\n\\n.quattrocento {\\n  font-family: \\"quattrocento\\", serif;\\n}\\n\\n.description {\\n  font-size: 1.3rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .description {\\n    font-size: 1.7rem;\\n  }\\n}\\n\\n.smdescription {\\n  font-size: 1rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .smdescription {\\n    font-size: 1.3rem;\\n  }\\n}\\n\\n.title {\\n  text-transform: uppercase;\\n  font-size: 3rem;\\n  letter-spacing: 0.2rem;\\n  line-height: 3.5rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .title {\\n    font-size: 6rem;\\n    letter-spacing: 0.5rem;\\n    line-height: 90px;\\n  }\\n}\\n\\n.smtitle {\\n  font-size: 2.2rem;\\n  letter-spacing: 0.3rem;\\n  line-height: 3rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .smtitle {\\n    font-size: 3rem;\\n    letter-spacing: 0.35rem;\\n    line-height: 70px;\\n  }\\n}\\n\\n.title-hidden {\\n  font-size: 8rem;\\n  letter-spacing: 0.4rem;\\n  line-height: 80px;\\n}\\n\\n@media (min-width: 1200px) {\\n  .title-hidden {\\n    font-size: 13rem;\\n    letter-spacing: 0.5rem;\\n    line-height: 90px;\\n  }\\n}\\n\\nsection {\\n  overflow: hidden;\\n  padding: 6rem 0 8rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  section {\\n    padding: 12rem 0 9rem;\\n  }\\n}\\n\\nsection .container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nsection .container .text-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  height: 100%;\\n  position: relative;\\n}\\n\\nsection .container .text-container .title-hidden {\\n  text-transform: uppercase;\\n  color: white;\\n  top: -4rem;\\n  left: -1rem;\\n  position: absolute;\\n}\\n\\nsection .container .text-container .title {\\n  text-transform: uppercase;\\n  color: #928781;\\n  z-index: 1;\\n}\\n\\nsection .container .text-container .description {\\n  z-index: 1;\\n  padding-top: 3rem;\\n}</style>"],"names":[],"mappings":"AAsBA,UAAW,CACT,WAAW,CAAE,QAAQ,CACrB,GAAG,CAAE,8BAA8B,CAAC,OAAO,UAAU,CACvD,CAEA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,oCAAoC,CAAC,OAAO,UAAU,CAC7D,CAWA,0CAAa,CACX,SAAS,CAAE,MACb,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,0CAAa,CACX,SAAS,CAAE,MACb,CACF,CAMA,MAAO,YAAY,MAAM,CAAE,CAI3B,CAEA,oCAAO,CACL,cAAc,CAAE,SAAS,CACzB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,oCAAO,CACL,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACF,CAQA,MAAO,YAAY,MAAM,CAAE,CAM3B,CAEA,2CAAc,CACZ,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,2CAAc,CACZ,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACF,CAEA,qCAAQ,CACN,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,IAClB,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qCAAQ,CACN,OAAO,CAAE,KAAK,CAAC,CAAC,CAAC,IACnB,CACF,CAEA,sBAAO,CAAC,yBAAW,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CAEA,sBAAO,CAAC,UAAU,CAAC,8BAAgB,CACjC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QACZ,CAEA,sBAAO,CAAC,UAAU,CAAC,eAAe,CAAC,4BAAc,CAC/C,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,KAAK,CACZ,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,CACX,QAAQ,CAAE,QACZ,CAEA,sBAAO,CAAC,UAAU,CAAC,eAAe,CAAC,qBAAO,CACxC,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,CACX,CAEA,sBAAO,CAAC,UAAU,CAAC,eAAe,CAAC,2BAAa,CAC9C,OAAO,CAAE,CAAC,CACV,WAAW,CAAE,IACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translations;
  let $languageStore, $$unsubscribe_languageStore;
  $$unsubscribe_languageStore = subscribe(languageStore, (value) => $languageStore = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  translations = data.translations;
  $$unsubscribe_languageStore();
  return `<section class="background w-full svelte-14qj0mh"><article class="container background h-full svelte-14qj0mh"><div class="text-container lg:pl-[2rem] svelte-14qj0mh"><div class="title svelte-14qj0mh">${escape(_t(translations, "emozionaleTitle", $languageStore))}</div> <div class="title-hidden svelte-14qj0mh">${escape(_t(translations, "emozionaleTitle", $languageStore).split(" ")?.pop())}</div> <div class="description lg:ml-[10%] svelte-14qj0mh"><!-- HTML_TAG_START -->${_t(translations, "emozionaleDetailDesc", $languageStore)}<!-- HTML_TAG_END --></div></div></article> </section>`;
});
export {
  Page as default
};
