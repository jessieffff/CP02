const KOA = require('koa');

const app = new KOA()

app.use((ctx, next) => {
    ctx.body = "hello world"
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})