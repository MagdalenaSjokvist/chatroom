import React from "react"
import { useRef } from "react"
import ButtonSend from "./ButtonSend"

//Export default funktionen är den som blir tillgänglig utanför den här filen
//Allt som ska finnas tillgängligt utanför filen måste ligga inuti export default-funktionen

export default function MessageForm({ label, placeholder, handleOnSuccess }) {
	const messageInputField = useRef()

	//1. Skriv funktionen som ska anropas
	function handleOnClick() {
		// console.log("Klickat på knapp")
		// console.log(messageInputField.current.value)
		const message = messageInputField.current.value
		const url =
			"https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
		const data = {
			message: message,
		}
		fetch(url, {
			method: "POST",
			body: JSON.stringify(data),
			//Finns olika metoder för att göra olika saker med datan:
			//GET: hämtar data, POST: skapar data, PUT: förändrar hela objektet, DELETE: tar bort hela objektet, PATCH: förändrar del av objektet
		}).then((response) => {
			console.log("Data har skickats")
			handleOnSuccess()
		})
	}

	{
	}
	return (
		<div className="form-group">
			<label>{label}</label>
			{/* Lägg in ref-variabeln i inputfältet, så vi kan referera till just det här inputfältet. */}
			<input
				ref={messageInputField}
				type="text"
				className="form-control"
				placeholder={placeholder}
			/>
			{/* 2. Skicka ner funktionen som prop */}
			<ButtonSend handleOnClick={handleOnClick} label="Send" />
		</div>
	)
}

//{label}) är ett sätt att deconstructa objektet props (som ett kortkommando för props.label)
//Talar om att det är label som skickas in som props)
//props är ett objekt som vi kan välja att skicka med en funktion.
//Vi kan bestämma vilka keys objektet ska innehålla, beroende på vad vi behöver skicka med.
//T.ex. label eller placeholder, som vi kommer åt via props.label och props.placeholder.
