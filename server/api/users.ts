import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

export default async(req: IncomingMessage, res: ServerResponse) => {
	const queryObject = url.parse(req.url as string, true).query;
	const { id, num } = queryObject;
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
