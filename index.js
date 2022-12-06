const express = require('express');
var cors = require('cors')
const app = express();
const port = 8080;

app.use(cors())

app.get('/', (req, res) => {
    res.send('hellow world!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == "dog") {
        res.json({'sound' : '멍멍' })
    } 
    else if (name == "cat") {
        res.json({'sound' : '야옹' })
    }
        
    else if (name == "pig") {
        res.json({'sound' : '끌꿀' })
    }

    else if (name == "bird") {
        res.json({'sound' : '짹짹' })
    }

    else {
        res.json({'sound' : '알수없음' })
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})