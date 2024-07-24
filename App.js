import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import React from 'react'
function App() {

  return (
    <div>
        <Header />
        {data.map(function(current){
            return(
                <Card 
                    {...current}
                />
            )
        })}
    </div>
  );
}

export default App;