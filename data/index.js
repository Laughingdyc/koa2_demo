const mongoose = require('mongoose')
module.exports = () => {
    //连接数据库地址下面所创建的文档
    mongoose.connect('mongodb://127.0.0.1:27017/demo', {
        useNewUrlParser: true
    }).then(res => {
        console.log('数据库连接成功！');
    }).catch(err => {
        console.log('数据库连接失败！' + err);
    })
}