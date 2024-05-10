<script lang="ts">
	const dispatch = createEventDispatcher();
  import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let globally = false;
	export let key = '';
	
	let container: HTMLDivElement;
	let zoom = 18;
	let center = { lat: 46.60881824204914, lng: 11.17063897033427 };
  let src = '';
	onMount(async () => {
		Object.assign(window, {
			mapLoaded: async () => {
				const map = new google.maps.Map(container, {
					zoom,
					center,
				});
        const marker = new google.maps.Marker({
          position: center,
          map: map,
          title: 'Elisa Piaia'
        });
				marker.addListener("click", () => {
					const url = "https://maps.app.goo.gl/XixqKjvP11BkSNFV9";

					window.open(url, '_blank');
				});
        dispatch('load', true);
        if (globally) {
					Object.assign(window, { map });
				}
        
			}
		});

		//Import Google Maps API.
		src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=mapLoaded`;
	});
</script>

<div class="maps w-full h-full" bind:this={container} />

<svelte:head>
	{#if src}
		<script {src}></script>
	{/if}
</svelte:head>

<style>
  .maps {
    height: 300px;
    width: 100%;
		filter: saturate(0.4);
  }
</style>