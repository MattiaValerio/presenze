<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="flex w-full justify-center items-center">
	<form
		method="POST"
		use:enhance
		class="flex flex-col w-8/12 sm:w-8/12 md:w-5/12 xl:w-3/12 px-10 pt-10 pb-3 border rounded gap-3 bg-slate-400"
	>
		<img src="/logo_bianco.png" alt="proconsulting-logo" />
		<div class="w-full">
			<label for="email" class="text-center w-full font-semibold text-white">Username</label>
			<input
				id="username"
				name="username"
				required
				class="px-1 h-8 rounded text-center flex items-center justify-center w-full focus:outline-none"
			/>
		</div>
		<div class="w-full">
			<label for="password" class="text-center w-full font-semibold text-white">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				required
				class="px-1 h-8 rounded text-center flex items-center justify-center w-full focus:outline-none"
			/>
		</div>

		<div class="flex w-full justify-center">
			<button
				type="submit"
				class="h-10 w-8/12 sm:w-8/12 md:w-5/12 xl:w-3/12 rounded text-white font-bold uppercase bg-slate-600"
				>Login</button
			>
		</div>
	</form>
</div>
