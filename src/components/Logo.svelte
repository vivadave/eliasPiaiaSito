<script lang="ts">
  export let small = false;
</script>

<section class={small ? 'small' : ''}>
  <span class="le-jour">Elisa Piaia</span>
  <span class={`quattrocento ${small ? 'hide': ''}`}>osteopathie fur mutter und kind</span>
</section>

<style lang=scss>
  /* the text must grow with the section */
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    container-type: inline-size;
    position: relative;
    padding: 1.5cqw 0;
    transition: all .5s;

    &.small {
      padding: .8cqw 0;
    }
  }
  .le-jour {
    font-size: 10cqw;
    font-family: 'leJour';
    line-height: 20cqw;
  }
  .quattrocento {
    font-size: 3.5cqw;
    font-family: 'quattrocento';
    text-transform: uppercase;
    letter-spacing: 1cqw;
    opacity: 1;
    transition: all .5s;
    &.hide {
      opacity: 0;
    }
  }


</style>