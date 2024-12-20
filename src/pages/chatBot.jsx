import React from 'react'
import Sidebar from '../features/Sidebar'
import Navbar from '../features/OtherNav'
import ChatModal from '../features/chatBot'

const ChatBotPage = () => {
  return (
	<div>
		<Sidebar />
		<Navbar/>
		<ChatModal/>
	</div>
  )
}

export default ChatBotPage