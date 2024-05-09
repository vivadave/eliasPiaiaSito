<script lang="ts">
  import Map from "../components/Map.svelte";
  import Contatti from "./Contatti.svelte";
  import Emozionale from "./Emozionale.svelte";
  import Main from "./Main.svelte";
  import Osteopatia from "./Osteopatia.svelte";
  import type { PageData } from './$types';

  export let data: PageData;

</script>


<Main translations={data.translations} />
<Osteopatia translations={data.translations}/>
<Emozionale translations={data.translations} />
<Contatti translations={data.translations} />
<Map />

