import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Quit drinking on week nights', isCompleted: false },
         { description: 'Go camping', isCompleted: false },
         { description: 'Laundry', isCompleted: true }
       ]
     }
   }

   toggleComplete(index) {
    console.log(index)
  }

   render() {
     return (
       <div className="App">
         <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key ={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          )}
         </ul>
     </div>
     );
   }
 }

 export default App;
