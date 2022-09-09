import express, { application, json } from 'express';
import { diakok } from './adatok.js';

const app = express();
app.use(express.json());

app.get('/',(request, response) => {
    response.send(diakok)
})
app.get('/id',(request, response) => {
    const {id} = request.params
    const filteredArr = diakok.filter(obj=>obj.id==id)
    response.send(filteredArr)
})
app.post('/',(request, response) => {
    const {id,nev,osz} = request.body
    diakok.push({id:id,nev:nev,osz:osz})
    response.send(diakok)
})
app.get('*',(request, response) => {
    response.status(404).send('nincs oldal')
})

app.listen(5000,() => console.log('Szerver listening on port 5000'))