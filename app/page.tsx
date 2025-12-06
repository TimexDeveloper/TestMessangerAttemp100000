'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  // Mock data
  const chats = [
    { id: '1', name: 'General', lastMessage: 'Hello everyone!' },
    { id: '2', name: 'Project Team', lastMessage: 'Meeting at 3 PM' },
    { id: '3', name: 'John Doe', lastMessage: 'Thanks for the help' },
  ]

  const messages = [
    { id: '1', sender: 'John', content: 'Hey there!', time: '10:30 AM' },
    { id: '2', sender: 'You', content: 'Hi John! How are you?', time: '10:32 AM' },
    { id: '3', sender: 'John', content: 'Doing great, thanks!', time: '10:33 AM' },
  ]

  return (
    <div className="flex h-screen">
      {/* Chat List Sidebar */}
      <div className="w-1/3 bg-gray-900 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-orange-500">Fox Messenger</h1>
        </div>
        <div className="overflow-y-auto h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800 ${
                selectedChat === chat.id ? 'bg-gray-800' : ''
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="font-semibold text-white">{chat.name}</div>
              <div className="text-sm text-gray-400 truncate">{chat.lastMessage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-800">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700 bg-gray-900">
              <h2 className="text-xl font-semibold text-orange-500">
                {chats.find(c => c.id === selectedChat)?.name}
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'You'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                    <div className="text-xs opacity-70 mt-1">{message.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-700 bg-gray-900">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🦊</div>
              <h3 className="text-2xl font-semibold text-orange-500 mb-2">Welcome to Fox Messenger</h3>
              <p className="text-gray-400">Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}