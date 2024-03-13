import { useEffect, useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import Pagination from './components/Pagination';
import axios from 'axios'
import { data } from './data';

function App() {
  const [data,setData] = useState([])
  const [filteredData, setFilteredData] = useState(data);
  const API_URL = process.env.SEARCH_API

  // Fetched the data with given API
  // But API limit has exceeded So it is not working

  // const fetchData = async()=>{
  //   const res = await axios.get(API_URL)
  //   setData(res)
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  return (
    <div className="App">
      {/* implemented search functionality in Search component
      But Due to API issue I'm not able to fetch data  */}
      <Search setFilteredData={setFilteredData}/>
      
      <Table filteredData={filteredData}/>

      {/* https://wft-geo-db.p.rapidapi.com/v1/geo/cities this API limit has been exceeded.
      So I'm unable to fetch data. But I have implemented functionality for Pagination. */}

      {/* <Pagination/> */}

    </div>
  );
}

export default App;
