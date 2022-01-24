import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

export default async(req: IncomingMessage, res: ServerResponse) => {
	const queryObject = url.parse(req.url as string, true).query;
	const { id } = queryObject;
	let data = { data: [{ data: "" }] };

	if (id) {
        data = await $fetch(`https://ns-strapi-server.herokuapp.com/projects/${id}`);
	} else {
		data = await $fetch("https://ns-strapi-server.herokuapp.com/projects");
	}

	res.writeHead(200, { "Content-Type": "application/json" });
	res.write(JSON.stringify(data));
	res.end();
};
