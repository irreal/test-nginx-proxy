/// <reference types="./deployctl.d.ts" />

addEventListener("fetch", (event) => {
    // Get the value of the header named `x-forwarded-for`.
    // The value can either be a IPv4 or IPv6 address.
    const ip = event.request.headers.get("x-forwarded-for");
    const customHeader = event.request.headers.get("x-test2");
    const response = new Response(`Your IP address is <b>${ip}</b><br />Header: ${customHeader}`, {
      headers: { "content-type": "text/html" },
    });
    event.respondWith(response);
  });