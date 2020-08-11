
const data = [
	{ width: 200, height: 100, fill: 'purple' },
	{ width: 100, height: 60, fill: 'pink' },
	{ width: 50, height: 30, fill: 'red' },
	{ width: 25, height: 15, fill: 'lightblue' }
];

const svg = d3.select('svg');

// joins data to existing 'rects'
const rects = svg.selectAll('rect')
	.data(data)

// add attrs to rects already in the DOM
rects.attr('width', (d, i, n) => d.width)
	.attr('height', d => d.height)
	.attr('fill', d => d.fill)

// append the enter selection to the DOM
rects.enter()
	.append('rect')
	.attr('fill', 'blue')
	.attr('width', (d, i, n) => d.width)
	.attr('height', d => d.height)
	.attr('fill', d => d.fill);

console.log('rects: ', rects)
