import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import MessageForm from "./components/MessageForm"
import MessageList from "./components/MessageList"

const chatRoomData = {
	name: "The Local Lounge",
	messages: {
		dsadsdsadsa1: {
			message: "Hej 1",
		},
		dsadsdsadsa2: {
			message: "Hej 2",
		},
		dsadsdsadsa3: {
			message: "Hej 3",
		},
		dsadsdsadsa4: {
			message: "Hej 4",
		},
		dsadsdsadsa5: {
			message: "Hej 5",
		},
		dsadsdsads6: {
			message: "Hej 6",
		},
	},
}

function App() {
	return (
		<div className="container">
			<h1>{chatRoomData.name}</h1>

			<div className="row">
				<div className="col-md-12">
					<MessageForm
						label="Enter your message"
						placeholder="Ditt meddelande"
					/>
					{/* Precis som satt skriva {MessageForm()} med vanlig JS*/}
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<MessageList messages={chatRoomData.messages} />
				</div>
			</div>
		</div>
	)
}

//3.Exporterar app-funktionen (som omsluter hela appen)
export default App
