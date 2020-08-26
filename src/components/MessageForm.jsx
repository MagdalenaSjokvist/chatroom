import React from "react"
import ButtonSend from "./ButtonSend"

//Export default funktionen är den som blir tillgänglig utanför den här filen
//Allt som ska finnas tillgängligt utanför filen måste ligga inuti export default-funktionen

export default function MessageForm({ label, placeholder }) {
	return (
		<div className="form-group">
			<label>{label}</label>
			<input type="text" className="form-control" placeholder={placeholder} />
			<ButtonSend label="Send" />
		</div>
	)
}

//{label}) är ett sätt att deconstructa objektet props (som ett kortkommando för props.label)
//Talar om att det är label som skickas in som props)
//props är ett objekt som vi kan välja att skicka med en funktion.
//Vi kan bestämma vilka keys objektet ska innehålla, beroende på vad vi behöver skicka med.
//T.ex. label eller placeholder, som vi kommer åt via props.label och props.placeholder.
