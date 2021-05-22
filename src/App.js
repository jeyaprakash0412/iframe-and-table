import React from 'react';
import Remo from './Remo';
import Model from './Model';
import './fake.css';
function App() {
  return (
    <div>
      
  <div className="window">
    <ul style={{display:'flex',flexDirection:'row',listStyle:'none'}}>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.google.com/"target="_blank" style={{textDecoration:'none'}}>Google</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.facebook.com/"target="_blank" style={{textDecoration:'none'}}>FaceBook</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.instagram.com/accounts/login/?hl=en"target="_blank"  style={{textDecoration:'none'}}>Instagram</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://twitter.com/LOGIN" target="_blank"  style={{textDecoration:'none'}}>Twitter</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.flipkart.com/?affid=ideaclano&affExtParam1=sunny&"target="_blank" style={{textDecoration:'none'}}>Flipkart</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.amazon.in/"target="_blank" style={{textDecoration:'none'}}>Amazon</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.myntra.com/"target="_blank"  style={{textDecoration:'none'}}>Myntra</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.olx.in/" target="_blank"  style={{textDecoration:'none'}}>OLX</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.zomato.com/chennai/order-fast-food-online"target="_blank" style={{textDecoration:'none'}}>Zomato</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.swiggy.com/restaurants"target="_blank" style={{textDecoration:'none'}}>Swiggy</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.ubereats.com/feed?ps=1&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNoZW5uYWklMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKWVROOVQtcGxVam9STTlSamFBdW5ZVzQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMTMuMDgyNjgwMiUyQyUyMmxvbmdpdHVkZSUyMiUzQTgwLjI3MDcxODQlN0Q%3D"target="_blank"  style={{textDecoration:'none'}}>Uber</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://bsvalue.com/auth?fromActivate=false" target="_blank"  style={{textDecoration:'none'}}>BsValue</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_146|m_lgAX6a65c_c386629063406"target="_blank" style={{textDecoration:'none'}}>Amazon Prime</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.hotstar.com/in"target="_blank" style={{textDecoration:'none'}}>Hotstar</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://www.ticketnew.com/Movie-Ticket-Online-booking/C/Chennai"target="_blank"  style={{textDecoration:'none'}}>TicketNew</a></li>
      <li style={{padding:'15px',backgroundColor:'black'}}><a href="https://in.bookmyshow.com/explore/home/chennai" target="_blank"  style={{textDecoration:'none'}}>BookMyShow</a></li>
    </ul>
    
    <Model/>
  </div>
  <Remo/>




    </div>
  );
}

export default App;



