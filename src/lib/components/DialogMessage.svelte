<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { Message } from 'postcss';

	export let messaggio: Message;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>🔎</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Messaggio</Dialog.Title>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Messaggio</Label>
				<textarea id="name" class="px-2 col-span-3 h-32" value={messaggio.text}></textarea>
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="username" class="text-right">Biricchina</Label>
				<Input id="username" value={messaggio.stronza ? '😠' : '❤'} class="col-span-3" />
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
