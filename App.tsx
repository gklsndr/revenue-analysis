import * as React from 'react';
import './style.css';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

export default function App() {
  const chartTypes = [
    'Revenue & ACV timeline',
    'Revenue & TCV timeline',
    'ACV vs TCV',
  ];
  const [selectedChart, setChart] = useState(chartTypes[0]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function handleChange(eventData) {
    setChart(eventData.target.value);
    console.log('Chart Selected', eventData.target.value);
  }

  return (
    <div className="appRoot">
      <div className="header">
        <Select
          value={selectedChart}
          onChange={handleChange}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {chartTypes.map((name) => (
            <MenuItem key={name} value={name} classes="chartItem">
              {name}
            </MenuItem>
          ))}
        </Select>
        Hi Bruce Wayne
      </div>
    </div>
  );
}
