const svg = d3.select('svg');

// hard coding attributues
// svg.select('react')
// .attr('width', 200)
// .attr('heigth', 200)
// .attr('fill', 200)

// dynamically assigning attributes
const data = [
	{ width: 200, height: 400, fill: 'pink' },
	{ width: 200, height: 400, fill: 'purple' },
	{ width: 200, height: 400, fill: 'gray' }
];

// const data = [{ width: 100, height: 70, fill: 'blue' }];


const rect = svg.select('rect')
	.data([data[2]])
	.attr('width', function (d, i, n) {
		console.log("data: ", d)
		console.log("index: ", i)
		console.log("node?: ", n)
		return d.width
	})
	.attr('height', function (d, i, n) { return d.height })
	.attr('fill', function (d, i, n) { return d.fill });

console.log('rect: ', rect);