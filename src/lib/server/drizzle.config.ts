import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/*',
	out: './src/lib/migrations',
	driver: 'pg',
	dbCredentials: {
		user: 'utente1',
		password: 'password1',
		host: '127.0.0.1',
		port: 5432,
		database: 'ProTrc'
	},
	verbose: true,
	strict: true
} satisfies Config;
