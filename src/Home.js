import React from "react";
import './App.css' 

function Home() {
    

    return (
      <div className="home-bg" >
        <h1>Home</h1> 
        <div>
            <li className='mus-li'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XIJHg1XWR7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0yW7w8F2TVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1wYNFfgrXTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DDWKuo3gXMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
        </div> 
      </div>

    );
  }
  
  export default Home;