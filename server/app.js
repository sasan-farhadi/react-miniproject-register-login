const express = require('express')
const app = express()
app.use(express.json())
const sql = require('mssql/msnodesqlv8')
const multer = require('multer')

sql.connect({
    server: '.',
    database: 'miniProject',
    driver: 'msnodesqlv8',
    options: { trustedConnection: 'true' }
})

app.get('/provinces', (req, res) => {
    sql.query('SELECT * FROM tb_provinces', (err, data) => {
        if (err) return res.send({ provinces: [] })
        else return res.send({ provinces: data.recordset })
    })
})

app.get('/cities/:provinceId', (req, res) => {
    let { provinceId } = req.params
    sql.query(`SELECT * FROM tb_cities WHERE provinceId=${provinceId}`, (err, data) => {
        if (err) return res.send({ cities: [] })
        else return res.send({ cities: data.recordset })
    })
})

app.get('/favourites', (req, res) => {
    sql.query('SELECT * FROM tb_favourite', (err, data) => {
        if (err) return res.send({ favourite: [] })
        else return res.send({ favourite: data.recordset })
    })
})


app.post('/register', (req, res) => {
    console.log('############## register')
    let { fname, lname, username, email, password, passwordConfirm, city, favourites } = req.body
    sql.query(`INSERT INTO tb_register (fname , lname , username , email , password , passwordConfirm,city ,favourite) 
        VALUES ('${fname}', '${lname}', '${username}', '${email}', '${password}', '${passwordConfirm}' , '${city}','${favourites}');
        SELECT @@IDENTITY AS Id`, (err, data) => {
        if (err) return res.send({ id: -1 })
        else return res.send({ id: data.recordset[0].Id })
    })
})


let memory = multer({
    limits: { fileSize: 1 * 1024 * 1024 },
    storage: multer.memoryStorage()
})

app.post('/insertImage', memory.single('file'), (req, res) => {
    console.log('########### image')
    let { id, file } = req.body
    sql.query(`UPDATE tb_register SET image='${file}' WHERE Id=${id}`, (err, data) => {
        if (err) return res.send({ result: false })
        else return res.send({ result: true })
    })
})

app.listen(5000, () => { console.log('connected success...') })
