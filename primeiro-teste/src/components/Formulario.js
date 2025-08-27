function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log('cadastrou o usuario');
    }
    return(
        <div>
           <h1>Cadastro</h1>
           <form onSubmit={cadastrarUsuario}>
               <div>
                   <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
        </div>
    )

   };


export default Formulario;