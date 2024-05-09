<script lang="ts">
  import { _t } from '../helper/translations'
  import { languageStore } from '../store/translation'
  export let translations: unknown[];

  import PiediBambino from "$lib/images/piediBambino.jpg";
  import Button from "../components/Button.svelte";

  const gotToElisa = () => {
    window.location.href = "/elisa";
  }
</script>
<section class="mt-[10px] lg:mt-[40px] pb-[120px] lg:pb-[200px]">
  <article class="container grid grid-cols-12 gap-4">
    <div class="text-container col-span-12 lg:col-span-6 order-3 lg:order-1 lg:pr-4">
      <div class="smtitle">{_t(translations, 'mainTitle', $languageStore)}</div>
      <div class="smdescription">
        {@html _t(translations, 'mainDesc', $languageStore) }
      </div>
      <div class="pt-6">
        <Button on:click={() => gotToElisa()}>{_t(translations, 'buttonScopriDiPiu', $languageStore)}</Button>
      </div>
    </div>
    <div class="image-container col-span-12 lg:col-span-6 order-2">
      <img src={PiediBambino} alt="Elisa Piaia" />
    </div>
  </article>
</section>

<style lang="scss">
  @import '../style/variables.scss';
  @import '../style/pantone.scss';
  @import '../style/typography.scss';

  section {
    position: relative;
    overflow: hidden;
  article {
    z-index: 1;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    .text-container {
      flex-direction: column;
      justify-content: center;
      position: relative;
      padding-right: 2rem;
      .smtitle {
        text-transform: uppercase;
        color: $primary;
        padding-bottom: .8rem;
      }
      
      .description {
        z-index: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: .8rem;
      }
    } 
  }
  .image-container {
    position: relative;
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    
    @media (min-width: 992px){
      height: 500px;
      margin-bottom: 0px;
    }
    @media (min-width: 1200px){
      height: 600px;
      margin-bottom: 0px;
    }
    img {
      position: rel;
      border-radius: $border-radius;
      max-width: 100%;
      @media (min-width: 992px){
        height: 100%;
        max-width: none;
      }
    }
  }
}
</style>