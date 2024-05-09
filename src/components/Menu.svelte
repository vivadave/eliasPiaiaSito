<script lang="ts">
  import { _t } from '../helper/translations'
  import MediaQuery from 'svelte-media-queries'
  import { languageStore } from "../store/translation";
  import Logo from './Logo.svelte';
  import ButtonMenu from './ButtonMenu.svelte';
  import WhatsAppButton from './WhatsAppButton.svelte';
  import { goto } from '$app/navigation';

  const languages = [ { key: 'it', name: 'Italiano'}, { key: 'de', name: 'Deutsch'}]
  const menuVoices = [
    { to: '/elisa', key: 'menuChiSono'},
    { to: '/osteopatia', key: 'menuOsteopatia'},
    { to: '/emozionale', key: 'menuProntoSoccorsoEmotivo'},
    { to: '/#', key: 'menuContatti'}
  ];
  
  export let translations: unknown[];
  let menuOpen = false;

  $: language = languages.find(l => l.key !== $languageStore) || languages[0];
  const changeLanguage = () => {
    $languageStore = $languageStore === 'it' ? 'de' : 'it';
  }
</script>

<nav class="menu">
    <MediaQuery query='(max-width: 1200px)' let:matches>
      {#if matches}
        <div class="buttn-container">
          <ButtonMenu navOpen={menuOpen} on:click={() => menuOpen = !menuOpen}/>
          <aside class:menuOpen>
            <header>
              <button style="width: 170px; color: white"
                      class="pt-2"
                      on:click={() => { goto('/'); menuOpen = false }}>
                <Logo/>
            </button>
              <ButtonMenu outline navOpen={menuOpen} on:click={() => menuOpen = !menuOpen}/>
            </header>
            <ul>
            {#each menuVoices as voice}
                <li>
                  <button on:click={() => { goto(voice.to); menuOpen = false }}>
                    { _t(translations, voice.key, $languageStore) }
                  </button>
                </li>
            {/each}
              <li><button on:click={() => changeLanguage()}>{language.name}</button></li>
              <li><WhatsAppButton /></li>
            </ul>
          </aside>
        </div>
      {:else}
        <ul class="flat-menu flex justify-center">
        {#each menuVoices as voice}
          <li>
            <button on:click={() => goto(voice.to)}>
              { _t(translations, voice.key, $languageStore) }
            </button>
          </li>
        {/each}
        <li>
          <button on:click={() => changeLanguage()}>{language.name}</button>
        </li>
        </ul>
      {/if}
    </MediaQuery>
</nav>


<style lang=scss>  
  @import '../style/pantone.scss';
  nav {
    ul {
      list-style: none;
      display: flex;
      gap: 25px;
      button {
        cursor: pointer;
        transition: color 0.3s;        
        text-transform: uppercase;
        color: $text;
        align-items: center;
        &:hover {
          color: $primary;
        }
      }
    }
    .buttn-container {
      position: relative;
    }
    aside {
      position: fixed;
      top: 0;
      right: 0;
      background-color: $primary;
      width: 100%;
      height: 100vh;
      transform: translateX(100%);
      transition: transform 0.3s;
      header {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        list-style: none;
        gap: 0;
        li {
          button {
          text-transform: uppercase;
          color: white;
          font-size: 1rem;
          padding: 1rem;
          cursor: pointer;
          transition: color 0.3s;
          &:hover {
            color: $text;
          }
        }
        }
      }
      &.menuOpen {
        transform: translateX(0);
      }
    }
  }
</style>