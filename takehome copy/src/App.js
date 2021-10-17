import React from 'react'

function clickMe() {
  
  alert("Hello")

}

function App() {
  return (
    <div className="App">
      <button id="btn" onClick={clickMe}>Click Me!!</button>

    </div>
  )
}

export default App;