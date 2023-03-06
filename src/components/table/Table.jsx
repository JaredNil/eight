import React from 'react';
import tableScope from './fibel.js'

const Table = () => {
	const [select, setSelect] = React.useState([])

	const [beaty, setBeaty] = React.useState(0)
	const [love, setLove] = React.useState(0)
	const [spring, setSpring] = React.useState(0)

	const b = ['9:0', '8:0', '7:0', '6:0', '5:0', '4:0', '3:0']
	const l = ['5:2', '5:3', '5:4', '5:5', '5:6', '5:7']
	const s = ['5:6', '6:6', '7:6', '8:6', '9:6']

	React.useEffect(() => {
		// console.log(beaty + ';' + love + ';' + spring)

		if (beaty === b.length && beaty < 10) {
			b.forEach(letter => {
				document.getElementById(letter).classList.add('winner')
			})
			popup('popup__beaty')
			setBeaty(1000)
		}
		if (love === l.length && love < 10) {
			l.forEach(letter => {
				document.getElementById(letter).classList.add('winner')
			})
			popup('popup__love')
			setLove(1000)
		}
		if (spring === s.length && spring < 10) {
			s.forEach(letter => {
				document.getElementById(letter).classList.add('winner')
			})
			popup('popup__spring')
			setSpring(1000)
		}
	}, [beaty, love, spring])

	const popup = (text) => { document.getElementsByClassName(text)[0].classList.remove('hide') }

	const clickLetterHandler = (e) => {
		words(e.target)

		if (e.target.classList.contains('clicked')) {
			const filtredSelect = select.filter(f => {
				if (f !== e.target.id) {
					return f
				}
			})
			setSelect([...filtredSelect])
		}
		else {
			setSelect([...select, e.target.id])
		}

		e.target.classList.toggle('clicked')
	}

	const words = (letter) => {

		if (letter.id === '5:6') {
			if (!letter.classList.contains('added')) {
				setLove(love + 1)
				setSpring(spring + 1)
			}
			else {
				if (love !== 0) {
					setLove(love - 1)
					setSpring(spring - 1)
				}
			}
			letter.classList.toggle('added')
		}
		else {
			if (b.includes(letter.id)) {
				if (!letter.classList.contains('added')) {
					setBeaty(beaty + 1)
				}
				else {
					if (beaty !== 0) {
						setBeaty(beaty - 1)
					}
				}
				letter.classList.toggle('added')
			}
			if (l.includes(letter.id)) {
				if (!letter.classList.contains('added')) {
					setLove(love + 1)
				}
				else {
					if (love !== 0) {
						setLove(love - 1)
					}
				}
				letter.classList.toggle('added')
			}
			if (s.includes(letter.id)) {
				if (!letter.classList.contains('added')) {
					setSpring(spring + 1)
				}
				else {
					if (spring !== 0) {
						setSpring(spring - 1)
					}
				}
				letter.classList.toggle('added')
			}
		}
	}

	return (
		<div className='table'>
			{tableScope.map((line, i) => {
				return <div className="line" id={i} key={i}>
					{line.map((l, j) => {
						return <div className='item' key={j}>
							<div className='item__container'
								onClick={clickLetterHandler}
								id={i + ':' + j}
							>
								<span>{l}</span>
							</div>
						</div>
					})}
				</div>
			})}
		</div >
	)
}

export default Table;