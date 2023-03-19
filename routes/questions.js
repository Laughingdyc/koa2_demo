const router = require('koa-router')()
const {
    getQuestions,
    setQuestions
} = require('../controller/questions')
router.prefix('/api/questions')

router.get('/getQuestions', getQuestions)
router.post('/setQuestions', setQuestions)

module.exports = router
