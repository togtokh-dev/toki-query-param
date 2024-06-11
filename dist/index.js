"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_parameters = (mini_app_id, data) => {
    data = { use_query: true, ...data };
    const app_link = `https://link.toki.mn/?link=https://toki.mn/MINI_PROGRAM/${mini_app_id}/?this_param_text&apn=com.toki.mn&isi=1504679492&ibi=com.toki.mn&efr=1`;
    let query_text = "queryPath%3D";
    for (const key in data) {
        let text = data[key];
        if (typeof text === "string") {
            text = text.replace(new RegExp(" ", "g"), "+") || text;
        }
        query_text = query_text + `%26${key}%3D${text}`;
    }
    const result = app_link.replace("this_param_text", query_text);
    return result;
};
exports.default = query_parameters;
