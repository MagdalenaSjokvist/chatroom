import React from "react"

export default function ButtonSend(props) {
	//3. Ta emot prop från parent
	const { label, handleOnClick } = props //Ett sätt att definiera en key/variabel i props-objektet
	return (
		//4. Trigga prop-funktionen när någon trycker på knappen
		<button onClick={handleOnClick} className="btn btn-primary btn-block">
			{label}
		</button>
	)
}

//Alternativt sätt att exportera komponenten (istället för att skriva export default innan funktionsnamnen)
//export default ButtonSend
