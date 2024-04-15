CREATE TABLE IF NOT EXISTS "permessi" (
	"id" numeric PRIMARY KEY NOT NULL,
	"permesso" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"lastname" text,
	"username" text,
	"password" text,
	"role" text,
	"created_at" timestamp,
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "workflow" (
	"id" serial PRIMARY KEY NOT NULL,
	"worked" numeric NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"permesso_id" numeric
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workflow" ADD CONSTRAINT "workflow_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "workflow" ADD CONSTRAINT "workflow_permesso_id_permessi_id_fk" FOREIGN KEY ("permesso_id") REFERENCES "permessi"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
