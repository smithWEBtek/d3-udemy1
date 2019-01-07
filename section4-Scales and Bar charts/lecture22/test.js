d3.json('menu.json')
	.then(data => {

		let maxValue = 0;

		data.forEach(item => {
			if (item.orders > maxValue) {
				maxValue = item.orders
			}
		})
	})