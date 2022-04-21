import "./App.css";
import { useEffect, useState } from "react";
import { CoinRow } from "./components/CoinRow";
import {getData} from "./helpers/getData"

function App() {

const api_url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  
const [market, setCoins] = useState([]);

// const [search, setSearch] = useState("")

// const handleOnChange=({target})=>{setSearch(target.value)}

// const filteredSearch = ()=>{
//   if(market){
//     let results = market.filter(coin=>{
//       coin.name.toLowerCase().includes(search.toLowerCase())
//   })
//   return results;
//   }
// }

// const submitSearch=(e)=>{
// e.preventDefault()
// filteredSearch()
// }

useEffect(() => {
  getData(api_url).then((coins) => setCoins(coins));
}, [api_url]);

 return (
  <div id="app" className="container-fluid bg-dark text-white">
    <h1 className="text-center pt-4">Coincheck</h1>
{/* 
<form className="text-center w-25 m-auto p-2" onSubmit={submitSearch}>
<input 
type="search" 
onChange={handleOnChange}
value={search}
className="form-control" 
placeholder="Search a currrency"/>
<button className="btn btn-outline-light m-3">Search</button>
</form> */}

      <div className="container-md">
        <table className="table table-dark table-hover align-middle text-center">
          <thead>
            <tr>
              <th className="p-2" scope="col">
                #
              </th>
              <th scope="col">Currency</th>
              <th scope="col">Name</th>
              <th scope="col">Current Price</th>
              <th scope="col">Price Change 24h</th>
              <th scope="col">24h Volume</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
     
              {market.map( c => (
                <CoinRow key={c.id} {...c}/>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
