import axios from "axios";
import { useState } from "react";


export default function Index(){
    const[texto,setTexto] = useState('');
    const [caracter, setCaracter] = useState('');
    const [resposta, setResposta] =useState('');

    async function verificaFrequencia(){
       const resp = await axios.get(`http://localhost:5000/DIA2/freqCaracter/${texto}/${caracter}`)
       setResposta(resp.data.freq)
    }
    return(
        <main>
            <h1>Frequencia</h1>
            <div>
                texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)}/>
            </div>
            <div>
                caractere : <input type='text' value={caracter} onChange={e => setCaracter(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificaFrequencia}>Verificar Frequencia</button>
            </div>
            <div>
                Frequencia:{resposta}
            </div>
        </main>
        
    )
}