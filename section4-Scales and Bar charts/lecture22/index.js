// select svg container
// const colors = ['blue', '#556677', 'pink', 'red', 'green', 'yellow', 'violet']

const svg = d3.select('svg')

d3.json('menu.json').then(data => {

	const y = d3.scaleLinear()
		.domain([0, 1000])
		.range([0, 500]);

	console.log('200:', y(200));
	console.log('400:', y(400));
	console.log('600:', y(600));

	// join data to rects
	// and select all 'rect's from DOM, 
	// (if data requires more 'rect's than exist, d3 will create virtual ones next)
	const rects = svg.selectAll('rect')
		.data(data)

	rects.attr('x', 0)
		.attr('y', 100)
		.attr('width', 30)
		.attr('height', d => y(d.orders))
		.attr('fill', 'blue')

	// append the enter selection to the DOM
	rects.enter()
		.append('rect')
		.attr('x', (d, i) => i * 43)
		// .attr('y', (d, i) => i * 60)
		.attr('width', 20)
		.attr('height', d => y(d.orders))
		.attr('fill', d => generateColor())
})

