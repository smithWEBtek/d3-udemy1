// select svg container first

const svg = d3.select('svg')


d3.json('planets.json').then(data => {
  const circs = svg.selectAll('circle')
    .data(data)

  console.log('circs: ', circs)
  console.log('data: ', data)

  // add attrs to circs already in DOM
  circs.attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);

  // append the enter() to the DOM
  circs.enter()
    .append('circle')
    // .attr('cy', 200)
    .attr('cy', d => d.orbit)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);
})

