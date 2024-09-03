import { api } from "encore.dev/api";
interface Data {
	data: string;
}
export const greeting = api(
	{ expose: true, path: "/greeting", method: "GET" },
	async (): Promise<Data> => {
		return { data: `Hello World!` };
	}
);
