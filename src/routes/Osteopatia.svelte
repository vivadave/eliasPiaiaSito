<script lang="ts">
  import { _t } from '../helper/translations'
  import { languageStore } from '../store/translation'
  import { goto } from '$app/navigation';
  import Button from '../components/Button.svelte';
  export let translations: unknown[];

</script>
<section class="background-light w-full">
  <article class="container background-light h-full">
      <div class="text-container lg:pl-[2rem]">
        <div class="title">{  _t(translations, 'osteopatiaTitle', $languageStore) }</div>
        <div class="title-hidden">{  _t(translations, 'osteopatiaTitle', $languageStore) }</div>
        <div class="description lg:ml-[10%]">
          {@html _t(translations, 'osteopatiaDesc', $languageStore) } 
          <div class="pt-6">
            <Button on:click={() => goto('/osteopatia') }>{_t(translations, 'buttonScopriDiPiu', $languageStore)}</Button>
          </div>
        </div>       
      </div>
  </article>
</section>

<style lang="scss">
  @import '../style/variables.scss';
  @import '../style/pantone.scss';
  @import '../style/typography.scss';
  section {
    overflow: hidden;
    padding: 10rem 0 8rem;

    @media (min-width: 1200px) {
      padding: 12rem 0 9rem;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      position: relative;
      .title-hidden {
        text-transform: uppercase;
        color: white;
        top: -4rem;
        left: -1rem;
        position: absolute;
      }
      .title {
        text-transform: uppercase;
        color: $primary;
        z-index: 1;
      }
      .description {
        z-index: 1;
        padding-top: 3rem;
      }
    }
  }
}
</style>