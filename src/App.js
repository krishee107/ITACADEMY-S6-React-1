import { useState } from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import { Button, DivPadre } from './styled';
import frases from './img/frases';

function App() {


  const listaFrases = frases;
  const [deseada, setDeseada] = useState(0)
  const moverFrase = (num) => {
    if (deseada + num < 0)
      return setDeseada(frases.length - 1)
    else if (deseada + num > frases.length - 1)
      return setDeseada(0)
    else
      return setDeseada(deseada + num)
  }

  const [bienvenida, setBienvenida] = useState(true)
  const modificarBienvenida = () => {
    setBienvenida(false)
  }

  return (
    <>
      {
        bienvenida ?

          // Se cumple la bienvenida
          <div>
            <h1>Benvingut!</h1>
            <p>Descripció: Aquest és el meu primer projecte amb React :D</p>
            <Button onClick={() => modificarBienvenida()}>Començar</Button>
          </div > :

          //No se cumple la bienvenida
          <DivPadre background={listaFrases[deseada].img}>
            <div>
              <Button onClick={() => moverFrase(-1)}>Anterior</Button>
              <Button onClick={() => moverFrase(1)}>Següent</Button>
            </div>
            {listaFrases.map((f, index) => {
              if (deseada == index)
                return <Escena key={index} frase={f.txt} background={f.img} deseada={true} />
              else
                return <Escena key={index} frase={f.txt} background={f.img} deseada={false} />
            })}
          </DivPadre>
      }

    </>
  );
}

export default App;
