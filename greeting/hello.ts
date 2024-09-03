import { api, Query } from "encore.dev/api";
interface params {
	filter: Query<string>;
}
interface res {
	data: string;
}
export const hello = api<params, res>(
	{ expose: true, path: "/hello", method: "GET" },
	async ({ filter }) => {
		return { data: `Hello ${filter}` };
	}
);
