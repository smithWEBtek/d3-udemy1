
generateColors = () => {
	let colors = []

	function genColor() {
		let color = 'rgb('
		let n1 = Math.floor(Math.random() * 255).toString()
		let n2 = Math.floor(Math.random() * 255).toString()
		let n3 = Math.floor(Math.random() * 255).toString()

		if (n1 === n2 && n2 === n3) {
			n1 = Math.floor(Math.random() * 255).toString()
			n2 = Math.floor(Math.random() * 255).toString()
			n3 = Math.floor(Math.random() * 255).toString()
		}

		color += n1 + ','
		color += n2 + ','
		color += n3 + ')'

		return color
	}
	for (i = 0; i < 20; i++) {
		colors.push(genColor())
	}
	return colors[Math.floor(Math.random() * colors.length - 1)];
}
