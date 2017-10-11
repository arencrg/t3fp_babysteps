import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Header from './Header'

class NewVolunteer extends Component {


  constructor(props){
    super(props);
    this.state = { volData: {name: "", email:"", contactno:"", skills:[{name:'Project Management', val: false}, {name: 'Presentation Skills', val:false},
            {name:'Background in Psychology/Humanities', val:false}, {name:'Background in Healthcare Management/Medicine/Nutrition', val:false},
            {name:'Background in Science and Technology', val:false}, {name:'Background in Business Management/Economics', val:false}],
            interests:[{name:'Environmental Work', val:false}, {name:'Community Development', val:false}, {name:'Animal Rights', val:false},
            {name:'LGBT Rights and Issues', val:false}, {name:'Women Empowerment', val:false}], startdate:"", enddate:""}}
    this.saveProfile = this.saveProfile.bind(this);
  }

  saveProfile(event){
    event.preventDefault();
    this.state.volData.name = this.refs.inputName.value
    this.state.volData.email = this.refs.inputEmail.value
    this.state.volData.contactno = this.refs.inputContactno.value

    this.state.volData.skills[0].val = this.refs.inputSkill1.checked;
    this.state.volData.skills[1].val = this.refs.inputSkill2.checked;
    this.state.volData.skills[2].val = this.refs.inputSkill3.checked;
    this.state.volData.skills[3].val = this.refs.inputSkill4.checked;
    this.state.volData.skills[4].val = this.refs.inputSkill5.checked;

    this.state.volData.interests[0].val = this.refs.inputInterest1.checked;
    this.state.volData.interests[1].val = this.refs.inputInterest2.checked;
    this.state.volData.interests[2].val = this.refs.inputInterest3.checked;
    this.state.volData.interests[3].val = this.refs.inputInterest4.checked;
    this.state.volData.interests[4].val = this.refs.inputInterest5.checked;

    this.forceUpdate();

    browserHistory.push("/");
  }

  render(){
    return(
      <div>
      <Header />
      <div>
        <h2>Create your profile here</h2>

            <form>
              <input ref='inputName' type="text" placeholder="Name"/><br/><br/>
              <input ref='inputEmail' type="text" placeholder="Email Address"/> <br/><br/>
              <input ref='inputContactno' type="text" placeholder="Phone Number"/>

              <h2>What are your skills?</h2>
                <input ref='inputSkill1' type="checkbox"/> {this.state.volData.skills[0].name} <br/>
                <input ref='inputSkill2' type="checkbox"/> {this.state.volData.skills[1].name} <br/>
                <input ref='inputSkill3' type="checkbox"/> {this.state.volData.skills[2].name} <br/>
                <input ref='inputSkill4' type="checkbox"/> {this.state.volData.skills[3].name} <br/>
                <input ref='inputSkill5' type="checkbox"/> {this.state.volData.skills[4].name} <br/>

              <h2>What are you interested in?</h2>
                <input ref='inputInterest1' type="checkbox"/> {this.state.volData.interests[0].name} <br/>
                <input ref='inputInterest2' type="checkbox"/> {this.state.volData.interests[1].name} <br/>
                <input ref='inputInterest3' type="checkbox"/> {this.state.volData.interests[2].name} <br/>
                <input ref='inputInterest4' type="checkbox"/> {this.state.volData.interests[3].name} <br/>
                <input ref='inputInterest5' type="checkbox"/> {this.state.volData.interests[4].name} <br/>

                <br/>
              <button onClick={(event)=>this.saveProfile(event)}>Save your profile</button>

            </form>
            <br/>
          <Link to="/">Back</Link>
      </div>
      </div>
    )
  }
}


export default NewVolunteer
