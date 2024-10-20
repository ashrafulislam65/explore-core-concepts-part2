
import './App.css'
import Count from './Count';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';




function App() {
  function handleClick(){
    alert('button Clicked');
  }
  const handleClick2=()=>{
    alert('button 2 clicked')

  }
  const addToFive =(number)=>{
    alert(number+5);

  }
  

  return (
    <>
     
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Count></Count>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
     
      
    </>
  )
}

export default App
