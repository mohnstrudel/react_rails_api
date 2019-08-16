import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PropTypes from "prop-types";

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

function getThings(){
  console.log('getThings() Action!');
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch('v1/things.json')
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  }
}

export function getThingsSuccess(json){
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}

function getStuff(){
  console.log('Butt stuff!');
  return {
    type: "hosa"
  }
}

class HelloWorld extends React.Component {
  render () {
    const { things } = this.props;
    const thingsList = things.map((thing) => {
      return <li>{thing.name} {thing.guid}</li>
    })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getThingsBtn" onClick= { () => this.props.getThings() } > getThings on Crack </button>
        <br />
        <ul> { thingsList } </ul>
        <button className="getStuffBtn" onClick= { () => this.props.getStuff() } > getStuff </button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings, getStuff };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
