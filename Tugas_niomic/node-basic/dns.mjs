import dns from "dns/promises";
import { hostname } from "os";

const ip = await dns.lookup(hostname = "www.programmerzamannow.com", callback);
console.info(ip);