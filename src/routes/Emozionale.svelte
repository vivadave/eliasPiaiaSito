<script lang="ts">
  import { _t } from '../helper/translations'
  import { goto } from '$app/navigation';
  import { languageStore } from '../store/translation'
  import Button from '../components/Button.svelte';
  export let translations: unknown[];

  import { onMount } from "svelte";
  import DonnaCrisi from "$lib/images/donnaCrisi.jpg";

  let image: HTMLDivElement;
  let animation = "none; opacity: 0";

  onMount(() => {
    const intersectionObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
      //Only for screen width > 1200px
      if (window.innerWidth < 1200) {
        animation = 'from-left 0s ease both';
      }
      else if (entries[0].isIntersecting) {
        animation = 'from-left 3s ease both';
      }
    }, intersectionObserverOptions);
    observer.observe(image);
  });

</script>

<section class="background-light w-full">
  <article class="left-container background-light h-full">
      <div class="text-container">
        <div class="title">{_t(translations, 'emozionaleTitle', $languageStore)}</div>
        <div class="description">
          {@html _t(translations, 'emozionaleDesc', $languageStore)}
          <div class="pt-6">
            <Button on:click={() => goto('/emozionale') }>{_t(translations, 'buttonScopriDiPiu', $languageStore)}</Button>
          </div>
        </div>
      </div>
      <div id="donna_crisi" class="image-container" bind:this={image} style="animation: {animation}">
        <img src={DonnaCrisi} alt="Crisi" />
      </div>
  </article>
</section>

<style lang="scss">
  @import '../style/variables.scss';
  @import '../style/pantone.scss';
  @import '../style/typography.scss';

  section {
    position: relative;
    padding: 3rem 2rem;

    @media (min-width: 1200px) {
      padding-bottom: 2rem;
    }
  
  .image-container {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(50%);
    }
    @media (min-width: 1200px) {
      top: 15%;
      width: 22%;
      img {
        border-radius:  0 $border-radius $border-radius 0;
        filter: brightness(100%);
      }
    }
  }
  .left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid $background;
    border-radius: 0rem $border-radius $border-radius 0;
    background: $background;

    @media (min-width: 1200px){
      width: 90%;
      padding: 6rem 6rem 6rem 30%;
    }
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      
      @media (min-width: 1200px) {
        color: $primary;       
      }
      .title {
        text-transform: uppercase;
        color: white;
        z-index: 1;
        padding-bottom: 3rem;
        @media (min-width: 1200px) {
          color: $primary;       
        }
      }
      .description {
        z-index: 1;
        color: white;
        font-size: 1.5rem;
        @media (min-width: 1200px) {
          color: $primary;          
        }
      }
    }
  }
}

@keyframes -global-from-left {
  0% {
    transform: rotate(5deg) translateX(-400px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>