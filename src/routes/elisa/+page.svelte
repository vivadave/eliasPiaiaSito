<script lang="ts">
  import ElisaFoto from "$lib/images/elisa.jpg";
  import { _t } from '../../helper/translations'
  import { languageStore } from '../../store/translation'
  export let data;
  $: translations = data.translations;

  const loremIpsun = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc. Nulla facilisi'

</script>

<section class="container flex-col md:flex-row md:mt-4">
  <div class="image-container flex p-5 w-full md:w-1/2 justify-center">
    <img src={ElisaFoto} alt="Elisa" />
  </div>
  <div class="flex w-1/2">
    {@html _t(translations, 'elisaDetailDesc', $languageStore) }
  </div>
</section>


<style lang="scss">  
  @import '../../style/variables.scss';
  @import '../../style/pantone.scss';
  @import '../../style/typography.scss';

  section {
    display: flex;
    align-items: center;
    width: 100%;
    container-type: inline-size;
    position: relative;
    .image-container {
      img {
        position: rel;
        border-radius: $border-radius;
        width: 100%;
      }
    }
  }
</style>
