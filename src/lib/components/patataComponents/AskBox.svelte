<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sendYes() {
		dispatch('yes');
	}

	function sendNo() {
		dispatch('no');
	}
</script>

<div class="bg-white w-80 h-64 rounded-md flex flex-col gap-4 justify-center items-center">
	<p class="text-lg">🥰 Vuoi mandarmi un messaggino? 🥰</p>

	<div class="flex gap-4">
		<button
			class="bg-green-500 px-8 py-2 rounded text-white font-semibold"
			on:click={() => sendYes()}>SI</button
		>
		<button class="bg-red-500 px-8 py-2 rounded text-white font-semibold" on:click={() => sendNo()}
			>NO</button
		>
	</div>
</div>
