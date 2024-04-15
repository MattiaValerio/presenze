import type { Actions, PageServerLoad } from './$types';
import { lucia } from '$lib/server/auth';
import { db } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import { user } from '$lib/server/schema';
import { sql } from 'drizzle-orm';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		// if (
		// 	typeof username !== 'string' ||
		// 	username.length < 3 ||
		// 	username.length > 31 ||
		// 	!/^[a-z0-9_-]+$/.test(username)
		// ) {
		// 	return fail(400, {
		// 		message: 'Invalid username'
		// 	});
		// }
		// if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
		// 	return fail(400, {
		// 		message: 'Invalid password'
		// 	});
		// }

		const existingUser = (
			await db
				.select()
				.from(user)
				.where(sql`username = ${username}`)
		)[0];

		if (!existingUser) {
			return fail(400, {
				message: 'Incorrect username'
			});
		}

		const validPassword = existingUser.password === password ? true : false;

		if (!validPassword) {
			return fail(400, {
				message: 'Incorrect password'
			});
		}

		const session = await lucia.createSession(existingUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		event.cookies.set('user', JSON.stringify(existingUser), {
			path: '.',
			maxAge: 60 * 60 * 24 * 7
		});

		redirect(302, '/');
	}
};
