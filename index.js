const KOA = require('koa');

const  {APP_PORT } = require('./src/config/config.default')

const app = new KOA()

app.use((ctx, next) => {
    ctx.body = "hello api"
})

app.listen(APP_PORT, () => {
    console.log(`server is running on http://localhost:${APP_PORT}`)
})  