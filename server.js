import express from 'express'
const app = express()

// 静态文件（css / js / html）
app.use(express.static('.'))   // 当前目录

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})