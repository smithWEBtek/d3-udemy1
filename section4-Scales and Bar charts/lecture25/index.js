// only grab the css element, no svg present in html until we append it with our code
const svg = d3.select('.canvas')
	.append('svg') // appending the svg, instead of having it already in the DOM
	.attr('width', 600)
	.attr('height', 600)
	.attr('margin-left', 130);

// create margins on dimensions, give 4 named values
const margin = { top: 50, right: 10, bottom: 50, left: 50 };
// do the math to accomodate the height and width given aboave
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

// append group elemen to svg instantiated above
const graph = svg.append('g')
	.attr('width', graphWidth)    // use graphWidth variable from above
	.attr('height', graphHeight)  // use graphHeight variable from above
	// transform attribute applies margin-left and margin-right to the graph
	// otherwise your variables don't get used, they are only declared up to this point
	.attr('transform', `translate(${margin.left}, ${margin.top})`)

d3.json('menu.json').then(response => {
	let data = response.sort((a, b) => a.orders < b.orders ? -1 : 1)
	const y = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.orders)])
		.range([0, 500]);

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
			return generateColor()
		})
		.attr('x', d => x(d.name));
})
