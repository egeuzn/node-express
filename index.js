const express = require('express');
const app = express()
const bodyparser = require('body-parser')

const port = 8080

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.user(express.json())

//*****************Sayfa Düzeni*******************/



app.get('/', (req, res) => {
  res.render('index')
})

app.get('*', (req, res) => {
  res.render('404')
})
//*****************Sayfa Düzeni*******************/





//*****************Server Başlat*******************/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//*****************Server Başlat*******************/
