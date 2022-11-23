import React, {useState, useEffect} from "react";
import './App.css';
import {Users} from "./users"
function Search_post(){
    const keys = ["first_name","last_name","email"];

    const [query,setQuery] = useState("")
    const fitem =Users.filter(Users=>keys.some(key=>Users[key].toLowerCase().includes(query)));
    console.log(fitem)
    return(
        <div>
            <input className="search" placeholder="Search" type="text" onChange={(e=> setQuery(e.target.value))} />
        </div>
    );
}
export default Search_post
       
    // const fitem =Users.filter(user=>user.first_name.toLowerCase().includes(query)|| 
    // user.last_name.toLowerCase().includes(query)||user.email.toLowerCase().includes(query));





