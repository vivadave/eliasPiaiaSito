import { c as create_ssr_component, a as subscribe, f as add_attribute } from "../../../chunks/ssr.js";
import { _ as _t, l as languageStore } from "../../../chunks/translation.js";
const ElisaFoto = "/_app/immutable/assets/elisa.dXXTYmSS.jpg";
const css = {
  code: '@font-face{font-family:"leJour";src:url("$lib/Le Jour Script.ttf") format("truetype")}@font-face{font-family:"quattrocento";src:url("$lib/Quattrocento-Regular.ttf") format("truetype")}@media(min-width: 1200px){}@media(min-width: 1200px){}@media(min-width: 1200px){}@media(min-width: 1200px){}@media(min-width: 1200px){}section.svelte-1ejf5fe.svelte-1ejf5fe{display:flex;align-items:center;width:100%;container-type:inline-size;position:relative}section.svelte-1ejf5fe .image-container img.svelte-1ejf5fe{position:rel;border-radius:3rem;width:100%}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ElisaFoto from \\"$lib/images/elisa.jpg\\";\\nimport { _t } from \\"../../helper/translations\\";\\nimport { languageStore } from \\"../../store/translation\\";\\nexport let data;\\n$:\\n  translations = data.translations;\\nconst loremIpsun = \\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc. Nulla facilisi\\";\\n<\/script>\\r\\n\\r\\n<section class=\\"container flex-col md:flex-row md:mt-4\\">\\r\\n  <div class=\\"image-container flex p-5 w-full md:w-1/2 justify-center\\">\\r\\n    <img src={ElisaFoto} alt=\\"Elisa\\" />\\r\\n  </div>\\r\\n  <div class=\\"flex w-1/2\\">\\r\\n    {@html _t(translations, 'elisaDetailDesc', $languageStore) }\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\n@font-face {\\n  font-family: \\"leJour\\";\\n  src: url(\\"$lib/Le Jour Script.ttf\\") format(\\"truetype\\");\\n}\\n\\n@font-face {\\n  font-family: \\"quattrocento\\";\\n  src: url(\\"$lib/Quattrocento-Regular.ttf\\") format(\\"truetype\\");\\n}\\n\\n.le-jour {\\n  font-family: \\"leJour\\", serif;\\n  font-style: normal;\\n}\\n\\n.quattrocento {\\n  font-family: \\"quattrocento\\", serif;\\n}\\n\\n.description {\\n  font-size: 1.3rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .description {\\n    font-size: 1.7rem;\\n  }\\n}\\n\\n.smdescription {\\n  font-size: 1rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .smdescription {\\n    font-size: 1.3rem;\\n  }\\n}\\n\\n.title {\\n  text-transform: uppercase;\\n  font-size: 3rem;\\n  letter-spacing: 0.2rem;\\n  line-height: 3.5rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .title {\\n    font-size: 6rem;\\n    letter-spacing: 0.5rem;\\n    line-height: 90px;\\n  }\\n}\\n\\n.smtitle {\\n  font-size: 2.2rem;\\n  letter-spacing: 0.3rem;\\n  line-height: 3rem;\\n}\\n\\n@media (min-width: 1200px) {\\n  .smtitle {\\n    font-size: 3rem;\\n    letter-spacing: 0.35rem;\\n    line-height: 70px;\\n  }\\n}\\n\\n.title-hidden {\\n  font-size: 8rem;\\n  letter-spacing: 0.4rem;\\n  line-height: 80px;\\n}\\n\\n@media (min-width: 1200px) {\\n  .title-hidden {\\n    font-size: 13rem;\\n    letter-spacing: 0.5rem;\\n    line-height: 90px;\\n  }\\n}\\n\\nsection {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  container-type: inline-size;\\n  position: relative;\\n}\\n\\nsection .image-container img {\\n  position: rel;\\n  border-radius: 3rem;\\n  width: 100%;\\n}</style>\\r\\n"],"names":[],"mappings":"AAuBA,UAAW,CACT,WAAW,CAAE,QAAQ,CACrB,GAAG,CAAE,8BAA8B,CAAC,OAAO,UAAU,CACvD,CAEA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,oCAAoC,CAAC,OAAO,UAAU,CAC7D,CAeA,MAAO,YAAY,MAAM,CAAE,CAI3B,CAMA,MAAO,YAAY,MAAM,CAAE,CAI3B,CASA,MAAO,YAAY,MAAM,CAAE,CAM3B,CAQA,MAAO,YAAY,MAAM,CAAE,CAM3B,CAQA,MAAO,YAAY,MAAM,CAAE,CAM3B,CAEA,qCAAQ,CACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,WAAW,CAC3B,QAAQ,CAAE,QACZ,CAEA,sBAAO,CAAC,gBAAgB,CAAC,kBAAI,CAC3B,QAAQ,CAAE,GAAG,CACb,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IACT"}`
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
  return `<section class="container flex-col md:flex-row md:mt-4 svelte-1ejf5fe"><div class="image-container flex p-5 w-full md:w-1/2 justify-center" data-svelte-h="svelte-rym5de"><img${add_attribute("src", ElisaFoto, 0)} alt="Elisa" class="svelte-1ejf5fe"></div> <div class="flex w-1/2"><!-- HTML_TAG_START -->${_t(translations, "elisaDetailDesc", $languageStore)}<!-- HTML_TAG_END --></div> </section>`;
});
export {
  Page as default
};
