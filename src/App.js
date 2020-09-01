import React from 'react';
import 'react-tree-graph/dist/style.css'
import './App.css';

import Tree from 'react-tree-graph';

function App() {
  let data = {
    name: 'Start',
    children: [{
        name: 'Do seismic survey -30',
        children: [{
          name: 'Unfavorable 70%',
          children: [{
            name: "Drill -100",
            children: [{
              name: "Oil 14.3% => Payoff 670"
            }, {
              name: "Dry 85.7% => Payoff -130"
            }]
          },{
           name: "Sell +90 => Payoff 60" 
          }]
        },{
          name: 'Favorable 30%',
          children: [{
            name: "Drill -100",
            children: [{
              name: "Oil 50% => Payoff 670"
            }, {
              name: "Dry 50% => Payoff -130"
            }]
          }, {
            name: "Sell +90 => Payoff 60"
          }]
        }]
    }, {
        name: 'No Seismic survey +0',
        children: [{
          name: "Drill -100", 
          children: [{
            name: "Oil 25% => Payoff 700"
          }, {
            name: "Dry 75% => Payoff -100"
          }]
        }, {
          name: "Sell +90 => Payoff 90"
        }]
    }]
    };
  return (
    <div className="App">
      <Tree
          data={data}
          height={800}
          width={900}/>
    </div>
  );
}

export default App;
