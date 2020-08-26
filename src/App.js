import React from "react"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"

import MessageForm from "./components/MessageForm"
import MessageList from "./components/MessageList"

// const chatRoomData = {
// 	name: "The Local Lounge",
// 	messages: {
// 		dsadsdsadsa1: {
// 			message: "Hej 1",
// 		},
// 		dsadsdsadsa2: {
// 			message: "Hej 2",
// 		},
// 		dsadsdsadsa3: {
// 			message: "Hej 3",
// 		},
// 	},
// }

function App() {
	const [counter, setCounter] = useState(0)
	const [chatRoomData, setChatRoomData] = useState({})
	//Defaultvärdet i useState sätts till förväntad variabeltyp (objekt, array, siffra eller sträng)

	function handleGetChatRoom() {
		console.log("handleGetChatRoom körs")
		//Fetch är en funktion(ett promise) som är inbyggd i nya version av JS.Fetchen hämtar api:et
		const url =
			"https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setChatRoomData(data)
			})
	}

	//useEffect: hämta data från extern källa direkt när sidan laddas
	useEffect(() => {
		handleGetChatRoom()
	}, [])

	// useEffect(() => {
	//   //1. Det här körs när komponenten initieras ("komponentens första önskan")

	//   //2. return: Körs när komponenten försvinner från sidan ("komponentens sista önskan")
	// }, [
	//   //3. Ovan körs när dessa variabler ändras
	// ])

	function handleOnClick() {
		setCounter(counter + 1)
		console.log(counter)
	}
	return (
		<div className="container">
			<h1 onClick={handleOnClick}>
				{chatRoomData.name} - {counter}
			</h1>

			<div className="row">
				<div className="col-md-12">
					{/* handleOnSuccess, label, placeholder är props som vi skickar med till komponenten MessageForm. */}
					<MessageForm
						handleOnSuccess={handleGetChatRoom}
						label="Enter your message"
						placeholder="Ditt meddelande"
					/>
					{/* Precis som satt skriva {MessageForm()} med vanlig JS*/}
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					{/* Kollar om message finns - om ja, rendera message. Annars rendera inget */}
					{chatRoomData.messages ? (
						<MessageList messages={chatRoomData.messages} />
					) : (
						""
					)}
				</div>
			</div>
		</div>
	)
}

//3.Exporterar app-funktionen (som omsluter hela appen)
export default App
