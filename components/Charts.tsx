"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "./data";
import { Slider, Typography, styled } from "@mui/material";

const CustomSlider = styled(Slider)({
  color: "#8884d8",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#8884d8",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Charts = () => {
  const data_length = data.length;

  const [value, setValue] = React.useState(10);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <div className="w-1/2 h-3/4 pt-20">
      <div className="px-20">
        <Typography variant="h3" gutterBottom>
          Suburbs
        </Typography>
        <CustomSlider
          aria-label="Suburbs"
          defaultValue={10}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={10}
          max={data_length}
        />
      </div>
      <BarChart
        width={1200}
        height={600}
        data={data.slice(-value, -1)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="service requests" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Charts;
