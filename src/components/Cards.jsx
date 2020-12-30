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
      <div className="card-container">
      <div className="box">
      {items.map(item =>(
        <img src={item.imageUrl} alt="profile pic" style="width: 100%" />
        <h1>{item.firstName} {item.lastName}</h1>
        <p className="title">{item.company}</p>
      ))}
      </div>
    </div>
  );
}

export default Cards;