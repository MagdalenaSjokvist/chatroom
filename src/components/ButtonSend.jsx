import React from "react"

export default function ButtonSend(props) {
	const { label } = props //Ett sätt att definiera en key/variabel i props-objektet
	return <button className="btn btn-primary btn-block">{label}</button>
}

//Alternativt sätt att exportera komponenten (istället för att skriva export default innan funktionsnamnen)
//export default ButtonSend
