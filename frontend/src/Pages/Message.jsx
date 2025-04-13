import React, { useState } from 'react';
import { SendHorizonal, User } from 'lucide-react';
import Navbar from '../Components/Navbar';

const usersMock = [
  { id: 1, name: 'Jane UI', active: true },
  { id: 2, name: 'DevKing', active: false },
  { id: 3, name: 'Pixler', active: true },
];

const initialMessages = [
  { sender: 'them', text: 'Hey! Loved your recent post 👏' },
  { sender: 'me', text: 'Thank you so much! 😊' },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(usersMock[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: 'me', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="h-screen flex bg-yellow-200 ml-16">
      {/* Sidebar */}<Navbar/>
      <div className="w-1/4 border-r bg-yellow-50 p-4">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        {usersMock.map((user) => (
          <div
            key={user.id}
            className={`flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-100 ${
              selectedUser.id === user.id ? 'bg-blue-100' : ''
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <div className="bg-blue-200 rounded-full p-2">
              <User className="h-5 w-5 text-blue-800" />
            </div>
            <div>
              <p className="font-medium">{user.name}</p>
              <span className={`text-xs ${user.active ? 'text-green-500' : 'text-gray-400'}`}>
                {user.active ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="w-3/4 flex flex-col justify-between bg-gray-100">
        <div className="p-4 border-b flex justify-between items-center bg-white shadow">
          <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
          <span className={`text-sm ${selectedUser.active ? 'text-green-600' : 'text-gray-400'}`}>
            {selectedUser.active ? 'Active now' : 'Offline'}
          </span>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1 bg-yellow-100">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === 'me'
                  ? 'bg-blue-500 text-white self-end ml-auto'
                  : 'bg-red-200 text-gray-800 self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center p-4 border-t bg-white">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg mr-2 outline-none"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
