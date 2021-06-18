import React, { Component } from "react";
import "./App.css";
import Photo from "./assets/photo.svg";
import Input from "./components/Input";
import info from "./components/info";
import PresentCV from "./components/PresentCV";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: info
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id,value) {
    this.setState(prevState => {
      const updatedData = {};
      updatedData.data = {};
      for (let section in prevState.data) {
        updatedData.data[section] = prevState.data[section].map(item => {
          if (item.id === id) {
            item.value = value;
          }
          return item;
        })
      }
      return updatedData;
    })
  }

  resetState() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(el=>{
      el.value="";
    })
    this.setState(prevState => {
      const initialState = {};
      initialState.data = {};
      for (let section in prevState.data) {
        initialState.data[section] = prevState.data[section].map(item => {
          item.value = "";
          return item;
        })
      }
      return initialState;
    })
    console.log(this.state.data.generalInfo);
  }

  render() {
    const genInfo = this.state.data.generalInfo.map(item => <Input key={item.id} item={item} handleChange={this.handleChange}/>);
    const educInfo = this.state.data.educationalExp.map(item => <Input key={item.id} item={item} handleChange={this.handleChange}/>);
    const workInfo = this.state.data.practicalExp.map(item => <Input key={item.id} item={item} handleChange={this.handleChange}/>);

    return (
      <div className="App">
        <div className="cv-builder">
          <h1>CV builder</h1>

          <section id="general-info">
            <h2>General Information</h2>
              <div>
              <img src={Photo} alt="person" />
              <form autoComplete="off">
                {genInfo}
              </form>
              </div>
          </section>

          <section id="education">
            <h2>Educational Experience</h2>
            <form autoComplete="off">
              {educInfo}
            </form>
          </section>

          <section id="work">
            <h2>Work Experience</h2>
            <form autoComplete="off">
              {workInfo}
            </form>
          </section>

          <button onClick={() => {
            console.log(this.state);
          this.resetState();
          }}>Reset</button>
        </div>
        <div className="present-cv">
          <PresentCV props={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
