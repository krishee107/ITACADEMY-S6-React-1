import { Frase } from "./styled";

const Escena = (props) => {
    const frases = props.frase;
    const listaFrases = frases.map((frase, index) =>
        <Frase key={index}> {frase} </Frase>
    );
    return (
        <>
            {listaFrases}
        </>
    );
}

export default Escena;