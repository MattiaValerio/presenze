<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onBakc = () => {
		dispatch('back');
	};

	export let showStronzetta = false;

	let msg: string = '';
</script>

<div class="bg-white w-80 h-64 rounded-md flex flex-col gap-4 justify-center items-center">
	<div class="flex flex-col justify-center items-center gap-4">
		{#if showStronzetta}
			<p>💩 BVUTTA 💩</p>
			<p>😠 MANDAMELO COMUNQUE 😠</p>
		{:else}
			<p>💘 TI AMO PATATA 💘</p>
		{/if}

		<form
			use:enhance
			method="POST"
			action="?/sendMessage"
			on:submit={(e) => {
				e.preventDefault();
				if (msg == '') {
					alert('Scrivimi qualcosa patata...');
				}
			}}
			class="flex flex-col justify-center items-center w-full gap-3"
		>
			<input type="checkbox" name="stronza" class="hidden" bind:checked={showStronzetta} />
			<textarea
				name="messaggio"
				id="messaggio"
				bind:value={msg}
				contenteditable
				class="border px-1 py-1 h-20 w-full"
			></textarea>
			<button class="bg-green-500 px-8 py-2 text-white font-semibold rounded-md">INVIA</button>
		</form>
		<button on:click={() => onBakc()}>indietro</button>
	</div>
</div>
