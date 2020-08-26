import React from "react"
import MessageItem from "./MessageItem"

export default function MessageList({ messages }) {
	// console.log(Object.entries(messages))
	const messageArray = Object.entries(messages)
	//Object.entries konverterar objektet till en array som är lättare att jobba med

	const myArray = []
	return (
		<ul className="list-group">
			{messageArray.map((item) => {
				console.log(item)
				const key = item[0]
				const messageData = item[1]
				const message = messageData.message
				return <MessageItem message={message} />

				//Kan även skrivas som nedan, på en och samma rad:
				// return <MessageItem key={item[0]} message={item[1].message} />
			})}
			<MessageItem message="Hej" />
			<MessageItem message="Hallå" />
			<MessageItem message="Hepp" />
			<MessageItem message="Hoj" />
		</ul>
	)
}
