import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/login')) {
		// deserialize the user from the session cookie
		// if the user is not authenticated, return a 401
		let user = event.cookies.get('user');

		if (user != null || user != undefined) {
			user = JSON.parse(user);
			event.locals.user = {
				id: user.id,
				username: user.username,
				role: user.role,
				name: user.name,
				lastname: user.lastname
			};
		}
	}
	const response = await resolve(event);
	return response;
};
