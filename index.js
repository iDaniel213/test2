import { config } from "./dbconfig.js";
import express, { request } from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());
const db=mysql.createConnection(config)

app.listen(5000,() => console.log('a szerver hallgatózik az 5000-es porton'));

app.get('/',(request, response) => {
    db.query('SELECT id,author FROM books group by author order by author',(err,result)=>{
            if (err)
                console.log(err)
            else
              response.send(result)
        })
    });

app.get('szerzo/:author',(request, response) => {
    const {author} = request.params

    db.query('SELECT title FROM  `books` WHERE author=? ORDER BY title',[author],(err,result)=>{
            if (err)
                console.log(err)
            else
                response.send(result)
        })
    })

app.get('/categ/:category/year/:year',(request, response) => {
    const{category,year} = request.params
    
    db.query('SELECT author,title,year FROM books WHERE year>=? and category=?',[year,category],(err,result)=>{
        if (err)
            console.log(err)
        else
            response.send(result)
    })
    })


app.get('/id/:id',(request, response) => {
    const {id} = request.params
    
    db.query('SELECT author,title,year,category FROM books WHERE id=? ORDER bY title',[id],(err,result)=>{
            if (err)
                console.log(err)
            else
                response.send(result)
        })
        })