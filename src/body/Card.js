import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import tag from './logos/tag.svg';
export default function Card(props) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');
  return (
    <div className="card container">
      <img className="tag" src={tag} alt="logo" />
      <img className="logo" src={props.logo} alt="logo" />
      <div className="sale1">{props.offer1}</div>
      {props.offer3?<div className="sale3">{props.offer3}</div>:''}

      <div className="sale2">{props.offer2}</div>
      <div className="form">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stores</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Stores"
          >
            {props.stores.map((store) => (
              <MenuItem value={store}>{store}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="terms">*T&C Apply</div>
      </div>
    </div>
  );
}
