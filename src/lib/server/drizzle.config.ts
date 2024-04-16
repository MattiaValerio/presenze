import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/*',
	out: './src/lib/migrations',
	driver: 'pg',
	dbCredentials: {
		user: 'utenteProva',
		password: 'passwordProva',
		host: '0.0.0.0',
		port: 5432,
		database: 'ProTrc'
	}
} satisfies Config;
