import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import location from '../../assets/pin.png';
import search from '../../assets/search.png';
import './formInput.css';

// Search Form
let input = (props) => {
  return (
    <form className="weather-form" onSubmit={props.formsubmit}>
      <InputGroup>
        {/* Location Icon */}
        <InputGroup.Prepend>
          <InputGroup.Text><img src={location} alt="Location" width="18" /></InputGroup.Text>
        </InputGroup.Prepend>

        {/* Search input */}
        <FormControl placeholder="Search by City" />

        {/* Search Icon */}
        <InputGroup.Append>
          <InputGroup.Text><button><img src={search} alt="Search" width="18" /></button></InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      {props.errorMsg ? <p className="error-msg">{props.errorMsg}</p> : null}
    </form>
  )
}
export default input;