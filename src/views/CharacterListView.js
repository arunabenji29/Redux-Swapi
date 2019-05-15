import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import { CharacterList } from "../components";
// import actions
import {getCharacter} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();

    // console.log(this.props.characters)
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
    }
    return (
      
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log('mapStateToProps ',state)
  return { 
  characters:state.charsReducer.characters,
  fetching:state.charsReducer.isLoading,
  error:state.charsReducer.error
  
}};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacter
  }
)(CharacterListView);
