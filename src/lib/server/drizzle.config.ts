import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/*',
	out: './src/lib/migrations',
	driver: 'pg',
	dbCredentials: {
		user: 'utenteProva',
		password: 'passwordProva',
		host: '178.18.254.192',
		port: 5432,
		database: 'ProTrc'
	}
} satisfies Config;
