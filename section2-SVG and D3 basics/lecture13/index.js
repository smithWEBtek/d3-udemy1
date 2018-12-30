// console.log('index.js loaded ...');

// const a = document.querySelector('div') // returns first div
// console.log('querySelector: ', a);

// const b = document.querySelectorAll('div') // returns a node list of divs
// console.log('querySelectorAll: ', b);


// const c = d3.select('div') // wraps the divs in a const, with a D3 wrapper, (wrapped our div in a selection object)
// console.log('select: ', c);

// const d = d3.selectAll('div') // wraps the divs in a const, with a D3 wrapper, (wrapped our div in a selection object)
// console.log('selectAll: ', d);


const canvas = d3.select('.canvas')
// canvas is wrapped inside a D3 wrapper

const svg = canvas.append('svg')
	.attr('height', 600)
	.attr('width', 600);

// append shapes to svg container
svg.append('rect')
	.attr('width', 200)
	.attr('height', 100)
	.attr('fill', 'blue')
	.attr('x', 20)
	.attr('y', 20)

svg.append('circle')
	.attr('r', 50)
	.attr('cx', 300)
	.attr('cy', 70)
	.attr('fill', 'pink')
	.attr('stroke', 'black')
// .attr('stroke-width', 2)

svg.append('line')
	.attr('x1', 370)
	.attr('y1', 20)
	.attr('x2', 400)
	.attr('y2', 120)
	.attr('stroke', 'red')
	.attr('stroke-width', 2)

svg.append('text')
	.attr('x', 20)
	.attr('y', 200)
	.attr('fill', 'grey')
	.text('Hello ninjas')
	.style('font-family', 'Arial')


