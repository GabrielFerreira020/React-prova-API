
import axios from "axios";
import { useState } from "react";

export default function Index(){
    const[cor,setCor] = useState('');
    const [resposta,setResposta] = useState('');

    async function verificarCorPrimaria(){
        const resp = await axios.get('http://localhost:5000/DIA2/corprimaria/' + cor);
        console.log(resp)

        if(resp.data.primaria == true){
            setResposta('SIM!!')
        }else{
             setResposta('NÃO !!')
        }

    }
    return(
        <main>
            <h1>CorPimaria</h1>

            <div>
                cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => verificarCorPrimaria()}>Verificar</button>
            </div>
            <div>
                É cor primaria? {resposta}
            </div>
        </main>

        
    )
}