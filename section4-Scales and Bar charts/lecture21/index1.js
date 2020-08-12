const svg = d3.select("svg");

const y = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, 50]);

d3.json("menu.json")
  .then(data => {
    // console.log('data: ', data);

    const rects = svg.selectAll("rect")
      .data(data)
      .attr("width", 30)

    rects.attr("height", d => d.orders)
      .attr("fill", "purple")
      .attr("x", (d, i) => i * 40)

    rects.enter()
      .append("rect")
      .attr("width", 30)
      .attr("height", d => d.orders)
      .attr("fill", "red")
      .attr("x", (d, i) => i * 40)
  });
