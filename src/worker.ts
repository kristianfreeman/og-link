import template from "./template";
import { ImageResponse } from "@skorfmann/workers-og";

export interface Env {
}

// see https://en.wikipedia.org/wiki/Base64#URL_applications
function decodeBase64Url(base64Url: string) {
	// Replace URL specific chars
	base64Url = base64Url.replace(/-/g, '+').replace(/_/g, '/');

	// Add padding
	while (base64Url.length % 4) {
		base64Url += '=';
	}

	const binStr = atob(base64Url);
	const binStrLen = binStr.length;
	const bytes = new Uint8Array(binStrLen);

	for (let i = 0; i < binStrLen; i++) {
		bytes[i] = binStr.charCodeAt(i);
	}

	return new TextDecoder().decode(bytes.buffer);
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		const title = url.searchParams.get("title");

		if (!title) {
			return new Response("Missing title", { status: 400 });
		}

		const domain = "kristianfreeman.com";
		return new ImageResponse(template(title, domain), {
			format: "png",
			width: 1200,
			height: 627,
		});
	}
};
