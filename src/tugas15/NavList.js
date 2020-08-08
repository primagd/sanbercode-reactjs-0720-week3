import React, {useContext} from "react"
import {Link} from "react-router-dom";

const NavList = () =>{
  return(
    <>
      <div className="nav">
      <ul>
        <li>
          <Link to="/tugas11">tugas11</Link>
        </li>
        <li>
          <Link to="/tugas12">tugas12</Link>
        </li>
        <li>
          <Link to="/tugas13">tugas13</Link>
        </li>
        <li>
          <Link to="/tugas14">tugas14</Link>
        </li>
        <li>
          <Link to="/tugas15">tugas15</Link>
        </li>
      </ul>
      <br></br>
    </div>
    </>
  )
}


export default NavList
