<script>
	import AskBox from '$lib/components/patataComponents/AskBox.svelte';
	import Stronza from '$lib/components/patataComponents/Stronza.svelte';

	let showStronza = $state(false);
	let showAskBox = $state(true);
	let showStronzetta = $state(false);

	const showStronzaHandler = () => {
		showStronza = true;
		showAskBox = false;
		showStronzetta = true;
	};

	const dontShowStronzaHandler = () => {
		showStronza = true;
		showAskBox = false;
		showStronzetta = false;
	};
</script>

<div class=" bg-pink-500/90 h-screen w-screen">
	<h1 class="text-center text-4xl text-white font-bold p-2">💖 CIAO BEISSIMA 💖</h1>
	<h3 class="text-center text-xl text-white font-semibold p-2">💞 MI MANCHI MOLTO 💞</h3>

	<div class="flex justify-center items-center">
		<img
			src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGI5cmtqbTdrZDhoNm1hMmJsdjU1cXp3dGl6aW5tdG1vdnJpbjEwdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lVwbhU4yhO4roWQ4iR/giphy.gif"
			alt="gif"
			class="w-1/2 h-1/2"
		/>
	</div>
	<div class="flex flex-col mt-5 justify-center items-center">
		{#if showAskBox}
			<AskBox on:no={() => showStronzaHandler()} on:yes={() => dontShowStronzaHandler()} />
		{/if}

		{#if showStronza}
			<Stronza {showStronzetta} />
		{/if}
	</div>
</div>
