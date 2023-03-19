const mongoose = require('mongoose')
//schema数据表模型
const questionSchema = new mongoose.Schema(
    //数据为表头数据列
    {
        q_id: String,
        flag: Number, // 0 1
        content: {
            type: String,
        },
    })
// users为连接的文档名
const question = mongoose.model('questions', questionSchema)

//将User导出
module.exports = {
    question
}