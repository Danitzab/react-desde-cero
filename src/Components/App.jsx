import React from 'react';
import '../styles/styles.scss';
import Form from './Pages/Form';
import CourseGrid from './Organisms/CourseGrid';
import Course from './Pages/Course';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './Organisms/MainMenu';
import History from './Pages/History';
import Home from './Pages/Home'
import Users from './Pages/Users';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/Historial/:id" component={History} />
      <Route path="/Historial" component={History} />
      <Route path="/usuarios" component={Users} />
      <Route
        path="/formulario"
        component={() => <Form name="página de contacto" />}
      />
      <Route
        component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver dos elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra la etiqueta
// 6: class pasa a ser className porque es una palabra reservada de Js
// 7: For esta reservado y aca pasa ser for => htmlFor
// 8: No se puede utilisar en JSX WHILE, DO WHILE