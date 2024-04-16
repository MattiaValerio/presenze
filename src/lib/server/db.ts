import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

import * as schemas from '$lib/server/schema';

const pool = new pg.Pool({
	connectionString: 'postgresql://utenteProva:passwordProva@127.0.0.1:5432/ProTrc?schema=public'
});
export const db = drizzle(pool, {
	schema: { ...schemas },
	logger: true
});
