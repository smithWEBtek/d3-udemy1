
const data = [
	{ x: 15, y: 55, width: 200, height: 100, fill: 'purple' },
	{ x: 15, y: 55, width: 100, height: 60, fill: 'pink' },
	{ x: 15, y: 55, width: 50, height: 30, fill: 'red' },
	{ x: 15, y: 55, width: 40, height: 20, fill: 'green' },
	{ x: 15, y: 55, width: 30, height: 10, fill: 'yellow' },
	{ x: 260, y: 115, width: 200, height: 100, fill: 'purple' },
	{ x: 260, y: 115, width: 100, height: 60, fill: 'pink' },
	{ x: 260, y: 115, width: 50, height: 30, fill: 'red' },
	{ x: 260, y: 115, width: 40, height: 20, fill: 'green' },
	{ x: 260, y: 115, width: 30, height: 10, fill: 'yellow' },
];

const svg = d3.select('svg');

const rects = svg.selectAll('rect')
	.data(data)
	.attr('x', d => d.x)
	.attr('y', d => d.y)
	.attr('width', function (d, i, n) {
		console.log(`n:${i} `, n[i]);
		return d.width
	})
	.attr('height', d => d.height)
	.attr('fill', d => d.fill);

console.log('rects before enter/append: ', rects);

rects.enter()
	.append('rect')
	.attr('x', d => d.x)
	.attr('y', d => d.y)
	.attr('width', function (d, i, n) {
		console.log(`n:${i} `, n[i]);
		return d.width
	})
	.attr('height', d => d.height)
	.attr('fill', d => d.fill);
console.log('rects after enter/append: ', rects);