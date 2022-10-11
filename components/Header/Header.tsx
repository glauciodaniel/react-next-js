import React from 'react'
import styles from '../../styles/Header.module.css';
import { css} from '@emotion/css';
import styled from '@emotion/styled';

const HeaderPage = styled.header`
  background-color: #e1e1e1;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`

const Input = styled.input`
  width: 190px;
  line-height: 30px;
  padding-left: 10%;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0x 0px 4px rgba(0,0,0,0.2);
  outline-color: orange;
`
const Button = styled.button`
  width: 100px;
  line-height: 30px;
  border:none;
  border-radius: 10px;
  margin-left: 10px;
  &:hover{
    background-color: #ddd;
    cursor: pointer;
  }
`
type HeaderProps = {
  menu?: Array<string>;
  pesquisar?: string;
}


//CSS
//5 maneiras diferentes de utilizar CSS.
//1. Importar o CSS no arquivo .tsx
//import './Header.css'
//2. Utilizando css modules
//import styles from './Header.module.css'
//3. Utilizando styled-components ou Sass
//import styled from 'styled-components'
//4. Utilizando estilização direto no componente
//Utilizando o CSS-in-JS
//5. Usando alguma biblioteca de estilização
//Ex: Material-UI - 4 usa Styled Componentes - 5 usa Emotion CSS
export default function Header(props:HeaderProps) {
  return (
    // <header className={styles['menu-site']}>  // - utilizando CSS modules
    <HeaderPage>
    <div>Logotipo</div>
    <nav>
      <ul className={ css`
       width: 90%;
       display: inline-flex;
       margin:0px;
       padding:0;
       > li {
        min-width: 120px;
        text-align: center;
        list-style: none;
       }
       `}>
        <li>Home</li>
        <li>Produtos</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>
      
    </nav>
    <div>
      <Input type="text" placeholder="Pesquisar"/>
      <Button>{props.pesquisar? props.pesquisar:"Search"}</Button>
    </div>
   {/* </header> */}
   </HeaderPage>
  )
}