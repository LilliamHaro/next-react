import { Component } from "react";
import axios from "axios";
import Head from "../components/head";
import Nav from "../components/nav";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.typing = this.typing.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  typing = e => {
    let element = e.target.name;
    let value = e.target.value;
    this.setState(
      {
        [element]: value
      },
      function() {
        console.log(this.state.name);
      }
    );
  };

  sendForm = e => {
    e.preventDefault();
    const url = "https://tranquil-cliffs-48912.herokuapp.com/";
    let data = {
      name: this.state.name
    }
    axios
      .post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Head
          title="FORM"
          css="../static/css/style.css"
          description="description 123 FORM"
          url="string"
          ogImage="https://circuit.com.pe/test-nextjs/static/mor.jpg"
        />
        <Nav />
        <main>
          Formulario
          <figure>
            <img src={require("../static/img/mor.jpg")} alt="" />
          </figure>
          <form id="formulario" onSubmit={this.sendForm} action="">
            <input
              type="text"
              name="name"
              onChange={this.typing}
              value={this.state.name}
            />
            <button type="submit">Enviar</button>
          </form>
        </main>

        <style jsx>
          {`
            :global(body) {
              background: #d1d1d1;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Form;
