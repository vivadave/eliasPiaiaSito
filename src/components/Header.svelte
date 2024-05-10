<script lang="ts">
  import Logo from './Logo.svelte';
  import Menu from './Menu.svelte';
  import { goto } from '$app/navigation';

  export let translations;
  export let small = false;
</script>

<header class={`container ${small ? 'small' : ''}`}>
  <div class="header-inner">
    <button class="logo" on:click={() => {goto('/')}}>
      <Logo small={small}/>
    </button>
    <div class="menu">
      <Menu translations={translations}/>
    </div>
  </div>
</header>

<style lang=scss>
  header {
    height: 100px;
    &.small {
      height: 70px;
    }

    @media (min-width: 1200px){
      height: 120px;
      &.small {
        height: 80px;
      }    
    } 
    .header-inner { 
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transition: all 1s;

      .logo {
        width: 300px;
      }
      @media (max-width: 768px){
          .logo {
          width: 200px;
        }
      }
      @media (max-width: 576px){
          .logo {
          width: 150px;
        }
      }
      .menu {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
</style>

