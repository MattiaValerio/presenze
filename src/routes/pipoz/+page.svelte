<script lang="ts">
	import TabellaMessaggi from '$lib/components/TabellaMessaggi.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<div class="bg-slate-400 h-screen w-screen flex flex-col gap-5">
	<div class="">
		<h1 class="text-white text-2xl text-center font-bold">MESSAGGI DA PATATA</h1>
	</div>

	{#if data.messaggi === undefined || data.messaggi.length === 0}
		<p class="text-5xl text-red-500 text-center">Non ci sono messaggi ...</p>
	{:else if data.messaggi !== undefined}
		<TabellaMessaggi messaggi={data.messaggi} />
	{/if}
</div>
