import { c as create_ssr_component, b as createEventDispatcher, o as onDestroy, f as add_attribute, e as escape, h as each, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import "firebase/app";
import "firebase/firestore";
const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { apiKey: apiKey2 = "no-api-key" } = $$props;
  let { channel = "6" } = $$props;
  let { scriptSrc = void 0 } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  createEventDispatcher();
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.apiKey === void 0 && $$bindings.apiKey && apiKey2 !== void 0)
    $$bindings.apiKey(apiKey2);
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.scriptSrc === void 0 && $$bindings.scriptSrc && scriptSrc !== void 0)
    $$bindings.scriptSrc(scriptSrc);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  return `<div${add_attribute("class", cssClass, 0)}${add_attribute("this", container, 0)}>${inline ? `<div${add_attribute("id", id, 0)}${add_attribute("this", element, 0)}></div>` : `<textarea${add_attribute("id", id, 0)} style="visibility:hidden"${add_attribute("this", element, 0)}></textarea>`}</div>`;
});
const css$1 = {
  code: "div.accordion.svelte-n0et3u.svelte-n0et3u{width:100%;margin-top:10px}div.header.svelte-n0et3u.svelte-n0et3u{display:flex;justify-content:space-between;align-items:center;padding:10px;background-color:white;width:100%;font-weight:500}div.header.svelte-n0et3u .text.svelte-n0et3u{flex:1;margin-right:5px}div.details.svelte-n0et3u.svelte-n0et3u{background-color:white;padding-top:10px}",
  map: `{"version":3,"file":"Accordion.svelte","sources":["Accordion.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { slide } from \\"svelte/transition\\";\\nexport let open = false;\\nexport let title = \\"Accordion\\";\\nconst handleClick = () => open = !open;\\n<\/script>\\r\\n\\r\\n<div class=\\"accordion\\">\\r\\n\\t<div class=\\"header text-900\\" on:click={() => handleClick()} role=\\"button\\" tabindex=\\"0\\" on:keydown={() => handleClick()}>\\r\\n\\t\\t<div class=\\"text\\">\\r\\n\\t\\t\\t{title} <i class=\\"fa-regular fa-lightbulb\\"></i>\\r\\n\\t\\t</div>\\r\\n\\t\\t<i class=\\"fa-regular fa-lightbulb\\"></i>\\r\\n    <i class=\\"fa {!open ? 'fa-caret-down' : 'fa-caret-up'}\\" aria-hidden=\\"true\\" title=\\"Toggle Accordion\\"></i>\\r\\n\\t\\t<slot name=\\"buttons\\"></slot>\\r\\n\\t</div>\\r\\n\\r\\n\\t{#if open}\\r\\n\\t<div class=\\"details\\" transition:slide>\\r\\n\\t\\t<slot></slot>\\r\\n\\t</div>\\r\\n\\t{/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tdiv.accordion {\\r\\n    width: 100%;\\r\\n    margin-top: 10px;\\r\\n\\t}\\r\\n\\r\\n\\tdiv.header {\\r\\n\\t\\tdisplay:flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 10px;\\r\\n    background-color: white;\\r\\n\\t\\twidth:100%;\\r\\n    font-weight: 500;\\r\\n\\t}\\r\\n\\r\\n\\tdiv.header .text {\\r\\n\\t\\tflex: 1;\\r\\n\\t\\tmargin-right: 5px;\\r\\n\\t}\\r\\n\\r\\n\\tdiv.details {\\r\\n    background-color: white;\\r\\n    padding-top: 10px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwBC,GAAG,sCAAW,CACX,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACf,CAEA,GAAG,mCAAQ,CACV,QAAQ,IAAI,CACV,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACzB,MAAM,IAAI,CACR,WAAW,CAAE,GAChB,CAEA,GAAG,qBAAO,CAAC,mBAAM,CAChB,IAAI,CAAE,CAAC,CACP,YAAY,CAAE,GACf,CAEA,GAAG,oCAAS,CACT,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAChB"}`
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { title = "Accordion" } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="accordion svelte-n0et3u"><div class="header text-900 svelte-n0et3u" role="button" tabindex="0"><div class="text svelte-n0et3u">${escape(title)} <i class="fa-regular fa-lightbulb"></i></div> <i class="fa-regular fa-lightbulb"></i> <i class="${"fa " + escape(!open ? "fa-caret-down" : "fa-caret-up", true)}" aria-hidden="true" title="Toggle Accordion"></i> ${slots.buttons ? slots.buttons({}) : ``}</div> ${open ? `<div class="details svelte-n0et3u">${slots.default ? slots.default({}) : ``}</div>` : ``} </div>`;
});
const css = {
  code: '.group-container.svelte-14dz0yn.svelte-14dz0yn{border-radius:2px;display:flex;flex-direction:row}.legend.svelte-14dz0yn.svelte-14dz0yn{font-weight:bold}label.svelte-14dz0yn.svelte-14dz0yn{-webkit-user-select:none;-moz-user-select:none;user-select:none;line-height:1.2em}.sr-only.svelte-14dz0yn.svelte-14dz0yn{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}input[type=radio].svelte-14dz0yn.svelte-14dz0yn{position:absolute}input[type=radio].svelte-14dz0yn+label.svelte-14dz0yn{display:block;position:relative;text-align:left}input[type=radio].svelte-14dz0yn+label.svelte-14dz0yn::before{content:"";position:relative;display:inline-block;margin-right:0.5em;width:1em;height:1em;background:transparent;border:1px solid #E1D6C6;border-radius:50%;top:0.2em}input[type=radio].svelte-14dz0yn:checked+label.svelte-14dz0yn::before{border:1px solid #E1D6C6;border-radius:50%}input[type=radio].svelte-14dz0yn+label.svelte-14dz0yn::after{content:"";position:absolute;display:inline-block;width:0.5em;height:0.5em;top:0.45em;left:0.25em;background:#928781;border:1px solid #928781;border-radius:50%;transform:scale(0)}input[type=radio].svelte-14dz0yn:checked+label.svelte-14dz0yn::after{opacity:1;transform:scale(1)}input[type=radio].svelte-14dz0yn:focus+label.svelte-14dz0yn::before{box-shadow:0 0 0 1px #928781;border-radius:50%}input[type=radio].svelte-14dz0yn:disabled+label.svelte-14dz0yn{color:#E1D6C6}input[type=radio].svelte-14dz0yn:disabled+label.svelte-14dz0yn::before{background:#E1D6C6}input[type=radio].svelte-14dz0yn+label.svelte-14dz0yn::before{transition:background 0.3s ease-out}input[type=radio].svelte-14dz0yn:checked+label.svelte-14dz0yn::before{transition:background 0.3s ease-in}input[type=radio].svelte-14dz0yn+label.svelte-14dz0yn::after{transition:transform 0.2s ease-out}input[type=radio].svelte-14dz0yn:checked+label.svelte-14dz0yn::after{transition:transform 0.2s ease-in}input[type=radio].svelte-14dz0yn:focus+label.svelte-14dz0yn::before{box-shadow:0 0px 8px #928781;border-radius:50%}',
  map: '{"version":3,"file":"Radio.svelte","sources":["Radio.svelte"],"sourcesContent":["<script>\\r\\n  // based on suggestions from:\\r\\n  // Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074\\r\\n  // and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/\\r\\n\\r\\n  export let options = [];\\r\\n  export let legend = \'\';\\r\\n  export let userSelected = options[0].value;\\r\\n\\texport let fontSize = 16;\\r\\n\\texport let flexDirection = \'column\'\\r\\n\\t\\r\\n\\tconst uniqueID = Math.floor(Math.random() * 100)\\r\\n\\r\\n  const slugify = (str = \\"\\") =>\\r\\n    str.toLowerCase().replace(/ /g, \\"-\\").replace(/\\\\./g, \\"\\");\\r\\n<\/script>\\r\\n\\r\\n<div role=\\"radiogroup\\" \\r\\n    class=\\"group-container\\"\\r\\n    aria-labelledby={`label-${uniqueID}`}\\r\\n    style=\\"font-size:{fontSize}px; flex-direction:{flexDirection}\\" \\r\\n    id={`group-${uniqueID}`}>\\r\\n    <div class=\\"legend\\" \\r\\n        id={`label-${uniqueID}`}>{legend}\\r\\n    </div>\\r\\n  {#each options as { value, label }}\\r\\n    <input\\r\\n      class=\\"sr-only\\"\\r\\n      type=\\"radio\\"\\r\\n      id={slugify(label)}\\r\\n      bind:group={userSelected}\\r\\n      value={value} />\\r\\n    <label for={slugify(label)}> {label} </label>\\r\\n  {/each}\\r\\n</div>\\r\\n\\r\\n<style lang=\\"scss\\">.background-light {\\n  background-color: #f6ede8;\\n}\\n\\n.group-container {\\n  border-radius: 2px;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.legend {\\n  font-weight: bold;\\n}\\n\\nlabel {\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n          user-select: none;\\n  line-height: 1.2em;\\n}\\n\\n.sr-only {\\n  position: absolute;\\n  clip: rect(1px, 1px, 1px, 1px);\\n  padding: 0;\\n  border: 0;\\n  height: 1px;\\n  width: 1px;\\n  overflow: hidden;\\n}\\n\\ninput[type=radio] {\\n  position: absolute;\\n}\\n\\ninput[type=radio] + label {\\n  display: block;\\n  position: relative;\\n  text-align: left;\\n}\\n\\ninput[type=radio] + label::before {\\n  content: \\"\\";\\n  position: relative;\\n  display: inline-block;\\n  margin-right: 0.5em;\\n  width: 1em;\\n  height: 1em;\\n  background: transparent;\\n  border: 1px solid #E1D6C6;\\n  border-radius: 50%;\\n  top: 0.2em;\\n}\\n\\ninput[type=radio]:checked + label::before {\\n  border: 1px solid #E1D6C6;\\n  border-radius: 50%;\\n}\\n\\ninput[type=radio] + label::after {\\n  content: \\"\\";\\n  position: absolute;\\n  display: inline-block;\\n  width: 0.5em;\\n  height: 0.5em;\\n  top: 0.45em;\\n  left: 0.25em;\\n  background: #928781;\\n  border: 1px solid #928781;\\n  border-radius: 50%;\\n  transform: scale(0);\\n}\\n\\ninput[type=radio]:checked + label::after {\\n  opacity: 1;\\n  transform: scale(1);\\n}\\n\\ninput[type=radio]:focus + label::before {\\n  box-shadow: 0 0 0 1px #928781;\\n  border-radius: 50%;\\n}\\n\\ninput[type=radio]:disabled + label {\\n  color: #E1D6C6;\\n}\\n\\ninput[type=radio]:disabled + label::before {\\n  background: #E1D6C6;\\n}\\n\\n/* gravy */\\n\\ninput[type=radio] + label::before {\\n  transition: background 0.3s ease-out;\\n}\\n\\ninput[type=radio]:checked + label::before {\\n  transition: background 0.3s ease-in;\\n}\\n\\ninput[type=radio] + label::after {\\n  transition: transform 0.2s ease-out;\\n}\\n\\ninput[type=radio]:checked + label::after {\\n  transition: transform 0.2s ease-in;\\n}\\n\\ninput[type=radio]:focus + label::before {\\n  box-shadow: 0 0px 8px #928781;\\n  border-radius: 50%;\\n}</style>\\r\\n"],"names":[],"mappings":"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"}'
};
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { legend = "" } = $$props;
  let { userSelected = options[0].value } = $$props;
  let { fontSize = 16 } = $$props;
  let { flexDirection = "column" } = $$props;
  const uniqueID = Math.floor(Math.random() * 100);
  const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.userSelected === void 0 && $$bindings.userSelected && userSelected !== void 0)
    $$bindings.userSelected(userSelected);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  $$result.css.add(css);
  return `<div role="radiogroup" class="group-container svelte-14dz0yn"${add_attribute("aria-labelledby", `label-${uniqueID}`, 0)} style="${"font-size:" + escape(fontSize, true) + "px; flex-direction:" + escape(flexDirection, true)}"${add_attribute("id", `group-${uniqueID}`, 0)}><div class="legend svelte-14dz0yn"${add_attribute("id", `label-${uniqueID}`, 0)}>${escape(legend)}</div> ${each(options, ({ value, label }) => {
    return `<input class="sr-only svelte-14dz0yn" type="radio"${add_attribute("id", slugify(label), 0)}${add_attribute("value", value, 0)}${value === userSelected ? add_attribute("checked", true, 1) : ""}> <label${add_attribute("for", slugify(label), 0)} class="svelte-14dz0yn">${escape(label)} </label>`;
  })} </div>`;
});
const apiKey = "1tsj806kefr42aonhw1gdvwgl5fai2wf7zwin5hf6gp35k1v";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filterdedTranslations;
  let { data } = $$props;
  let conf = {
    plugins: [
      "code",
      "lists",
      "fullscreen",
      "table",
      "link",
      "image",
      "media",
      "preview",
      "emoticons"
    ],
    toolbar: "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullscreen | forecolor backcolor emoticons",
    menubar: "favs file edit view insert format tools"
  };
  const options = [
    {
      value: "onlyDesc",
      label: "Only Description"
    },
    {
      value: "allTransl",
      label: "All Translations"
    }
  ];
  let radioValue = "onlyDesc";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    filterdedTranslations = data.translations.filter((translation) => {
      if (radioValue === "onlyDesc") {
        return translation.key.includes("Desc");
      } else {
        return translation;
      }
    });
    $$rendered = `<div class="px-5 py-20"><div class="flex justify-between pb-5"><h1 class="text-2xl font-bold" data-svelte-h="svelte-156g65k">Translations</h1> ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        options,
        fontSize: 16,
        userSelected: radioValue
      },
      {
        userSelected: ($$value) => {
          radioValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${each(filterdedTranslations, (translation) => {
      return `${validate_component(Accordion, "Accordion").$$render($$result, { title: translation.key }, {}, {
        buttons: () => {
          return `<span slot="buttons">${validate_component(Button, "Button").$$render($$result, { dense: true }, {}, {
            default: () => {
              return `Save`;
            }
          })} </span>`;
        },
        default: () => {
          return `<div class="flex flex-row w-full"><div class="w-1/2 px-5 pb-5"><div class="editor-container">Deuthsch
          ${translation.html ? `${validate_component(Editor, "Editor").$$render(
            $$result,
            { apiKey, conf, value: translation.de },
            {
              value: ($$value) => {
                translation.de = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `<textarea class="w-full h-20 border border-gray-300 rounded-md p-2">${escape(translation.de || "")}</textarea>`} </div></div> <div class="w-1/2 px-5 pb-5"><div class="editor-container">Italiano
            ${translation.html ? `${validate_component(Editor, "Editor").$$render(
            $$result,
            { apiKey, conf, value: translation.it },
            {
              value: ($$value) => {
                translation.it = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `<textarea class="w-full h-20 border border-gray-300 rounded-md p-2">${escape(translation.it || "")}</textarea>`}</div> </div></div> `;
        }
      })}`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
