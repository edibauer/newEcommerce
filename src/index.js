import express from 'express'
import ejs from 'ejs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import pool from './config/db.js'

// data or fucntions
const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname)

// app
const app = express()

// config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'))

// middlewares
app.use(express.static('public'))
app.use(express.json())

// routes
app.get('/', async (req, res) => {
    // db
    const [ rows ] = await pool.query('desc products')

    console.log(rows)
    res.render('index', { rows: rows })
})

// listen
app.listen(3900, () => {
    console.log('server running on port 3900')
})