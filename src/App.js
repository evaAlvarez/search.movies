import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom'

/* import {Title} from './components/Title'
import {SearchForm} from './components/SearchForm'
import { MoviesList } from './components/MoviesList'
import {Detail} from './pages/Detail' */

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'

/* class App extends Component {
  state = {usedSearch: false, results: []}

  _hadleResults = (results) => {
    this.setState({results, usedSearch: true})
  }

  _renderResults (){
    return this.state.results.length === 0
      ? <p>!Oh! Lo siento, resultados no encontrados</p>
      : <MoviesList movies={this.state.results} />
  }

  render() {
      const url= new URL (document.location)
      const hasId = url.searchParams.has('id')

      if (hasId){
        return <Detail id={url.searchParams.get('id')}/>
      }

    return (
      <div className="App">
        <Title>Busqueda de peliculas</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._hadleResults}/>
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Usa la pestaña para buscar una pelicula</small>
        }
      </div>
    )
  }
}

export default App;
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;