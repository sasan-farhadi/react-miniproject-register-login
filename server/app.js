const express = require('express')
const app = express()
app.use(express.json())
const sql = require('mssql/msnodesqlv8')


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


app.post('/register', (req, res) => {
    let { fname, lname, username, email, password, passwordConfirm } = req.body
    sql.query(`INSERT INTO tb_register (fname , lname , username , email , password , passwordConfirm) 
        VALUES ('${fname}', '${lname}', '${username}', '${email}', '${password}', '${passwordConfirm}')`, (err, data) => {
        if (err) console.log(err)
        else return res.send({ result: true })
    })
})

app.listen(5000, () => { console.log('connected success...') })
