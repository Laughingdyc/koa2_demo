const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())

// mongoose
const mongoose = require('./data')
mongoose()

// routes
const questions = require('./routes/questions')

// routes
app.use(questions.routes(), questions.allowedMethods())

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');