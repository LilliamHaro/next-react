import { Component } from 'react'
import axios from 'axios'
import Head from '../components/head';
import Nav from '../components/nav';




class Home extends Component {  
  constructor(props){
    super(props)
    this.state = {
      dummy:''
    }
  }

  render(){
    return(
      <div>
        <Head  title="HOME" css="static/css/style.css" description="description 321 HOME" url="string" ogImage="https://circuit.com.pe/test-nextjs/static/test-seo.jpg"/>
        <Nav/>
        <main>
          home
          <figure>
            <img src={require('../static/img/test.jpg')} alt=""/>
          </figure>
          <ul>
            {
             this.props.data.map((dat,i) => (
               <li key={i}>{dat.show.name}</li>
             ) )
            }
          </ul>
        </main>
      </div> 
    )
  }
}

Home.getInitialProps = async function() {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  // res es toda la respuesta data es un key de la respuesta
  const data = await res.data;
  return { data: data };
};

export default Home;
