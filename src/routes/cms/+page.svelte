<script lang='ts'>
  import Editor from '@tinymce/tinymce-svelte';
  import Accordion from '../../components/accordion.svelte';
  import Button from '../../components/Button.svelte';
  import Radio from '../../components/Radio.svelte';
  import { updateDocument } from '../../helper/firebase'

  export let data;

  const apiKey = "1tsj806kefr42aonhw1gdvwgl5fai2wf7zwin5hf6gp35k1v";
  
 let conf = {
   plugins: [ 'code', 'lists', 'fullscreen', 'table', 'link', 'image', 'media', 'preview', 'emoticons' ],
   toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons',
    menubar: 'favs file edit view insert format tools'
 }

  const saveTranslation = async function(translation: any) {
    await updateDocument('translation', translation.key, translation);
  }
  const options = [{
		value: 'onlyDesc',
		label: 'Only Description',
	}, {
		value: 'allTransl',
		label: 'All Translations',
	}]

  $: filterdedTranslations = data.translations.filter(translation => {
    if (radioValue === 'onlyDesc') {
      return translation.key.includes('Desc');
    } else {
      return translation;
    }
  })

	let radioValue = 'onlyDesc';
</script>

<div class="px-5 py-20">
  <div class="flex justify-between pb-5">
    <h1 class="text-2xl font-bold">Translations</h1>
    <Radio {options} fontSize={16} bind:userSelected={radioValue}/>
  </div>
  {#each filterdedTranslations as translation }
    <Accordion title={translation.key}>
      <div class="flex flex-row w-full">
        <div class="w-1/2 px-5 pb-5">
          <div class="editor-container">
          Deuthsch
          {#if translation.html}
            <Editor bind:value={translation.de}
                    apiKey={apiKey}
                    conf = { conf }
            />
          {:else}
            <textarea bind:value={translation.de} class="w-full h-20 border border-gray-300 rounded-md p-2"></textarea>
          {/if}
          </div>
        </div>
        <div class="w-1/2 px-5 pb-5">
          <div class="editor-container">
            Italiano
            {#if translation.html}
              <Editor bind:value={translation.it}
                apiKey={apiKey}
                conf = { conf }
              />
            {:else}
              <textarea bind:value={translation.it} class="w-full h-20 border border-gray-300 rounded-md p-2"></textarea>
            {/if}
          </div>
        </div>
      </div>
      <span slot="buttons">
        <Button on:click={() => saveTranslation(translation)} dense>Save</Button>
      </span>
    </Accordion>
  {/each}
</div>
