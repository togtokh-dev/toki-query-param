import tokiQueryParam from "../src";
const run = async () => {
  console.log("running");
  const body = {
    find_product: "PUBG MOBILE",
  };
  const app = "63a2afd4f01b4ee2f108212d";
  const result = tokiQueryParam(app.toString(), body);
  console.log("done", result);
};
run();
