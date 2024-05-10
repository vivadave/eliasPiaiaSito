import { c as create_ssr_component, e as escape, d as null_to_empty, o as onDestroy, a as subscribe, n as noop, b as createEventDispatcher, f as add_attribute, v as validate_component, h as each } from "../../chunks/ssr.js";
import { l as languageStore, _ as _t } from "../../chunks/translation.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/client.js";
const css$6 = {
  code: 'section.svelte-1iy310n{display:flex;flex-direction:column;align-items:center;width:100%;container-type:inline-size;position:relative;padding:1.5cqw 0;transition:all 0.5s}section.small.svelte-1iy310n{padding:0.8cqw 0}.le-jour.svelte-1iy310n{font-size:10cqw;font-family:"leJour";line-height:20cqw}.quattrocento.svelte-1iy310n{font-size:3.5cqw;font-family:"quattrocento";text-transform:uppercase;letter-spacing:1cqw;opacity:1;transition:all 0.5s}.quattrocento.hide.svelte-1iy310n{opacity:0}',
  map: `{"version":3,"file":"Logo.svelte","sources":["Logo.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let small = false;\\n<\/script>\\r\\n\\r\\n<section class={small ? 'small' : ''}>\\r\\n  <span class=\\"le-jour\\">Elisa Piaia</span>\\r\\n  <span class={\`quattrocento \${small ? 'hide': ''}\`}>osteopathie fur mutter und kind</span>\\r\\n</section>\\r\\n\\r\\n<style lang=scss>/* the text must grow with the section */\\nsection {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n  container-type: inline-size;\\n  position: relative;\\n  padding: 1.5cqw 0;\\n  transition: all 0.5s;\\n}\\nsection.small {\\n  padding: 0.8cqw 0;\\n}\\n\\n.le-jour {\\n  font-size: 10cqw;\\n  font-family: \\"leJour\\";\\n  line-height: 20cqw;\\n}\\n\\n.quattrocento {\\n  font-size: 3.5cqw;\\n  font-family: \\"quattrocento\\";\\n  text-transform: uppercase;\\n  letter-spacing: 1cqw;\\n  opacity: 1;\\n  transition: all 0.5s;\\n}\\n.quattrocento.hide {\\n  opacity: 0;\\n}</style>"],"names":[],"mappings":"AASA,sBAAQ,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,WAAW,CAC3B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,MAAM,CAAC,CAAC,CACjB,UAAU,CAAE,GAAG,CAAC,IAClB,CACA,OAAO,qBAAO,CACZ,OAAO,CAAE,MAAM,CAAC,CAClB,CAEA,uBAAS,CACP,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,QAAQ,CACrB,WAAW,CAAE,KACf,CAEA,4BAAc,CACZ,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,cAAc,CAC3B,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,GAAG,CAAC,IAClB,CACA,aAAa,oBAAM,CACjB,OAAO,CAAE,CACX"}`
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { small = false } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css$6);
  return `<section class="${escape(null_to_empty(small ? "small" : ""), true) + " svelte-1iy310n"}"><span class="le-jour svelte-1iy310n" data-svelte-h="svelte-jtc8nf">Elisa Piaia</span> <span class="${escape(null_to_empty(`quattrocento ${small ? "hide" : ""}`), true) + " svelte-1iy310n"}">osteopathie fur mutter und kind</span> </section>`;
});
var Types;
(function(Types2) {
  Types2["string"] = "string";
  Types2["array"] = "array";
  Types2["object"] = "object";
  Types2["mediaQueryList"] = "mediaQueryList";
})(Types || (Types = {}));
const getType = (value) => {
  if (value instanceof Object && typeof value.addListener === "function" && typeof value.removeListener === "function") {
    return Types.mediaQueryList;
  } else if (Array.isArray(value)) {
    return Types.array;
  } else if (value instanceof Object) {
    return Types.object;
  }
  return Types.string;
};
class Calc {
  static get(mql) {
    return mql.media ? mql.matches : false;
  }
  static inline(mql) {
    return Calc.get(mql);
  }
  //@ts-ignore
  static array(mql) {
    return mql.map((mql2) => autoCalc(mql2));
  }
  //recursion :(
  static object(mql) {
    const res = {};
    for (const key in mql) {
      res[key] = autoCalc(mql[key]);
    }
    return res;
  }
}
function autoCalc(mql) {
  const type = getType(mql);
  if (type === Types.mediaQueryList)
    return Calc.inline(mql);
  if (type === Types.array)
    return Calc.array(mql);
  if (type === Types.object)
    return Calc.object(mql);
}
class MQL {
  static get(query) {
    return window.matchMedia(query);
  }
  static inline(query) {
    return MQL.get(query);
  }
  //@ts-ignore
  static array(queries) {
    return queries.map((query) => autoMQL(query));
  }
  //recursion :(
  static object(query) {
    const res = {};
    for (const key in query) {
      res[key] = autoMQL(query[key]);
    }
    return res;
  }
}
function autoMQL(query) {
  const type = getType(query);
  if (type === Types.string)
    return MQL.inline(query);
  if (type === Types.array)
    return MQL.array(query);
  if (type === Types.object)
    return MQL.object(query);
}
var MQLEventMethods;
(function(MQLEventMethods2) {
  MQLEventMethods2["add"] = "addEventListener";
  MQLEventMethods2["remove"] = "removeEventListener";
})(MQLEventMethods || (MQLEventMethods = {}));
class MQLEvent {
  static inline(item, handler = () => {
  }, method = MQLEventMethods.add) {
    item && item[method] && item[method]("change", handler);
  }
  static array(arr, handler = () => {
  }, method = MQLEventMethods.add) {
    arr.flat(Infinity).forEach((item) => autoMQLEvent(item, handler, method));
  }
  static object(obj, handler = () => {
  }, method = MQLEventMethods.add) {
    for (const key in obj) {
      autoMQLEvent(obj[key], handler, method);
    }
  }
}
function autoMQLEvent(mql, handler = () => {
}, method = MQLEventMethods.add) {
  const type = getType(mql);
  if (type === Types.mediaQueryList)
    return MQLEvent.inline(mql, handler, method);
  if (type === Types.array)
    return MQLEvent.array(mql, handler, method);
  if (type === Types.object)
    return MQLEvent.object(mql, handler, method);
}
function mediaStore(query) {
  if (typeof window === "undefined")
    return { ...writable(void 0), destroy: () => {
    } };
  const { subscribe: subscribe2, set } = writable(void 0);
  const mql = autoMQL(query);
  const handleChange = () => set(autoCalc(mql));
  handleChange();
  autoMQLEvent(mql, handleChange);
  return {
    subscribe: subscribe2,
    destroy() {
      autoMQLEvent(mql, handleChange, MQLEventMethods.remove);
    }
  };
}
const createMediaStore = mediaStore;
const MediaQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store = noop, $$subscribe_store = () => ($$unsubscribe_store(), $$unsubscribe_store = subscribe(store, ($$value) => $store = $$value), store);
  let { query = "" } = $$props;
  let { matches = false } = $$props;
  let { matchesArray = [] } = $$props;
  let { matchesObject = {} } = $$props;
  let store;
  const updateMatches = (...watches) => {
    if (query) {
      matchesArray = Array.isArray($store) ? $store : [];
      matchesObject = getType($store) === Types.object ? $store : {};
      matches = $store ?? (getType(query) === Types.array ? [] : getType(query) === Types.object ? {} : false);
    } else {
      matches = false;
      matchesArray = [];
    }
  };
  const start = () => {
    $$subscribe_store(store = createMediaStore(query));
    updateMatches();
  };
  const destroy = () => {
    updateMatches();
    store?.destroy;
  };
  const update = (...watchers) => {
    destroy();
    query && start();
  };
  onDestroy(() => {
    destroy();
  });
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.matches === void 0 && $$bindings.matches && matches !== void 0)
    $$bindings.matches(matches);
  if ($$props.matchesArray === void 0 && $$bindings.matchesArray && matchesArray !== void 0)
    $$bindings.matchesArray(matchesArray);
  if ($$props.matchesObject === void 0 && $$bindings.matchesObject && matchesObject !== void 0)
    $$bindings.matchesObject(matchesObject);
  {
    update(query);
  }
  {
    updateMatches($store);
  }
  $$unsubscribe_store();
  return `${slots.default ? slots.default({ matches, matchesArray }) : ``}`;
});
const css$5 = {
  code: ".button-container.svelte-vv9t6n.svelte-vv9t6n{display:inline-block;cursor:pointer}.button-container.svelte-vv9t6n .bar1.svelte-vv9t6n,.button-container.svelte-vv9t6n .bar2.svelte-vv9t6n,.button-container.svelte-vv9t6n .bar3.svelte-vv9t6n{width:35px;height:3px;background-color:#928781;margin:7px 0;transition:0.4s}.button-container.outline.svelte-vv9t6n.svelte-vv9t6n{outline-style:none}.button-container.outline.svelte-vv9t6n .bar1.svelte-vv9t6n,.button-container.outline.svelte-vv9t6n .bar2.svelte-vv9t6n,.button-container.outline.svelte-vv9t6n .bar3.svelte-vv9t6n{background-color:#f1e6de}.button-container.change.svelte-vv9t6n .bar1.svelte-vv9t6n{transform:rotate(-45deg) translate(-8px, 6px)}.button-container.change.svelte-vv9t6n .bar2.svelte-vv9t6n{opacity:0}.button-container.change.svelte-vv9t6n .bar3.svelte-vv9t6n{transform:rotate(45deg) translate(-8px, -6px)}",
  map: `{"version":3,"file":"ButtonMenu.svelte","sources":["ButtonMenu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nexport let outline = false;\\nexport let navOpen = false;\\nconst dispatch = createEventDispatcher();\\n<\/script>\\r\\n\\r\\n<button class=\\"button-container\\" class:outline class:change={navOpen} on:click={() => dispatch('click')}>\\r\\n  <div class=\\"bar1\\"></div>\\r\\n  <div class=\\"bar2\\"></div>\\r\\n  <div class=\\"bar3\\"></div>\\r\\n</button>\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\n.button-container {\\n  display: inline-block;\\n  cursor: pointer;\\n}\\n\\n.button-container .bar1, .button-container .bar2, .button-container .bar3 {\\n  width: 35px;\\n  height: 3px;\\n  background-color: #928781;\\n  margin: 7px 0;\\n  transition: 0.4s;\\n}\\n\\n.button-container.outline {\\n  outline-style: none;\\n}\\n\\n.button-container.outline .bar1, .button-container.outline .bar2, .button-container.outline .bar3 {\\n  background-color: #f1e6de;\\n}\\n\\n.button-container.change .bar1 {\\n  transform: rotate(-45deg) translate(-8px, 6px);\\n}\\n\\n.button-container.change .bar2 {\\n  opacity: 0;\\n}\\n\\n.button-container.change .bar3 {\\n  transform: rotate(45deg) translate(-8px, -6px);\\n}</style>"],"names":[],"mappings":"AAgBA,6CAAkB,CAChB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,OACV,CAEA,+BAAiB,CAAC,mBAAK,CAAE,+BAAiB,CAAC,mBAAK,CAAE,+BAAiB,CAAC,mBAAM,CACxE,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,UAAU,CAAE,IACd,CAEA,iBAAiB,oCAAS,CACxB,aAAa,CAAE,IACjB,CAEA,iBAAiB,sBAAQ,CAAC,mBAAK,CAAE,iBAAiB,sBAAQ,CAAC,mBAAK,CAAE,iBAAiB,sBAAQ,CAAC,mBAAM,CAChG,gBAAgB,CAAE,OACpB,CAEA,iBAAiB,qBAAO,CAAC,mBAAM,CAC7B,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,UAAU,IAAI,CAAC,CAAC,GAAG,CAC/C,CAEA,iBAAiB,qBAAO,CAAC,mBAAM,CAC7B,OAAO,CAAE,CACX,CAEA,iBAAiB,qBAAO,CAAC,mBAAM,CAC7B,SAAS,CAAE,OAAO,KAAK,CAAC,CAAC,UAAU,IAAI,CAAC,CAAC,IAAI,CAC/C"}`
};
const ButtonMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { outline = false } = $$props;
  let { navOpen = false } = $$props;
  createEventDispatcher();
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.navOpen === void 0 && $$bindings.navOpen && navOpen !== void 0)
    $$bindings.navOpen(navOpen);
  $$result.css.add(css$5);
  return `<button class="${[
    "button-container svelte-vv9t6n",
    (outline ? "outline" : "") + " " + (navOpen ? "change" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-ujoadv"><div class="bar1 svelte-vv9t6n"></div> <div class="bar2 svelte-vv9t6n"></div> <div class="bar3 svelte-vv9t6n"></div> </button>`;
});
const whatsApp = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%234C4024'%3e%3cpath%20d='M12.04%202C6.58%202%202.13%206.45%202.13%2011.91C2.13%2013.66%202.59%2015.36%203.45%2016.86L2.05%2022L7.3%2020.62C8.75%2021.41%2010.38%2021.83%2012.04%2021.83C17.5%2021.83%2021.95%2017.38%2021.95%2011.92C21.95%209.27%2020.92%206.78%2019.05%204.91C17.18%203.03%2014.69%202%2012.04%202M12.05%203.67C14.25%203.67%2016.31%204.53%2017.87%206.09C19.42%207.65%2020.28%209.72%2020.28%2011.92C20.28%2016.46%2016.58%2020.15%2012.04%2020.15C10.56%2020.15%209.11%2019.76%207.85%2019L7.55%2018.83L4.43%2019.65L5.26%2016.61L5.06%2016.29C4.24%2015%203.8%2013.47%203.8%2011.91C3.81%207.37%207.5%203.67%2012.05%203.67M8.53%207.33C8.37%207.33%208.1%207.39%207.87%207.64C7.65%207.89%207%208.5%207%209.71C7%2010.93%207.89%2012.1%208%2012.27C8.14%2012.44%209.76%2014.94%2012.25%2016C12.84%2016.27%2013.3%2016.42%2013.66%2016.53C14.25%2016.72%2014.79%2016.69%2015.22%2016.63C15.7%2016.56%2016.68%2016.03%2016.89%2015.45C17.1%2014.87%2017.1%2014.38%2017.04%2014.27C16.97%2014.17%2016.81%2014.11%2016.56%2014C16.31%2013.86%2015.09%2013.26%2014.87%2013.18C14.64%2013.1%2014.5%2013.06%2014.31%2013.3C14.15%2013.55%2013.67%2014.11%2013.53%2014.27C13.38%2014.44%2013.24%2014.46%2013%2014.34C12.74%2014.21%2011.94%2013.95%2011%2013.11C10.26%2012.45%209.77%2011.64%209.62%2011.39C9.5%2011.15%209.61%2011%209.73%2010.89C9.84%2010.78%2010%2010.6%2010.1%2010.45C10.23%2010.31%2010.27%2010.2%2010.35%2010.04C10.43%209.87%2010.39%209.73%2010.33%209.61C10.27%209.5%209.77%208.26%209.56%207.77C9.36%207.29%209.16%207.35%209%207.34C8.86%207.34%208.7%207.33%208.53%207.33Z'%20/%3e%3c/svg%3e";
const whatsAppLight = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%23f8ece7'%3e%3cpath%20d='M12.04%202C6.58%202%202.13%206.45%202.13%2011.91C2.13%2013.66%202.59%2015.36%203.45%2016.86L2.05%2022L7.3%2020.62C8.75%2021.41%2010.38%2021.83%2012.04%2021.83C17.5%2021.83%2021.95%2017.38%2021.95%2011.92C21.95%209.27%2020.92%206.78%2019.05%204.91C17.18%203.03%2014.69%202%2012.04%202M12.05%203.67C14.25%203.67%2016.31%204.53%2017.87%206.09C19.42%207.65%2020.28%209.72%2020.28%2011.92C20.28%2016.46%2016.58%2020.15%2012.04%2020.15C10.56%2020.15%209.11%2019.76%207.85%2019L7.55%2018.83L4.43%2019.65L5.26%2016.61L5.06%2016.29C4.24%2015%203.8%2013.47%203.8%2011.91C3.81%207.37%207.5%203.67%2012.05%203.67M8.53%207.33C8.37%207.33%208.1%207.39%207.87%207.64C7.65%207.89%207%208.5%207%209.71C7%2010.93%207.89%2012.1%208%2012.27C8.14%2012.44%209.76%2014.94%2012.25%2016C12.84%2016.27%2013.3%2016.42%2013.66%2016.53C14.25%2016.72%2014.79%2016.69%2015.22%2016.63C15.7%2016.56%2016.68%2016.03%2016.89%2015.45C17.1%2014.87%2017.1%2014.38%2017.04%2014.27C16.97%2014.17%2016.81%2014.11%2016.56%2014C16.31%2013.86%2015.09%2013.26%2014.87%2013.18C14.64%2013.1%2014.5%2013.06%2014.31%2013.3C14.15%2013.55%2013.67%2014.11%2013.53%2014.27C13.38%2014.44%2013.24%2014.46%2013%2014.34C12.74%2014.21%2011.94%2013.95%2011%2013.11C10.26%2012.45%209.77%2011.64%209.62%2011.39C9.5%2011.15%209.61%2011%209.73%2010.89C9.84%2010.78%2010%2010.6%2010.1%2010.45C10.23%2010.31%2010.27%2010.2%2010.35%2010.04C10.43%209.87%2010.39%209.73%2010.33%209.61C10.27%209.5%209.77%208.26%209.56%207.77C9.36%207.29%209.16%207.35%209%207.34C8.86%207.34%208.7%207.33%208.53%207.33Z'%20/%3e%3c/svg%3e";
const css$4 = {
  code: ".whatsapp-button.svelte-1kxvgfm.svelte-1kxvgfm{border-radius:50%;padding:10px;display:flex;cursor:pointer;transition:background-color 0.3s}.whatsapp-button.svelte-1kxvgfm img.svelte-1kxvgfm{width:30px}.whatsapp-button.svelte-1kxvgfm.svelte-1kxvgfm:hover{background-color:#4C4024}",
  map: '{"version":3,"file":"WhatsAppButton.svelte","sources":["WhatsAppButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">import whatsApp from \\"../lib/images/whatsapp.svg\\";\\nimport whatsAppLight from \\"../lib/images/whatsappLight.svg\\";\\nexport let invertColor = false;\\n<\/script>\\r\\n\\r\\n<a class=\\"whatsapp-button\\" href=\\"https://wa.me/+393292918803\\">\\r\\n  <img src={invertColor ? whatsApp : whatsAppLight} class:invertColor alt=\\"whatsapp icon\\"/>\\r\\n</a>\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\n.whatsapp-button {\\n  border-radius: 50%;\\n  padding: 10px;\\n  display: flex;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n}\\n\\n.whatsapp-button img {\\n  width: 30px;\\n}\\n\\n.whatsapp-button:hover {\\n  background-color: #4C4024;\\n}</style>"],"names":[],"mappings":"AAaA,8CAAiB,CACf,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAC/B,CAEA,+BAAgB,CAAC,kBAAI,CACnB,KAAK,CAAE,IACT,CAEA,8CAAgB,MAAO,CACrB,gBAAgB,CAAE,OACpB"}'
};
const WhatsAppButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { invertColor = false } = $$props;
  if ($$props.invertColor === void 0 && $$bindings.invertColor && invertColor !== void 0)
    $$bindings.invertColor(invertColor);
  $$result.css.add(css$4);
  return `<a class="whatsapp-button svelte-1kxvgfm" href="https://wa.me/+393292918803"><img${add_attribute("src", invertColor ? whatsApp : whatsAppLight, 0)} alt="whatsapp icon" class="${["svelte-1kxvgfm", invertColor ? "invertColor" : ""].join(" ").trim()}"> </a>`;
});
const css$3 = {
  code: "nav.svelte-1blhjzx ul.svelte-1blhjzx{list-style:none;display:flex;gap:25px}nav.svelte-1blhjzx ul button.svelte-1blhjzx{cursor:pointer;transition:color 0.3s;text-transform:uppercase;color:#4C4024;align-items:center}nav.svelte-1blhjzx ul button.svelte-1blhjzx:hover{color:#928781}nav.svelte-1blhjzx .buttn-container.svelte-1blhjzx{position:relative}nav.svelte-1blhjzx aside.svelte-1blhjzx{position:fixed;top:0;right:0;background-color:#928781;width:100%;height:100vh;transform:translateX(100%);transition:transform 0.3s}nav.svelte-1blhjzx aside header.svelte-1blhjzx{display:flex;justify-content:space-between;padding:1rem}nav.svelte-1blhjzx aside ul.svelte-1blhjzx{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;list-style:none;gap:0}nav.svelte-1blhjzx aside ul li button.svelte-1blhjzx{text-transform:uppercase;color:white;font-size:1rem;padding:1rem;cursor:pointer;transition:color 0.3s}nav.svelte-1blhjzx aside ul li button.svelte-1blhjzx:hover{color:#4C4024}nav.svelte-1blhjzx aside.menuOpen.svelte-1blhjzx{transform:translateX(0)}",
  map: `{"version":3,"file":"Menu.svelte","sources":["Menu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _t } from \\"../helper/translations\\";\\nimport MediaQuery from \\"svelte-media-queries\\";\\nimport { languageStore } from \\"../store/translation\\";\\nimport Logo from \\"./Logo.svelte\\";\\nimport ButtonMenu from \\"./ButtonMenu.svelte\\";\\nimport WhatsAppButton from \\"./WhatsAppButton.svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nconst languages = [{ key: \\"it\\", name: \\"Italiano\\" }, { key: \\"de\\", name: \\"Deutsch\\" }];\\nconst menuVoices = [\\n  { to: \\"/elisa\\", key: \\"menuChiSono\\" },\\n  { to: \\"/osteopatia\\", key: \\"menuOsteopatia\\" },\\n  { to: \\"/emozionale\\", key: \\"menuProntoSoccorsoEmotivo\\" },\\n  { to: \\"/#\\", key: \\"menuContatti\\" }\\n];\\nexport let translations;\\nlet menuOpen = false;\\n$:\\n  language = languages.find((l) => l.key !== $languageStore) || languages[0];\\nconst changeLanguage = () => {\\n  $languageStore = $languageStore === \\"it\\" ? \\"de\\" : \\"it\\";\\n};\\n<\/script>\\r\\n\\r\\n<nav class=\\"menu\\">\\r\\n    <MediaQuery query='(max-width: 1200px)' let:matches>\\r\\n      {#if matches}\\r\\n        <div class=\\"buttn-container\\">\\r\\n          <ButtonMenu navOpen={menuOpen} on:click={() => menuOpen = !menuOpen}/>\\r\\n          <aside class:menuOpen>\\r\\n            <header>\\r\\n              <button style=\\"width: 170px; color: white\\"\\r\\n                      class=\\"pt-2\\"\\r\\n                      on:click={() => { goto('/'); menuOpen = false }}>\\r\\n                <Logo/>\\r\\n            </button>\\r\\n              <ButtonMenu outline navOpen={menuOpen} on:click={() => menuOpen = !menuOpen}/>\\r\\n            </header>\\r\\n            <ul>\\r\\n            {#each menuVoices as voice}\\r\\n                <li>\\r\\n                  <button on:click={() => { goto(voice.to); menuOpen = false }}>\\r\\n                    { _t(translations, voice.key, $languageStore) }\\r\\n                  </button>\\r\\n                </li>\\r\\n            {/each}\\r\\n              <li><button on:click={() => changeLanguage()}>{language.name}</button></li>\\r\\n              <li><WhatsAppButton /></li>\\r\\n            </ul>\\r\\n          </aside>\\r\\n        </div>\\r\\n      {:else}\\r\\n        <ul class=\\"flat-menu flex justify-center\\">\\r\\n        {#each menuVoices as voice}\\r\\n          <li>\\r\\n            <button on:click={() => goto(voice.to)}>\\r\\n              { _t(translations, voice.key, $languageStore) }\\r\\n            </button>\\r\\n          </li>\\r\\n        {/each}\\r\\n        <li>\\r\\n          <button on:click={() => changeLanguage()}>{language.name}</button>\\r\\n        </li>\\r\\n        </ul>\\r\\n      {/if}\\r\\n    </MediaQuery>\\r\\n</nav>\\r\\n\\r\\n\\r\\n<style lang=scss>.background-light {\\n  background-color: #f6ede8;\\n}\\n\\nnav ul {\\n  list-style: none;\\n  display: flex;\\n  gap: 25px;\\n}\\n\\nnav ul button {\\n  cursor: pointer;\\n  transition: color 0.3s;\\n  text-transform: uppercase;\\n  color: #4C4024;\\n  align-items: center;\\n}\\n\\nnav ul button:hover {\\n  color: #928781;\\n}\\n\\nnav .buttn-container {\\n  position: relative;\\n}\\n\\nnav aside {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  background-color: #928781;\\n  width: 100%;\\n  height: 100vh;\\n  transform: translateX(100%);\\n  transition: transform 0.3s;\\n}\\n\\nnav aside header {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1rem;\\n}\\n\\nnav aside ul {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-end;\\n  list-style: none;\\n  gap: 0;\\n}\\n\\nnav aside ul li button {\\n  text-transform: uppercase;\\n  color: white;\\n  font-size: 1rem;\\n  padding: 1rem;\\n  cursor: pointer;\\n  transition: color 0.3s;\\n}\\n\\nnav aside ul li button:hover {\\n  color: #4C4024;\\n}\\n\\nnav aside.menuOpen {\\n  transform: translateX(0);\\n}</style>"],"names":[],"mappings":"AAwEA,kBAAG,CAAC,iBAAG,CACL,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CAEA,kBAAG,CAAC,EAAE,CAAC,qBAAO,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,KAAK,CAAC,IAAI,CACtB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,MACf,CAEA,kBAAG,CAAC,EAAE,CAAC,qBAAM,MAAO,CAClB,KAAK,CAAE,OACT,CAEA,kBAAG,CAAC,+BAAiB,CACnB,QAAQ,CAAE,QACZ,CAEA,kBAAG,CAAC,oBAAM,CACR,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,UAAU,CAAE,SAAS,CAAC,IACxB,CAEA,kBAAG,CAAC,KAAK,CAAC,qBAAO,CACf,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IACX,CAEA,kBAAG,CAAC,KAAK,CAAC,iBAAG,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,QAAQ,CACrB,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,CACP,CAEA,kBAAG,CAAC,KAAK,CAAC,EAAE,CAAC,EAAE,CAAC,qBAAO,CACrB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,KAAK,CAAC,IACpB,CAEA,kBAAG,CAAC,KAAK,CAAC,EAAE,CAAC,EAAE,CAAC,qBAAM,MAAO,CAC3B,KAAK,CAAE,OACT,CAEA,kBAAG,CAAC,KAAK,wBAAU,CACjB,SAAS,CAAE,WAAW,CAAC,CACzB"}`
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language;
  let $languageStore, $$unsubscribe_languageStore;
  $$unsubscribe_languageStore = subscribe(languageStore, (value) => $languageStore = value);
  const languages = [{ key: "it", name: "Italiano" }, { key: "de", name: "Deutsch" }];
  const menuVoices = [
    { to: "/elisa", key: "menuChiSono" },
    { to: "/osteopatia", key: "menuOsteopatia" },
    {
      to: "/emozionale",
      key: "menuProntoSoccorsoEmotivo"
    },
    { to: "/#", key: "menuContatti" }
  ];
  let { translations } = $$props;
  let menuOpen = false;
  if ($$props.translations === void 0 && $$bindings.translations && translations !== void 0)
    $$bindings.translations(translations);
  $$result.css.add(css$3);
  language = languages.find((l) => l.key !== $languageStore) || languages[0];
  $$unsubscribe_languageStore();
  return `<nav class="menu svelte-1blhjzx">${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="buttn-container svelte-1blhjzx">${validate_component(ButtonMenu, "ButtonMenu").$$render($$result, { navOpen: menuOpen }, {}, {})} <aside class="${["svelte-1blhjzx", ""].join(" ").trim()}"><header class="svelte-1blhjzx"><button style="width: 170px; color: white" class="pt-2 svelte-1blhjzx">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</button> ${validate_component(ButtonMenu, "ButtonMenu").$$render($$result, { outline: true, navOpen: menuOpen }, {}, {})}</header> <ul class="svelte-1blhjzx">${each(menuVoices, (voice) => {
        return `<li><button class="svelte-1blhjzx">${escape(_t(translations, voice.key, $languageStore))}</button> </li>`;
      })} <li><button class="svelte-1blhjzx">${escape(language.name)}</button></li> <li>${validate_component(WhatsAppButton, "WhatsAppButton").$$render($$result, {}, {}, {})}</li></ul></aside></div>` : `<ul class="flat-menu flex justify-center svelte-1blhjzx">${each(menuVoices, (voice) => {
        return `<li><button class="svelte-1blhjzx">${escape(_t(translations, voice.key, $languageStore))}</button> </li>`;
      })} <li><button class="svelte-1blhjzx">${escape(language.name)}</button></li></ul>`}`;
    }
  })} </nav>`;
});
const css$2 = {
  code: "header.svelte-1xemfpb.svelte-1xemfpb{height:100px}header.small.svelte-1xemfpb.svelte-1xemfpb{height:70px}@media(min-width: 1200px){header.svelte-1xemfpb.svelte-1xemfpb{height:120px}header.small.svelte-1xemfpb.svelte-1xemfpb{height:80px}}header.svelte-1xemfpb .header-inner.svelte-1xemfpb{height:100%;width:100%;display:flex;justify-content:space-between;transition:all 1s}header.svelte-1xemfpb .header-inner .logo.svelte-1xemfpb{width:300px}@media(max-width: 768px){header.svelte-1xemfpb .header-inner .logo.svelte-1xemfpb{width:200px}}@media(max-width: 576px){header.svelte-1xemfpb .header-inner .logo.svelte-1xemfpb{width:150px}}header.svelte-1xemfpb .header-inner .menu.svelte-1xemfpb{height:100%;display:flex;align-items:center;justify-content:flex-end}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Logo from \\"./Logo.svelte\\";\\nimport Menu from \\"./Menu.svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nexport let translations;\\nexport let small = false;\\n<\/script>\\r\\n\\r\\n<header class={\`container \${small ? 'small' : ''}\`}>\\r\\n  <div class=\\"header-inner\\">\\r\\n    <button class=\\"logo\\" on:click={() => {goto('/')}}>\\r\\n      <Logo small={small}/>\\r\\n    </button>\\r\\n    <div class=\\"menu\\">\\r\\n      <Menu translations={translations}/>\\r\\n    </div>\\r\\n  </div>\\r\\n</header>\\r\\n\\r\\n<style lang=scss>header {\\n  height: 100px;\\n}\\nheader.small {\\n  height: 70px;\\n}\\n@media (min-width: 1200px) {\\n  header {\\n    height: 120px;\\n  }\\n  header.small {\\n    height: 80px;\\n  }\\n}\\nheader .header-inner {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  transition: all 1s;\\n}\\nheader .header-inner .logo {\\n  width: 300px;\\n}\\n@media (max-width: 768px) {\\n  header .header-inner .logo {\\n    width: 200px;\\n  }\\n}\\n@media (max-width: 576px) {\\n  header .header-inner .logo {\\n    width: 150px;\\n  }\\n}\\nheader .header-inner .menu {\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n}</style>\\r\\n\\r\\n"],"names":[],"mappings":"AAkBiB,oCAAO,CACtB,MAAM,CAAE,KACV,CACA,MAAM,oCAAO,CACX,MAAM,CAAE,IACV,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,oCAAO,CACL,MAAM,CAAE,KACV,CACA,MAAM,oCAAO,CACX,MAAM,CAAE,IACV,CACF,CACA,qBAAM,CAAC,4BAAc,CACnB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,UAAU,CAAE,GAAG,CAAC,EAClB,CACA,qBAAM,CAAC,aAAa,CAAC,oBAAM,CACzB,KAAK,CAAE,KACT,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAC,aAAa,CAAC,oBAAM,CACzB,KAAK,CAAE,KACT,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAC,aAAa,CAAC,oBAAM,CACzB,KAAK,CAAE,KACT,CACF,CACA,qBAAM,CAAC,aAAa,CAAC,oBAAM,CACzB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,QACnB"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { translations } = $$props;
  let { small = false } = $$props;
  if ($$props.translations === void 0 && $$bindings.translations && translations !== void 0)
    $$bindings.translations(translations);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  $$result.css.add(css$2);
  return `<header class="${escape(null_to_empty(`container ${small ? "small" : ""}`), true) + " svelte-1xemfpb"}"><div class="header-inner svelte-1xemfpb"><button class="logo svelte-1xemfpb">${validate_component(Logo, "Logo").$$render($$result, { small }, {}, {})}</button> <div class="menu svelte-1xemfpb">${validate_component(Menu, "Menu").$$render($$result, { translations }, {}, {})}</div></div> </header>`;
});
const css$1 = {
  code: "footer.svelte-1gzno3h.svelte-1gzno3h{background-color:#f1e6de;padding:2rem 0}footer.svelte-1gzno3h .footer-content.svelte-1gzno3h{display:flex;justify-content:space-between;align-items:center;width:100%}footer.svelte-1gzno3h .footer-content .footer-logo.svelte-1gzno3h{width:200px;cursor:pointer}footer.svelte-1gzno3h .footer-content .footer-text p.svelte-1gzno3h{color:#928781;font-size:1.2rem}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Logo from \\"./Logo.svelte\\";\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n  <div class=\\"container\\">\\r\\n    <div class=\\"footer-content\\">\\r\\n      <button class=\\"footer-logo\\" on:click={() => {window.location.href = '/'}}>\\r\\n        <Logo />\\r\\n      </button>\\r\\n      <div class=\\"footer-text\\">\\r\\n        <p>© 2024 - Tutti i diritti riservati</p>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</footer>\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\nfooter {\\n  background-color: #f1e6de;\\n  padding: 2rem 0;\\n}\\n\\nfooter .footer-content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\nfooter .footer-content .footer-logo {\\n  width: 200px;\\n  cursor: pointer;\\n}\\n\\nfooter .footer-content .footer-text p {\\n  color: #928781;\\n  font-size: 1.2rem;\\n}</style>"],"names":[],"mappings":"AAoBA,oCAAO,CACL,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CAAC,CAChB,CAEA,qBAAM,CAAC,8BAAgB,CACrB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IACT,CAEA,qBAAM,CAAC,eAAe,CAAC,2BAAa,CAClC,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,OACV,CAEA,qBAAM,CAAC,eAAe,CAAC,YAAY,CAAC,gBAAE,CACpC,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,MACb"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1gzno3h"><div class="container"><div class="footer-content svelte-1gzno3h"><button class="footer-logo svelte-1gzno3h">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</button> <div class="footer-text" data-svelte-h="svelte-qgxdk8"><p class="svelte-1gzno3h">© 2024 - Tutti i diritti riservati</p></div></div></div> </footer>`;
});
const css = {
  code: '@font-face{font-family:"leJour";src:url("$lib/Le Jour Script.ttf") format("truetype")}@font-face{font-family:"quattrocento";src:url("$lib/Quattrocento-Regular.ttf") format("truetype")}.le-jour.svelte-1l7ddg4{font-family:"leJour", serif;font-style:normal}.quattrocento.svelte-1l7ddg4{font-family:"quattrocento", serif}.description.svelte-1l7ddg4{font-size:1.3rem}@media(min-width: 1200px){.description.svelte-1l7ddg4{font-size:1.7rem}}.smdescription.svelte-1l7ddg4{font-size:1rem}@media(min-width: 1200px){.smdescription.svelte-1l7ddg4{font-size:1.3rem}}.title.svelte-1l7ddg4{text-transform:uppercase;font-size:3rem;letter-spacing:0.2rem;line-height:3.5rem}@media(min-width: 1200px){.title.svelte-1l7ddg4{font-size:6rem;letter-spacing:0.5rem;line-height:90px}}.smtitle.svelte-1l7ddg4{font-size:2.2rem;letter-spacing:0.3rem;line-height:3rem}@media(min-width: 1200px){.smtitle.svelte-1l7ddg4{font-size:3rem;letter-spacing:0.35rem;line-height:70px}}.title-hidden.svelte-1l7ddg4{font-size:8rem;letter-spacing:0.4rem;line-height:80px}@media(min-width: 1200px){.title-hidden.svelte-1l7ddg4{font-size:13rem;letter-spacing:0.5rem;line-height:90px}}.header.svelte-1l7ddg4{position:fixed;top:0;left:0;width:100vw;z-index:1000;background:transparent;transition:background 0.3s}.header.glass.svelte-1l7ddg4{background:rgba(255, 255, 255, 0.8)}',
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from \\"../components/Header.svelte\\";\\nimport Footer from \\"../components/Footer.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nimport { fly } from \\"svelte/transition\\";\\nimport { languageStore } from \\"../store/translation\\";\\nimport \\"../app.css\\";\\nimport \\"../style/style.scss\\";\\nexport let data;\\nlet scrollY = 0;\\nonMount(() => {\\n  const browserLanguage = navigator.language.split(\\"-\\")[0];\\n  if (browserLanguage === \\"it\\" || browserLanguage === \\"de\\") {\\n    languageStore.set(browserLanguage);\\n  } else {\\n    languageStore.set(\\"it\\");\\n  }\\n});\\n$:\\n  glassHeader = scrollY > 100;\\n<\/script>\\r\\n\\r\\n<svelte:window bind:scrollY />\\r\\n\\r\\n<div class={\`header \${glassHeader ? 'glass' : ''}\`}>\\r\\n<Header small={glassHeader} translations={data.translations}/>\\r\\n</div>\\r\\n\\r\\n{#key document.location.pathname}\\r\\n  <div in:fly={{ x: -200, duration: 300, delay: 300 }}\\r\\n       out:fly={{ x: 200, duration: 300 }}\\r\\n  >\\r\\n  \\r\\n  <section class=\\"py-[100px] lg:py-[110px]\\">\\r\\n      <slot/>\\r\\n    </section>\\r\\n  </div>\\r\\n{/key}\\r\\n<Footer />\\r\\n\\r\\n<style lang=\\"scss\\">@font-face {\\n  font-family: \\"leJour\\";\\n  src: url(\\"$lib/Le Jour Script.ttf\\") format(\\"truetype\\");\\n}\\n@font-face {\\n  font-family: \\"quattrocento\\";\\n  src: url(\\"$lib/Quattrocento-Regular.ttf\\") format(\\"truetype\\");\\n}\\n.le-jour {\\n  font-family: \\"leJour\\", serif;\\n  font-style: normal;\\n}\\n.quattrocento {\\n  font-family: \\"quattrocento\\", serif;\\n}\\n.description {\\n  font-size: 1.3rem;\\n}\\n@media (min-width: 1200px) {\\n  .description {\\n    font-size: 1.7rem;\\n  }\\n}\\n.smdescription {\\n  font-size: 1rem;\\n}\\n@media (min-width: 1200px) {\\n  .smdescription {\\n    font-size: 1.3rem;\\n  }\\n}\\n.title {\\n  text-transform: uppercase;\\n  font-size: 3rem;\\n  letter-spacing: 0.2rem;\\n  line-height: 3.5rem;\\n}\\n@media (min-width: 1200px) {\\n  .title {\\n    font-size: 6rem;\\n    letter-spacing: 0.5rem;\\n    line-height: 90px;\\n  }\\n}\\n.smtitle {\\n  font-size: 2.2rem;\\n  letter-spacing: 0.3rem;\\n  line-height: 3rem;\\n}\\n@media (min-width: 1200px) {\\n  .smtitle {\\n    font-size: 3rem;\\n    letter-spacing: 0.35rem;\\n    line-height: 70px;\\n  }\\n}\\n.title-hidden {\\n  font-size: 8rem;\\n  letter-spacing: 0.4rem;\\n  line-height: 80px;\\n}\\n@media (min-width: 1200px) {\\n  .title-hidden {\\n    font-size: 13rem;\\n    letter-spacing: 0.5rem;\\n    line-height: 90px;\\n  }\\n}\\n.header {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  z-index: 1000;\\n  background: transparent;\\n  transition: background 0.3s;\\n}\\n.header.glass {\\n  background: rgba(255, 255, 255, 0.8);\\n}</style>"],"names":[],"mappings":"AAuCmB,UAAW,CAC5B,WAAW,CAAE,QAAQ,CACrB,GAAG,CAAE,8BAA8B,CAAC,OAAO,UAAU,CACvD,CACA,UAAW,CACT,WAAW,CAAE,cAAc,CAC3B,GAAG,CAAE,oCAAoC,CAAC,OAAO,UAAU,CAC7D,CACA,uBAAS,CACP,WAAW,CAAE,QAAQ,CAAC,CAAC,KAAK,CAC5B,UAAU,CAAE,MACd,CACA,4BAAc,CACZ,WAAW,CAAE,cAAc,CAAC,CAAC,KAC/B,CACA,2BAAa,CACX,SAAS,CAAE,MACb,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,2BAAa,CACX,SAAS,CAAE,MACb,CACF,CACA,6BAAe,CACb,SAAS,CAAE,IACb,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAe,CACb,SAAS,CAAE,MACb,CACF,CACA,qBAAO,CACL,cAAc,CAAE,SAAS,CACzB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,qBAAO,CACL,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACF,CACA,uBAAS,CACP,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,uBAAS,CACP,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,OAAO,CACvB,WAAW,CAAE,IACf,CACF,CACA,4BAAc,CACZ,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,4BAAc,CACZ,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACF,CACA,sBAAQ,CACN,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,WAAW,CACvB,UAAU,CAAE,UAAU,CAAC,IACzB,CACA,OAAO,qBAAO,CACZ,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let glassHeader;
  let { data } = $$props;
  let scrollY = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  glassHeader = scrollY > 100;
  return ` <div class="${escape(null_to_empty(`header ${glassHeader ? "glass" : ""}`), true) + " svelte-1l7ddg4"}">${validate_component(Header, "Header").$$render(
    $$result,
    {
      small: glassHeader,
      translations: data.translations
    },
    {},
    {}
  )}</div> <div><section class="py-[100px] lg:py-[110px]">${slots.default ? slots.default({}) : ``}</section></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
