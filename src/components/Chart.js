import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Chart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current)
            .attr("width", 500)
            .attr("height", 300);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 40)
            .attr("y", d => 300 - d)
            .attr("width", 35)
            .attr("height", d => d)
            .attr("fill", "blue");

    }, [data]);

    return <svg ref={chartRef}></svg>;
};

export default Chart;
