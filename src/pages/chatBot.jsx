import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/OtherNav'
import ChatModal from '../components/chatBot'

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