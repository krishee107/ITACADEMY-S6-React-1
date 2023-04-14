import { Frase } from "./styled";

const Escena = (props) => {
    const frase = props.frase;
    const deseada = props.deseada;

    return <Frase deseada={deseada}> {frase}</Frase>
}
export default Escena;