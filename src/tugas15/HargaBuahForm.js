import React, {useContext, useState} from "react"
import {BuahContext} from "./HargaBuahContext"
import axios from 'axios'

const BuahForm = () =>{
    const [dataHargaBuah, setDataHargaBuah] = useContext(BuahContext)
    const [inputNama, setInputNama]  =  useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState(0)
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")
    

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
    
        let newDataHargaBuah = dataHargaBuah.filter(el => el.id != idBuah)
    
        axios.delete(`http://backendexample.sanbercloud.com/fruits/${idBuah}`)
        .then(res => {
          console.log(res)
        })
              
        setDataHargaBuah([...newDataHargaBuah])
        
      }
      
      const handleEdit = (event) =>{
        let idBuah = parseInt(event.target.value)
        let buah = dataHargaBuah.find(x=> x.id === idBuah)
        setInputNama(buah.nama)
        setInputHarga(buah.harga)
        setInputBerat(buah.berat)
        setSelectedId(idBuah)
        setStatusForm("edit")
      }
    
      const handleNameChange = (event) => {
        setInputNama(event.target.value);
      }
    
      const handlePriceChange = (event) =>{
        setInputHarga(event.target.value);
      }
    
      const handleWeightChange = (event) =>{
        setInputBerat(event.target.value);
      }

      const handleSubmit = (event) =>{
        event.preventDefault()
    
        let name = inputNama
        let price = inputHarga
        let weight = inputBerat
    
        if ((name.replace(/\s/g,'') !== "") && (price.toString().replace(/\s/g,'') !== "") && (weight.toString().replace(/\s/g,'') !== "")){      
          if (statusForm === "create"){        
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
            .then(res => {
                setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
            })
          } else if(statusForm === "edit"){
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
            .then(res => {
                let dataBuah = dataHargaBuah.find(el=> el.id === selectedId)
                dataBuah.nama = name
                dataBuah.harga = price
                dataBuah.berat = weight
                setDataHargaBuah([...dataHargaBuah])
            })
          }
          
          setStatusForm("create")
          setSelectedId(0)
          setInputNama("")
          setInputHarga("")
          setInputBerat("")
        }
      }
      
      return (
        <>
        <div>
          <h1 style={{textAlign : "center"}}>Tabel Harga Buah</h1>
          <table border="1" style={{margin: "auto"}}>
            <thead>
              <tr style={{backgroundColor:"#AAAA"}}>
                <th style={{padding: "0 100px"}}>Nama</th>
                <th style={{padding: "0 50px"}}>Harga</th>
                <th style={{padding: "0 50px"}}>Berat</th>
                <th style={{padding: "0 50px"}}>Aksi</th>
              </tr>
            </thead>
          
          {dataHargaBuah !== null && dataHargaBuah.map((item, index)=> {
            return (
            <tbody>
              <tr key={index}>
                <td>{item.nama}</td> 
                <td>{item.harga}</td> 
                <td>{(item.berat/1000)+" kg"}</td>
                <td>
                <button onClick={handleEdit} value={item.id} >Edit</button>
                &nbsp;
                <button onClick={handleDelete} value={item.id}>Delete</button>
                </td>
              </tr>
            </tbody>
             )
            })}
          </table>
          <h1 style={{textAlign: 'center'}}>Formulir</h1>
            <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
              <label style={{marginRight: "59px"}}>
                Masukkan Nama Buah:
              </label>          
              <input type="text" name='nama' value={inputNama} onChange={handleNameChange}/>
              <br />
              <label style={{marginRight: "56px"}}>
                Masukkan Harga Buah:
              </label>          
              <input type="text" name='harga' value={inputHarga} onChange={handlePriceChange}/>
              <br />
              <label style={{marginRight: "10px"}}>
                Masukkan Berat Buah (gram):
              </label>          
              <input type="text" name='buah' value={inputBerat} onChange={handleWeightChange}/>
              <br />
              <br />
              <button>submit</button>
            </form>
        </div>
        </>
      )
    }
export default BuahForm
