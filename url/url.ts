import { api, APIError } from "encore.dev/api";
import { randomBytes } from "crypto";
import { SQLDatabase } from "encore.dev/storage/sqldb";

const db = new SQLDatabase("url", { migrations: "./migrations" });
interface Params {
	url: string;
}
interface Res {
	shortUrl: string;
	id: string;
}

export const shorten = api(
	{ expose: true, path: "/url", method: "POST" },
	async ({ url }: Params): Promise<Res> => {
		const id = randomBytes(4).toString("base64url");
		await db.exec`INSERT INTO url (id, original_url) VALUES (${id}, ${url})`;
		return { shortUrl: `${url}`, id };
	}
);
export const getShorten = api(
	{ expose: true, path: "/url/:id", method: "POST" },
	async ({ id }: { id: string }): Promise<Res> => {
		const row = await db.queryRow`SELECT original_url FROM url WHERE id=${id}`;
		if (!row) throw APIError.notFound("url not found");
		const url = row.original_url;
		return { shortUrl: `${url}`, id };
	}
);
