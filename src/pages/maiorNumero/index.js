import axios from "axios";
import { useState } from "react";

export default function Index(){
    const [numeros,setNumeros] = useState([]);
    const [numero,setNumero] = useState();
    const [resposta,setResposta] = useState('');

    function adicionar(){
        setNumeros([...numeros, numero])
        setNumero('')
    }

    async function verificarMaior(){
        const resp = await axios.post('http://localhost:5000/DIA2/maiornumero' , numeros)
        console.log(resp)
        setResposta(resp.data.maior)
    }

    return(
        <main>
            <h1>MaiorNumero</h1>

            <div>
                Adicionar numero <input type='text' value={numero} onChange={e => setNumero(e.target.value)}/> 
                <button onClick={adicionar}>Adicionar Numero</button>
            </div>
            <div>
                {numeros.map(item =>
                    <div>{item}</div>
                )}
            </div>
            <div>
                <button onClick={verificarMaior}>Verificar</button>  Maior numero é {resposta}
            </div>
        </main>  
    )
}