<script lang="ts">
	import { slide } from 'svelte/transition';

  export let open = false;
  export let title = 'Accordion';
	const handleClick = () => open = !open;
</script>

<div class="accordion">
	<div class="header text-900" on:click={() => handleClick()} role="button" tabindex="0" on:keydown={() => handleClick()}>
		<div class="text">
			{title} <i class="fa-regular fa-lightbulb"></i>
		</div>
		<i class="fa-regular fa-lightbulb"></i>
    <i class="fa {!open ? 'fa-caret-down' : 'fa-caret-up'}" aria-hidden="true" title="Toggle Accordion"></i>
		<slot name="buttons"></slot>
	</div>

	{#if open}
	<div class="details" transition:slide>
		<slot></slot>
	</div>
	{/if}
</div>

<style>
	div.accordion {
    width: 100%;
    margin-top: 10px;
	}

	div.header {
		display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
		width:100%;
    font-weight: 500;
	}

	div.header .text {
		flex: 1;
		margin-right: 5px;
	}

	div.details {
    background-color: white;
    padding-top: 10px;
	}
</style>
