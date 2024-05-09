<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  export let outline = false;
  export let dense = false;
</script>

<button on:click={() => dispatch('click')} class="{`${outline ? 'outline' : ''} ${dense ? 'dense' : ''}`}">
  <slot></slot>
</button>

<style lang="scss">
  @import '../style/pantone.scss';
  button {
    display: inline-flex;
    align-items: center;
    padding: 0 20px;
    height: 46px;
    border-radius: 23px;
    background-color: $primary;
    color: white;
    letter-spacing: 0.1rem;
    border: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    transition: color .3s, $background .3s;
    -webkit-transition: color .3s, $background .3s;

    &:hover {
      background-color: $primary-dark;
    }

    &.outline {
      background-color: white;
      color: $primary;
      border: 1px solid $primary;

      &:hover {
        background-color: $primary;
        color: white;
      }
    }

    &.dense {
      height: 32px;
      border-radius: 18px;
      padding: 0 12px;
      font-size: 12px;
    }
}
</style>