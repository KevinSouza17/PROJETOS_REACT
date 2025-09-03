import { useState } from "react";

function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(nome)
        console.log(`Usuário ${nome} cadastrado com a senha: ${senha}`)
        console.log('cadastrou o usuario');
    }

    const [nome, setNome] = useState('Anderson')
    const [senha, setSenha] = useState()

    return(
        <div>
           <h1>Cadastro</h1>
           <form onSubmit={cadastrarUsuario}>
               <div>
                <label htmlFor="nome">Nome:</label>
                   <input type="text" id="nome" name="nome" value={nome} onChange={(e)=> setNome(e.target.value)} placeholder="Digite seu nome"/>
                </div>
                 <div>
                    <label htmlFor="senha">Senha:</label>
                   <input type="password" id="senha" name="senha" onChange={(e)=> setNome(e.target.value)} placeholder="Digite sua senha"/>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
        </div>
    )

   };


export default Formulario;