import logo from './logo.svg';
import './App.css';
import FormularioPregunta from './components/formularioPregunta';
import PreguntasCreadas from './components/preguntasCreadas';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {
    nueva.id = preguntas.length + 1;
    setPreguntas([...preguntas, nueva]);
  }


  const borrarPregunta = (id) => {

    setPreguntas(preguntas.filter((pregunta) => pregunta.id !== id));


  };
  console.log(preguntas + "appjs");
  return (
    <div className="App">
      <FormularioPregunta aniadePregunta={addQuestion} />
      <PreguntasCreadas preguntas={preguntas} borrarPregunta={borrarPregunta} />
    </div>
  );
}

export default App;
