import React from 'react';


class Action extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          dataHargaBuah: [
              {nama: "Semangka", harga: 10000, berat: 1000},
              {nama: "Anggur", harga: 40000, berat: 500},
              {nama: "Strawberry", harga: 30000, berat: 400},
              {nama: "Jeruk", harga: 30000, berat: 1000},
              {nama: "Mangga", harga: 30000, berat: 500}
          ],
          inputName: "",
          inputHarga: "",
          inputBerat: "",
          indexOfForm: -1
      }
      
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleHargaChange = this.handleHargaChange.bind(this);
      this.handleBeratChange = this.handleBeratChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    let index = event.target.value
    let newData = this.state.dataHargaBuah
    let editedData = newData[this.state.indexOfForm]
    newData.splice(index, 1)

    if (editedData !== undefined){
      var newIndex = newData.findIndex((el) => el === editedData)
      this.setState({dataHargaBuah: newData, indexOfForm: newIndex})
    } else{
      this.setState({dataHargaBuah: newData})
    }
    
  }
  
  handleEdit(event){
    let index = event.target.value
    let data = this.state.dataHargaBuah[index]
    this.setState({inputName: data.nama, inputHarga: data.harga, inputBerat: data.berat, indexOfForm: index})
  }

  handleNameChange(event){
      this.setState({
        inputName: event.target.value
      });
  }

  handleHargaChange(event){
    this.setState({
      inputHarga: event.target.value
    });
  }

  handleBeratChange(event){
    this.setState({
      inputBerat: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault()
    
    let nama = this.state.inputName
    let harga = this.state.inputHarga
    let berat = this.state.inputBerat

    if ((nama.replace(/\s/g,'') !== "") && (harga.toString().replace(/\s/g,'') !== "") && (berat.toString().replace(/\s/g,'') !== "")) {      
      let newData = this.state.dataHargaBuah
      let index = this.state.indexOfForm
      
      if (index === -1){
        newData = [
          ...newData,
          {nama: this.state.inputName,
           harga: this.state.inputHarga,
           berat: this.state.inputBerat}
        ]
      } else {
        newData[index] = {nama , harga, berat}
      }
  
      this.setState({
        dataHargaBuah: newData,
        inputName: '',
        inputHarga: '',
        inputBerat: ''
      })
    }

  }



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
                <th style={{padding: "0 50px"}}>Aksi</th>
              </tr>
            </thead>
          
          {this.state.dataHargaBuah.map((val,index)=> {
            return (
            <tbody>
              <tr key={index}>
                <td>{val.nama}</td> 
                <td>{val.harga}</td> 
                <td>{(val.berat/1000)+" kg"}</td>
                <td>
                <button onClick={this.handleEdit} value={index} >Edit</button>
                &nbsp;
                <button onClick={this.handleDelete} value={index}>Delete</button>
                </td>
              </tr>
            </tbody>
             )
            })}
          </table>
          <h1 style={{textAlign: 'center'}}>Formulir</h1>
            <form onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
              <label style={{marginRight: "59px"}}>
                Masukkan Nama Buah:
              </label>          
              <input type="text" name='nama' value={this.state.inputName} onChange={this.handleNameChange}/>
              <br />
              <label style={{marginRight: "56px"}}>
                Masukkan Harga Buah:
              </label>          
              <input type="text" name='harga' value={this.state.inputHarga} onChange={this.handleHargaChange}/>
              <br />
              <label style={{marginRight: "10px"}}>
                Masukkan Berat Buah (gram):
              </label>          
              <input type="text" name='buah' value={this.state.inputBerat} onChange={this.handleBeratChange}/>
              <br />
              <br />
              <button>submit</button>
            </form>


        </div>
        </>
      )
    }
  }


  export default Action;