import { db } from '$lib/server/db';
import { messaggi } from '$lib/server/schema';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		// read the message input from the form
		let stronza = false;
		const data = await request.formData();
		const message = data.get('message');
		const patatStronz = data.get('stronza');

		if (patatStronz) {
			stronza = true;
		}

		if (message === null) return { message: 'Messaggio vuoto' };

		db.insert(messaggi)
			.values({
				id: Math.random().toString(),
				text: message.toString(),
				stronza: stronza
			})
			.returning();

		return { message: 'Messaggio inviato a pipo 💓💓💓' };
	}
};
