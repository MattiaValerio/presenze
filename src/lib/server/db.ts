import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

const pool = new pg.Pool({
	host: 'postgres-db',
	port: 5432,
	user: 'utente1',
	password: 'password1',
	database: 'ProTrc'
});
export const db = drizzle(pool);
