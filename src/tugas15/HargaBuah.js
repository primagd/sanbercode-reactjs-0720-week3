import React from "react"
import {BuahProvider} from "./HargaBuahContext"
import BuahForm from "./HargaBuahForm"

const Buah = () =>{
  return(
    <BuahProvider>
      <BuahForm/>
    </BuahProvider>
  )
}

export default Buah
