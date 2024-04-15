import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	//console.log('Locals:\n' + event.locals.user);
	if (!event.locals.user) redirect(302, '/login');

	if (event.locals.user.username == 'PatataBeissima') redirect(302, '/patata');
	return {
		username: event.locals.user.username
	};
}) satisfies PageServerLoad;
