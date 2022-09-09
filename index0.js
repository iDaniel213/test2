console.log("a node futtatja ezt a fájlt!")

const szam=Math.round(Math.random()*100)
console.log(`A véletlen szám: ${szam}`)
if (szam >= 50)
    console.log("Gratula")
else
    console.log("Sajnálom...")
szam>=50 ? console.log("GAtrula") : console.log("really srry")

import { diakok } from "./adatok.js"
import {pers} from "./adatok.js"

console.log(`a diákok létszáma: ${diakok.length}`)

for(let obj of diakok){
    console.log(`Kedves ${obj.nev}! HA több infóra lenne szüksége, csengessen meg.
    tisztelettel ${pers.nev}, tel. ${pers.tel}
    `)
}