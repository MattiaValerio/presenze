import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';

import { db } from './db';
import { boolean, numeric, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey().unique(),
	name: text('name').notNull(),
	lastname: text('lastname').notNull(),
	username: text('username').unique().notNull(),
	password: text('password'),
	role: text('role').$type<'admin' | 'user'>().notNull()
});

export const messaggi = pgTable('message', {
	id: text('id').primaryKey(),
	text: text('text').notNull(),
	stronza: boolean('boolean')
});

export const sessionTable = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export const permessi = pgTable('permessi', {
	id: numeric('id').primaryKey().notNull(),
	permesso: text('permesso').notNull()
});

export const workflow = pgTable('workflow', {
	id: serial('id').primaryKey(),
	worked: numeric('worked').notNull(),
	userId: text('user_id')
		.references(() => user.id)
		.notNull(),
	createdAt: timestamp('created_at').notNull(),
	permessoId: numeric('permesso_id').references(() => permessi.id)
});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, user);
