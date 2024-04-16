import { db } from '$lib/server/db';
import { message } from '$lib/server/schema';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	if (event.locals.user?.username !== 'MattiaValerio' || event.locals.user?.username == null)
		redirect(302, '/');

	const msgs = await db.select().from(message).execute();
	return { messaggi: msgs };
}) satisfies PageServerLoad;
