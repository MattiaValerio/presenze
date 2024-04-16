import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/*',
	out: './src/lib/migrations',
	driver: 'pg',
	dbCredentials: {
		user: 'utenteProva',
		password: 'passwordProva',
		host: '127.0.0.1',
		port: 5432,
		database: 'ProTrc'
	},
	verbose: true,
	strict: true
} satisfies Config;
