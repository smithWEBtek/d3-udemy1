
generateColors = (numberOfColors) => {
	let colors = []

	function genColor() {
		let color = 'rgb('
		let r = Math.floor(Math.random() * 255).toString()
		let g = Math.floor(Math.random() * 255).toString()
		let b = Math.floor(Math.random() * 255).toString()

		color += r + ','
		color += g + ','
		color += b + ')'

		return color
	}
	for (i = 0; i < numberOfColors; i++) {
		let gcolor = genColor()
		if (colors.includes(gcolor)) {
			gcolor = genColor()
		}
		colors.push(gcolor)
	}
	return colors[Math.floor(Math.random() * colors.length - 1)];
}