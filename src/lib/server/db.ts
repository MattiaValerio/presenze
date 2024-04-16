import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

const pool = new pg.Pool({
	host: 'localhost',
	port: 5432,
	user: 'utenteProva',
	password: 'passwordProva',
	database: 'ProTrc'
});
export const db = drizzle(pool);
