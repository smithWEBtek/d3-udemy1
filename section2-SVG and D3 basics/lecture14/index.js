const canvas = d3.select('.canvas')
const svg = canvas.append('svg')
	.attr('height', 600)
	.attr('width', 600);

// translate the whole group over and down
const group = svg.append('g')
	.attr('transform', 'translate(50, 300)')

// append shapes to svg container
group.append('rect')
	.attr('width', 200)
	.attr('height', 100)
	.attr('fill', 'blue')
	.attr('x', 20)
	.attr('y', 20)

group.append('circle')
	.attr('r', 50)
	.attr('cx', 300)
	.attr('cy', 70)
	.attr('fill', 'pink')
	.attr('stroke', 'black')
// .attr('stroke-width', 2)

group.append('line')
	.attr('x1', 370)
	.attr('y1', 20)
	.attr('x2', 400)
	.attr('y2', 120)
	.attr('stroke', 'red')
	.attr('stroke-width', 2)

// not in group
svg.append('text')
	.attr('x', 20)
	.attr('y', 200)
	.attr('fill', 'grey')
	.text('Hello ninjas')
	.style('font-family', 'Arial')

