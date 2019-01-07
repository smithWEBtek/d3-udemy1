
// svg variable is placed using a div and class css selector
const svg = d3.select('.canvas')
	.append('svg')
	.attr('width', 600)
	.attr('height', 600)
	.attr('margin-left', 130);

// create margins on dimensions
const margin = { top: 100, right: 20, bottom: 100, left: 100 };
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

// create group
const graph = svg.append('g')
	.attr('width', graphWidth)
	.attr('height', graphHeight)
	.attr('transform', `translate(${margin.left}, ${margin.top})`)

// axis
const xAxisGroup = graph.append('g')
	.attr('transform', `translate(0, ${graphHeight})`)

const yAxisGroup = graph.append('g')

// get json data

debugger;

d3.json('menu.json').then(response => {
	// db('udemy-d3-firebase').then(response => {

	// sort data by orders attribute
	let data = response.sort((a, b) => a.orders < b.orders ? -1 : 1)

	// set y domain using min/max of data orders attribute
	// set y range using graphHeight(calculated above) and 0 
	const y = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.orders)])
		.range([graphHeight, 0]);

	const x = d3.scaleBand()
		.domain(data.map(item => item.name)) // array of names for x domain
		.range([0, graphWidth]) // range within overall graph width
		.paddingInner(0.1)
		.paddingOuter(0.2);

	// find existing and append virtual rects to graph now, instead of svg, to incorporate graph grouping
	// const rects = svg.selectAll('rect')
	// add data to rects
	const rects = graph.selectAll('rect')
		.data(data)

	// bind existing rects to graph, instead of svg, to incorporate graph grouping
	rects.attr('width', x.bandwidth)
		.attr('height', d => graphHeight - y(d.orders))
		.attr('fill', 'orange')
		.attr('x', d => x(d.name))
		.attr('y', d => y(d.orders));

	// create and append virtual rects to graph, instead of svg, to incorporate graph grouping
	rects.enter()
		.append('rect')
		.attr('width', x.bandwidth) // width determined by svg width diveded by numer of items in x.domain
		.attr('height', d => graphHeight - y(d.orders)) // height of bar only, does not place it up or down vertically
		.attr('fill', () => {
			return generateColors(data.length)
		})
		.attr('x', d => x(d.name))   // name attr is index on array derived in x BAND scale; returns a number
		.attr('y', d => y(d.orders)); // orders attr is index on array derived in y LINEAR; returns a numb


	// create and call the axes
	const xAxis = d3.axisBottom(x)
	const yAxis = d3.axisLeft(y)
		.ticks(9)
		.tickFormat(d => `${d} orders`);

	// apply these to:  
	// const xAxisGroup = graph.append('g')
	// const yAxisGroup = graph.append('g')
	xAxisGroup.call(xAxis)
	yAxisGroup.call(yAxis)

	xAxisGroup.selectAll('text')
		.attr('transform', 'rotate(-40)')
		.attr('text-anchor', 'end')
		.attr('fill', 'black');
})
