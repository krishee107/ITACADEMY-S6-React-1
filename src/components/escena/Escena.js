const Escena = (props) => {
    const frases = props.frase;
    const listaFrases = frases.map((frase, index) =>
        <div key={index}>{frase}</div>
    );
    return (
        <>
            {listaFrases}
        </>
    );
}

export default Escena;