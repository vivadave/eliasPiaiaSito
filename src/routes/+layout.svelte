<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition'
  import { languageStore } from "../store/translation";
  
  import "../app.css";
  import '../style/style.scss'

  export let data
  let scrollY = 0

  onMount(() => {
    //Get browser language
    const browserLanguage = navigator.language.split('-')[0];
    if (browserLanguage === 'it' || browserLanguage === 'de') {
      languageStore.set(browserLanguage);
    } else {
      languageStore.set('it');
    }
    console.log('browserLanguage', browserLanguage);
  });

  $: glassHeader = scrollY > 100


</script>

<svelte:window bind:scrollY />

<div class={`header ${glassHeader ? 'glass' : ''}`}>
<Header small={glassHeader} translations={data.translations}/>
</div>

{#key document.location.pathname}
  <div in:fly={{ x: -200, duration: 300, delay: 300 }}
       out:fly={{ x: 200, duration: 300 }}
  >
  
  <section class="py-[100px] lg:py-[110px]">
      <slot/>
    </section>
  </div>
{/key}
<Footer />

<style lang="scss">
  @import '../style/typography.scss';
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    background: transparent;
    transition: background 0.3s;

    &.glass {
      background: rgba(255, 255, 255, 0.8);
    }
  }
</style>