import { v4 as uuidv4 } from "uuid";

export function assignNetworkId(body) {
    body.plugin = body.plugin || {};
    body.plugin.networkId = uuidv4();

    return body.plugin.networkId;
}

export function getNetworkId(body) {
    return body.plugin?.networkId;
}