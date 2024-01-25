const express = require('express')
const app = express()

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    const data = {
        title: 'Portfolio',
    }
    res.render('index', data)
})

app.listen(3000)