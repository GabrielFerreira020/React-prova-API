

import axios from "axios";
import { useState } from "react";

export default function Index(){
    const [qtdInteiras,setQtdInteiras] = useState(0);
    const [qtdMeia,setQtdMeia] = useState(0);
    const [diaSemana,setDiaSemana] = useState('');
    const [nacionalidade,setNacionalidade] = useState('');
    const [total,setTotal] = useState(0);

    async function calcular(){
        const resp = await axios.post('http://localhost:5000/DIA2/ingressoCinema', {
            qtdint : qtdInteiras,
            qtdMeia : qtdMeia,
            diaSemana : diaSemana,
            nacionalidade : nacionalidade
        })
        console.log(resp.data)
        setTotal(resp.data.total);
    }


    return(
        <main>
             <h1>Ingresso</h1>
            <div>
                QTD. Inteiras: <input type='text' value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))}/>
            </div>
            <div>
                QTD. Meias: <input type='text' value={qtdMeia} onChange={ e => setQtdMeia(Number(e.target.value))}/>
            </div>
            <div>
                Dia da semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)}/> 
            </div>
            <div>
                Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)}/>
            </div>
            <div>
                <button onClick={calcular}>CALCULAR</button>
            </div>
            <div>
                o total é R$ {total}
            </div>
        </main>
       
    )
}