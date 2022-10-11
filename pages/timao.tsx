import { NextPageContext } from 'next';
import React, {useState, useEffect} from 'react'

type TimaoProps = {
    frase: string;
    autor ?:string;
}
 async function getFrase(){
            const res = await fetch('https://type.fit/api/quotes');
            const data = await res.json();
            const position =Math.floor(Math.random() * data.length);
            const frase = data[position].text;
            const autor = data[position].author;

            return {
                frase, autor
            }
        }
export default function Timao(props:TimaoProps) {
    const [frase, setFrase] = useState<string | undefined>(props.frase)
    const [autor, setAutor] = useState<string | undefined>(props.autor)

    useEffect(()=>{

        getFrase().then((data)=>{ console.log("Executou a primeira vez", data);});
       
       
    },[]);

  return (
  <>
    <h1>{frase?frase:"Seja muito bem vindo!"}</h1>
    {autor &&<h2>{autor}</h2>}

    <button onClick={(e)=>setAutor("Glaucio Daniel")}>Mudar Autor</button>
    <button onClick={(e)=>setFrase("Capricho! É fazer o melhor que você pode, na condição que você tem, enquanto não tem condições melhores, pra fazer melhor ainda!")}>Muda Frase</button>


 </>
  )
}

//DRY - Don't Repeat Yourself
Timao.getInitialProps = async (ctx: NextPageContext) => {

    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position =Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase,
        autor:autor
    }
}