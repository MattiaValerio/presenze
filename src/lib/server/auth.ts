import { Lucia } from 'lucia';
import { adapter } from './schema';

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: true
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
}
