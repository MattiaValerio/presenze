import { db } from '$lib/server/db';
import { message } from '$lib/server/schema';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	if (event.locals.user?.username !== 'PatataBeissima' || event.locals.user?.username == null)
		redirect(302, '/login');
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const data = await request.formData();
		const msg = data.get('messaggio');
		const patatStronz = data.get('stronza');
		let stronza = false;

		if (patatStronz == 'on') {
			stronza = true;
		} else {
			stronza = false;
		}

		if (msg === null || msg === undefined || msg === '')
			return { success: false, msg: 'Messaggio vuoto' };

		db.insert(message)
			.values({
				id: crypto.randomUUID().toString(),
				text: msg.toString(),
				stronza: stronza
			})
			.execute();

		// console.log('s');
		// const formData = Object.fromEntries(await request.formData());
		// console.log(formData.messaggio, formData.stronza);

		return {
			success: true,
			message: 'Messaggio inviato a pipozzz 💓💓💓'
		};
	}
};
