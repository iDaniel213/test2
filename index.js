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