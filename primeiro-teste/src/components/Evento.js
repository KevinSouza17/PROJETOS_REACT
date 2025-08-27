function Evento({numero}){

    function meuEvento(e){
        e.preventDefault();
        console.log(`Ativando o primeiro evento!==>${numero}`)
    }
    return (
        <div>
            <p>Clique para disparar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>

        </div>
    )

}

export default Evento