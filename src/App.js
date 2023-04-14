import { useState } from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import { Button } from './styled';

function App() {

  const frases = [
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    "L'heroi va decidir travessar la porta que el portava a casa",
    "Mentrestant, altres herois no van tenir tanta sort en la seva elecció …"
  ];

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
          <div>
            <div>
              <Button onClick={() => moverFrase(-1)}>Anterior</Button>
              <Button onClick={() => moverFrase(1)}>Següent</Button>
            </div>
            {frases.map((f, index) => {
              if (deseada == index)
                return <Escena key={index} frase={f} deseada={true} />
              else
                return <Escena key={index} frase={f} deseada={false} />
            })}
          </div>

      }

    </>
  );
}

export default App;
