<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let outline = false;
  export let navOpen = false;
  const dispatch = createEventDispatcher();
</script>

<button class="button-container" class:outline class:change={navOpen} on:click={() => dispatch('click')}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</button>

<style lang="scss">
  @import '../style/pantone.scss';
  .button-container {
    display: inline-block;
    cursor: pointer;

    .bar1, .bar2, .bar3 {
      width: 35px;
      height: 3px;
      background-color: $primary;
      margin: 7px 0;
      transition: 0.4s;      
    }

    &.outline {
      outline-style: none;
      .bar1, .bar2, .bar3 {
        background-color: $background;
      }
    }

    &.change {
      .bar1 {
      -webkit-transform: rotate(-45deg) translate(-8px, 6px);
      transform: rotate(-45deg) translate(-8px, 6px);
      }

      .bar2 {opacity: 0;}

      .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -6px);
        transform: rotate(45deg) translate(-8px, -6px);
      }
    }
  }
</style>