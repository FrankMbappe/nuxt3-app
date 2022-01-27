import type { IncomingMessage, ServerResponse } from "http";
import { URLSearchParams } from "url";

export default async(req: IncomingMessage, res: ServerResponse) => {
	const urlObject = new URLSearchParams(req.url as string);
	const id = urlObject.get("id");
	const num = urlObject.get("num");

	let data = { data: [{ data: "" }] };

	if (num) {
        data = await $fetch(`https://jsonplaceholder.typicode.com/users?_start=0&_end=${num}`);
	} else if (id) {
		data = await $fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	} else {
        data = await $fetch("https://jsonplaceholder.typicode.com/users");
    }

	res.writeHead(200, { "Content-Type": "application/json" });
	res.write(JSON.stringify(data));
	res.end();
};
