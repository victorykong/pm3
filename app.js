const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "hello world";
});

app.listen(8226, () => {
  console.log("8226 run");
});
