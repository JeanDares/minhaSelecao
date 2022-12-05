import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../Campotexto'
import ListaSuspensa from '../ListaSuspensa'
import './index.css'

const Formulario = (props) => {

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
      })
      setNome ('')
      setCargo ('')
      setImagem ('')
      setTime ('')
    }

    return (
        <section className='formulario'>
            <form onSubmit ={aoSalvar}>
                <h2>Preencha os dados com os seus jogadores favoritos</h2>
                <CampoTexto
                    obrigatorio={true}
                     label="Nome" 
                     placeholder="Digite seu nome"
                     valor = {nome} 
                     aoAlterado={valor =>setNome(valor)}
                 />
                <CampoTexto  
                    obrigatorio={true} 
                    label="Copas" 
                    placeholder="Digite seu cargo" 
                    valor = {cargo} 
                     aoAlterado={valor =>setCargo(valor)}

                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem} 
                     aoAlterado={valor =>setImagem(valor)}
                    
                /> <p> Use sua foto do Facebook, Instagram ou qualquer outro site</p>
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Posição" 
                    itens={props.times}
                    valor = {time} 
                     aoAlterado={valor =>setTime(valor)}
                />
                    

                <Botao>
                    Criar  Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario