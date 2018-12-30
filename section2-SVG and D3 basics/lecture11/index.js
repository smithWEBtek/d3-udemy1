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
// append shapes to svg container


svg.append('rect')
svg.append('circle')
svg.append('line')