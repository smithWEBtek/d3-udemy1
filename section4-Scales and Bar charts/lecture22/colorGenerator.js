
generateColor = () => {
	let colors = []

	function genColor() {
		let color = 'rgb('
		let number1 = 0
		let number2 = 0
		let number3 = 0

		number1 = Math.floor(Math.random() * 255).toString()
		number2 = Math.floor(Math.random() * 255).toString()
		number3 = Math.floor(Math.random() * 255).toString()

		color += number1 + ','
		color += number2 + ','
		color += number3 + ')'

		return color
	}
	for (i = 0; i < 20; i++) {
		colors.push(genColor())
	}
	return colors[Math.floor(Math.random() * colors.length - 1)];
}