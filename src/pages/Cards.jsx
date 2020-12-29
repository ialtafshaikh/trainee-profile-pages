import React, { useEffect, useState } from "react";
//import './App.css';
import Header from "../components/Header"
import Footer from "../components/Footer"

import {Link} from "react-router-dom";

function Cards() {

   useEffect(()=>{

    fetchItems();

   },[]);
//creating state

const [items,setItems]=useState([]);

const fetchItems =async()=>{

    const data =await fetch("https://niravkpatel28.github.io/json-data-server/employees/employees.json");

    console.log(data);

    const items=await data.json();
    console.log(items);

    setItems(items);

}


  return (
    
    <div >
      <Header/>
      {items.map(item =>(
          <h1 key={item.id}>
              <p>
              <Link to={`/shop/${item.id}`}>{item.firstName}
              </Link>
              </p>
              <Link to={`/shop/${item.id}`}>{item.imageUrl}
              </Link>
              </h1>
              
      ))}
      <Footer/>
    </div>
  );
}

export default Cards;