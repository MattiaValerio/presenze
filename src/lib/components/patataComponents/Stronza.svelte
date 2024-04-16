<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	import type { PageData } from '../../../routes/$types';
	import type { ActionResult } from '@sveltejs/kit';
	import * as Alert from '$lib/components/ui/alert/index.js';

	let data: PageData;
	export let action: ActionResult;

	const dispatch = createEventDispatcher();

	let responseMessage: string | undefined = '';

	const onBakc = () => {
		dispatch('back');
	};

	export let showStronzetta = false;
	let showAllert = false;
	const onValidSubmit = () => {};

	let msg: string = '';
</script>

<div class="bg-white w-80 h-64 rounded-md flex flex-col gap-4 justify-center items-center">
	<div class="flex flex-col justify-center items-center gap-4">
		{#if showStronzetta}
			<div class="flex flex-col items-center">
				<p>💩 BVUTTA 💩</p>
				<p>😠 MANDAMELO COMUNQUE 😠</p>
			</div>
		{:else}
			<p>💘 TI AMO PATATA 💘</p>
		{/if}

		<form
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						responseMessage = result.data?.message?.toString();
						msg = '';
					}

					showAllert = true;

					setTimeout(() => {
						showAllert = false;
					}, 2750);
				};
			}}
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
				class="border px-1 py-1 h-20 w-64"
			></textarea>
			<button class="bg-green-500 px-8 py-2 text-white font-semibold rounded-md">INVIA</button>
		</form>
		<button on:click={() => onBakc()}>indietro</button>
	</div>
</div>

{#if showAllert}
	<Alert.Root
		class="absolute left-0 right-0 mx-4 top-3 w-auto flex justify-center items-center flex-col"
	>
		<Alert.Title>BRAVISSIMA PATATA</Alert.Title>
		<Alert.Description>{responseMessage}</Alert.Description>
	</Alert.Root>
{/if}
