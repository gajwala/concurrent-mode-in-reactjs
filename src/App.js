import React, { Suspense } from 'react';
import './App.css';
import {fetchData} from './Api';
const resource = fetchData();
const Name = ()=>{
  const name = resource.name.read();
return <h2>{name}</h2>
}
const Address = ()=>{
  const address = resource.address.read();
return <h2>{address}</h2>
}
function App() {
  return (
    <Suspense fallback={<h2>Loding.......</h2>}>
 <div className="App">
      <Name></Name>
      <Address></Address>
    </div>
    </Suspense>
   
  );
}

export default App;
