import React from "react";
import PropTypes from 'prop-types'

import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

export const PlotlyData = ({data, amount}) =>{
    
      return (
        <>
        <div>Plotly Data
        {data && data.timestamps && (
        <PlotlyComponent className="whatever" data={[
              {
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
                x: data.timestamps.slice(0, amount).map((timestamp) => new Date(timestamp)),
                y: data.values.slice(0, amount),
              },
            ]}
            layout={{ width: 600, height: 600, title: data.metricName }}/>)}</div>
        </>
      );
    
}

PlotlyData.propTypes = {
  data: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired,
}