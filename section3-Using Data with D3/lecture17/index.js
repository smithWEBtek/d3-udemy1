const data = [
	{ x: 50, y: 23, width: 200, height: 300, fill: 'grey' }
];

const svg = d3.select('svg');

// const rect = svg.select('rect')
// 	.data(data)
// 	.attr('width', (d, i, n) => {
// 		// console.log('arrow function this: ', this)
// 		console.log('using n[i] to retrieve element: ', n[i])
// 		return d.width
// 	})
// 	.attr('height', function (d, i, n) {
// 		console.log('regular function this: ', this)
// 		return d.height
// 	})
// 	.attr('fill', function (d, i, n) { return d.fill });

const rect = svg.select('rect')
	.data(data)
	.attr('x', d => d.x)
	.attr('y', d => d.y)
	.attr('width', (d, i, n) => d.width)
	.attr('height', d => d.height)
	.attr('fill', d => d.fill)
