<script lang="ts">
	import type { ActionData } from '../../../routes/$types';

	export let showStronzetta = false;

	let data: ActionData;
</script>

<div class="bg-white w-80 h-64 rounded-md flex flex-col gap-4 justify-center items-center">
	<div class="flex flex-col justify-center items-center gap-4">
		{#if showStronzetta}
			<p>💩 STRONZETTA 💩</p>
			<p>😠 MANDAMELO COMUNQUE 😠</p>
		{:else}
			<p>💘 TI AMO PATATA 💘</p>
		{/if}

		<form
			method="POST"
			action="?/sendMessage"
			class="flex flex-col justify-center items-center w-full gap-3"
		>
			<input type="checkbox" name="stronza" class="hidden" bind:checked={showStronzetta} />
			<textarea name="messaggio" id="messaggio" class="border px-1 py-1 h-20 w-full"></textarea>
			<button class="bg-green-500 px-8 py-2 text-white font-semibold rounded-md">INVIA</button>
		</form>

		<!-- {#if data.success}
			<p class="text-green-500">{data.message}</p>
		{/if}

		{#if !data.success}
			<p class="text-red-500">{data.message}</p>
		{/if} -->
	</div>
</div>
