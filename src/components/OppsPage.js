import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header'

class OppsPage extends Component {

  constructor(props){
  super(props);
  this.state = {
    oppsData: [
      {	id: 1,
      	name: 'Greenpeace Philippines',
      	description: 'An active volunteer organization that campaigns for their mission to save the environment.',
        skills:[{name:'Project Management', val: true}, {name: 'Presentation Skills', val:true},
                {name:'Background in Psychology/Humanities', val:false}, {name:'Background in Healthcare Management/Medicine/Nutrition', val:false},
                {name:'Background in Science and Technology', val:true}, {name:'Background in Business Management/Economics', val:false}],
        interests:[{name:'Environmental Work', val:true}, {name:'Community Development', val:false}, {name:'Animal Rights', val:false},
                {name:'LGBT Rights and Issues', val:false}, {name:'Women Empowerment', val:false}],
      	startdate: '12 November 2017',
      	enddate: '12 May 2018'
      },
      {	id: 2,
      	name: 'Volunteer Youth Leaders for Health-Philippines',
      	description: 'A service-oriented organization that aims to empower the Filipino Youth for health.',
        skills:[{name:'Project Management', val: true}, {name: 'Presentation Skills', val:true},
                {name:'Background in Psychology/Humanities', val:true}, {name:'Background in Healthcare Management/Medicine/Nutrition', val:true},
                {name:'Background in Science and Technology', val:false}, {name:'Background in Business Management/Economics', val:false}],
        interests:[{name:'Environmental Work', val:false}, {name:'Community Development', val:true}, {name:'Animal Rights', val:false},
                {name:'LGBT Rights and Issues', val:false}, {name:'Women Empowerment', val:false}],
      	startdate: '22 October 2017',
      	enddate: '22 April 2018'
      },
      {	id: 3,
      	name: 'Love Yourself',
      	description: 'A volunteer organization for the youth and the LGBT-MSM that aims to promote loving oneself.',
        skills:[{name:'Project Management', val: true}, {name: 'Presentation Skills', val:true},
                {name:'Background in Psychology/Humanities', val:true}, {name:'Background in Healthcare Management/Medicine/Nutrition', val:true},
                {name:'Background in Science and Technology', val:false}, {name:'Background in Business Management/Economics', val:false}],
        interests:[{name:'Environmental Work', val:false}, {name:'Community Development', val:true}, {name:'Animal Rights', val:false},
                {name:'LGBT Rights and Issues', val:true}, {name:'Women Empowerment', val:false}],
      	startdate: '05 Jan 2018',
      	enddate: '05 July 2018'
      },
      {	id: 4,
      	name: 'PinoyME Foundation',
      	description:'Started out as a social consortium to support the growth of Microfinance Institution (MFIs) before becoming a social investment banker for microentrepreneurs.',
        skills:[{name:'Project Management', val: true}, {name: 'Presentation Skills', val:true},
                {name:'Background in Psychology/Humanities', val:false}, {name:'Background in Healthcare Management/Medicine/Nutrition', val:false},
                {name:'Background in Science and Technology', val:true}, {name:'Background in Business Management/Economics', val:true}],
        interests:[{name:'Environmental Work', val:false}, {name:'Community Development', val:true}, {name:'Animal Rights', val:false},
                {name:'LGBT Rights and Issues', val:false}, {name:'Women Empowerment', val:false}],
      	startdate: '09 February 2018',
      	enddate: '09 August 2018'
      },
      {	id: 5,
      	name: 'United Nations World Food Programme',
      	description: 'the leading humanitarian organization which addresses the issue of hunger.',
        skills:[{name:'Project Management', val: true}, {name: 'Presentation Skills', val:true},
                {name:'Background in Psychology/Humanities', val:false}, {name:'Background in Healthcare Management/Medicine/Nutrition', val:true},
                {name:'Background in Science and Technology', val:false}, {name:'Background in Business Management/Economics', val:true}],
        interests:[{name:'Environmental Work', val:false}, {name:'Community Development', val:true}, {name:'Animal Rights', val:false},
                {name:'LGBT Rights and Issues', val:false}, {name:'Women Empowerment', val:false}],
      	startdate: '10 March 2018',
      	enddate: '10 September 2018'
      }]
  }
}

  render(){
    var xthis = this;
    var oppInfo = this.state.oppsData.find(function (opp) {
      return (opp.id == xthis.props.params.id)
    })

    console.log(oppInfo);
    console.log(this.props.volData)

    var reqSkills = oppInfo.skills.filter(function (skill) {
        if (skill.val == true){return skill.name;}
    });

    var reqInterests = oppInfo.interests.filter(function (interest) {
        if (interest.val == true){return interest.name;}
    });

    return(
      <div>
      < Header />

      <h3>Project ID: {this.props.params.id}</h3>
        <h1>{oppInfo.name}</h1>

      <h3>About the organization:</h3>
        <p>{oppInfo.description}</p>
      <h3>Dates: {oppInfo.startdate} - {oppInfo.enddate}</h3>
      <h3>Skill Preferences</h3>
        <ul>
          {reqSkills.map((skill,i) => <li key={i}>{skill.name}</li>)}
        </ul>
      <h3>Field/ Topic</h3>
        <ul>
          {reqInterests.map((skill,i) => <li key={i}>{skill.name}</li>)}
        </ul>

      <Link to="/">Back</Link>

      </div>
    )

  }
}

export default OppsPage;
