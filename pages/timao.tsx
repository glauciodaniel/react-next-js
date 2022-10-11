import { NextPageContext } from 'next';
import React, {useState} from 'react'

type TimaoProps = {
    frase: string;
    autor ?:string;
}

export default function Timao(props:TimaoProps) {
    const [frase, setFrase] = useState<string | undefined>(props.frase)
    const [autor, setAutor] = useState<string | undefined>(props.autor)
  return (
  <>
    <h1>{frase?frase:"Seja muito bem vindo!"}</h1>
    {autor &&<h2>{autor}</h2>}
 </>
  )
}


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