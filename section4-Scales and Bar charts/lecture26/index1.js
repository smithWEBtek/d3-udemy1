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

d3.json('menu.json').then(response => {
	let data = response.sort((a, b) => a.orders < b.orders ? -1 : 1)
	const y = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.orders)])
		.range([0, graphHeight]);

	const x = d3.scaleBand()
		.domain(data.map(item => item.name))
		.range([0, 500])
		.paddingInner(0.1)
		.paddingOuter(0.2);

	// find existing and append virtual rects to graph now, instead of svg, to incorporate graph grouping
	// const rects = svg.selectAll('rect')
	const rects = graph.selectAll('rect')
		.data(data)

	rects.attr('width', x.bandwidth)
		.attr('height', d => y(d.orders))
		.attr('fill', 'orange')
		.attr('x', d => x(d.name));

	// find existing and append virtual rects to graph now, instead of svg, to incorporate graph grouping
	rects.enter()
		.append('rect')
		.attr('width', x.bandwidth)
		.attr('height', d => y(d.orders))
		.attr('fill', () => {
			return generateColors(data.length)
		})
		.attr('x', d => x(d.name));


	// create and call the axes
	const xAxis = d3.axisBottom(x)
	const yAxis = d3.axisLeft(y)

	xAxisGroup.call(xAxis)
	yAxisGroup.call(yAxis)

})
