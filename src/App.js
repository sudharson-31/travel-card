import Header from './components/Header';
import Card from './components/Card';
import data from './data';
let dataArray = data.map(item =>{
  return(<Card 
  obj = {item}
  />
  )
})
function App() {
  return (
    <div>
        <Header />
        <div className='cards-holder'>
            {dataArray}
        </div>
    </div>
  )
}

export default App;
