import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    productos: [
      {name: 'Frutilla', price: 500, img: '/productos/frutilla.png'},
      {name: 'Mango', price: 330, img: '/productos/mango.png'},
      {name: 'Banana', price: 224, img: '/productos/banana.png'},
      {name: 'Kiwi', price: 451, img: '/productos/kiwi.png'}
    ],
    carro:[],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) =>{
    const {carro} = this.state
    if (carro.find(x=> x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name 
        ?({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (this.state.carro.lenght){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render() {
    const{esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro = {this.state.carro} 
        esCarroVisible = {esCarroVisible} 
        mostrarCarro = {this.mostrarCarro}/>
        <Layout>
          
          <Title/>
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
        
      </div>
    )
  }
}


export default App;
