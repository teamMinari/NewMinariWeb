import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { hidden } from '@mui/material';

const StackBars = () => {
  return (
    <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={345}
      height={400}
      margin={{ top: 50, bottom:20, left: 0, right:0 }}
      padding={-50}
      slotProps={{
        // legend: { },
        position: {
          vertical: 'bottom',
          horizontal: 'middle',
        },
        legend: {
          hidden: false,
          labelStyle: {
            fontSize: 14,
            fontWeight:900,
          },
        },
        direction: "row",
        labelStyle: {
          fontWeight: 500,
        },
        
        
      }}
    />
  );
}

export default StackBars;