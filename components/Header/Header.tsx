import React from 'react'
import styled from '@emotion/styled';
import InputWithIcon from '../Form/Input/InputWithIcon';

const MenuSite = styled.header`
width: 100%;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
> div {
    margin: 10%;
}
`

export default function Header() {
  return (
   <MenuSite>
    <div>Logotipo</div>
    <nav>menu</nav>
    <div><InputWithIcon /></div>
    <div>Perfil</div>
   </MenuSite>
  )
}
