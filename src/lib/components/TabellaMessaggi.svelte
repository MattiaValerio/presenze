<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import type { Message } from 'postcss';
	import DialogMessage from './DialogMessage.svelte';
	export let messaggi: Message[];
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px] text-center">ID</Table.Head>
			<Table.Head class="text-center">MESSAGGIO</Table.Head>
			<Table.Head class="text-center">BIRICCHINA</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each messaggi as msg, i (i)}
			<Table.Row class="text-center">
				<Table.Cell class="font-medium">{messaggi.indexOf(msg) + 1}</Table.Cell>
				<Table.Cell>{msg.text}</Table.Cell>
				<Table.Cell>{msg.stronza ? '😠' : '💖'}</Table.Cell>
				<Table.Cell>
					<DialogMessage messaggio={msg} />
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
