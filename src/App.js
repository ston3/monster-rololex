import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Frankenstain',
          id: 1
        },
        {
          name: 'Dracula',
          id: 2
        },
        {
          name: 'zombie',
          id: 3
        }
      ]
    }
  }

  render() {
    return (
     <div className='App'>
       <CardList>
        {
          this.state.monsters.map(monster  => <h1 key= {monster.id}>{monster.name}</h1>)
        }
       </CardList>
     </div>
    );
  }
}

export default App;
