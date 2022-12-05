import { useState } from 'react';
import Banner from './Componentes/banner/banner'
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';


function App() {

  const times = [
    {
      nome: 'Goleiro',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },

    {
      nome: 'Lateral direita',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },

    {
      nome:'Zagueiro',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },

    {
      nome:'lateral esquerda',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },

    {
      nome:'Volante',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },

    {
      nome:'Meias',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
    {
      nome:'Atacante',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome:'Técnico',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
  ]


  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>    
       <Formulario times={times.map(time => time.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />  

       {times.map(time => <Time 
       key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />)}

      

    </div>
  );
}

export default App;
