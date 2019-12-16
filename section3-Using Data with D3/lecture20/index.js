const svg = d3.select('svg');

d3.json('planets.json')
	.then(data => {
		// console.log(data);

		const circs = svg.selectAll('circle')
			.data(data)

		// add attrs to circs existing (if any) in DOM
		circs.attr('cy', 200)
			.attr('cx', d => d.distance)
			.attr('r', d => d.radius)
			.attr('fill', d => d.fill);

		//append the "enter selection" to DOM
		circs.enter()
			.append('circle')
			.attr('cy', 100)
			.attr('cy', d => d.orbit)
			.attr('cx', d => d.distance)
			.attr('r', d => d.radius)
			.attr('fill', d => d.fill);
	})
