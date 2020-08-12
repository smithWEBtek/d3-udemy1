const svg = d3.select('svg')

d3.json('menu.json').then(data => {
  console.log('data: ', data)

  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500]);

  // join data to rects
  const rects = svg.selectAll('rect')
    .data(data)

  rects.attr('width', 30)
    .attr('height', d => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d, i) => i * 40);

  rects.enter()
    .append('rect')
    .attr('width', 30)
    .attr('height', d => y(d.orders))
    .attr('fill', 'blue')
    .attr('x', (d, i) => i * 40);
})
