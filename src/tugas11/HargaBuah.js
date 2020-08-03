import React from 'react';


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

  class Nama extends React.Component {
      render(){
          return <td>{this.props.nama} </td>;
      }
  }

  class Harga extends React.Component {
    render() {
      return <td>{this.props.harga} </td>;
    }
  }

  class Berat extends React.Component {
    render() {
      return <td>{this.props.berat/1000} kg</td>;
    }
  }


  class Info extends React.Component {
    render() {
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
              </tr>
            </thead>
          
          {dataHargaBuah.map(el=> {
            return (
            <tbody>
              <tr>
                <td><Nama nama={el.nama}/></td> 
                <td><Harga harga={el.harga}/></td> 
                <td><Berat berat={el.berat}/></td>
              </tr>
            </tbody>
             )
            })}
          </table>
        </div>
        </>
      )
    }
  }

  export default Info;