import './App.css';
import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import Chart3 from "./components/Chart3";
import Chart4 from "./components/Chart4";
import Chart5 from "./components/Chart5";


function App() {

  return (
    <div className="App">
      
      <div className='chart1'>

        <h1>Last Hope K9</h1>
        <h3>Where a last hope </h3> <h3>becomes a <u>new beginning</u></h3>
        <h1 className='lives'> Lives Saved</h1>
        <p className='number'> 10,875</p>
        <Chart1 />
      </div>

      <div className='chart2'>

        <p className='c2'>Avg Time to Adopt</p>
        <p className='numberc2'> 45 days</p>
        <h3 className='c2'>Avg Time to Adopt by Age Bucket</h3>
        <Chart2 />
      </div>

      <div className='chart3'>
        <p  className='c3'> Avg Time to Adopt over Time</p>
        <Chart3 />
      </div>
      <img className='img' src='./images/dogs.jpg' alt='god img'></img>
      <div className='chart4'>

        <h2 className='c4'>Characteristics</h2>
        <h3> Proportion of Dogs that...</h3>
        <Chart4 />
      </div>

      <div className='chart5'>
        <h3>Top 10 Primary Breeds (Including Mixes)</h3>
        <Chart5 />
      </div>
    </div>
  )

}

export default App;
