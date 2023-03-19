const { question } = require('../models')

const getQuestions = async (ctx) => {

    await question.find().then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                res: res
            }
        } else {
            ctx.body = {
                code: 300,
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err
        }
    })
}

const setQuestions = async (ctx) => {

    console.log('123', ctx.request.body)
    let { q_id, flag, content } = ctx.request.body

    await question.insertMany([{ q_id, flag, content }]).then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                res: res
            }
        } else {
            ctx.body = {
                code: 300,
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err
        }
    })
}
module.exports = {
    getQuestions,
    setQuestions
}