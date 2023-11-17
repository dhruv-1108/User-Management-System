import React, { useState } from 'react';
import Modal from 'react-modal';
import UserInfo from './components/UserInfo'
import AccountCreate from './components/accountCreate';

Modal.setAppElement('#root');

const App = () => {
  const [activeTab, setActiveTab] = useState('userDetails');
  const [users, setUsers] = useState([
    { id: 1, username: 'Dhruv', email: 'dhruv@gmail.com', phone: '7889238199', creationDate: '2023-11-15' },
    { id: 2, username: 'Aggarwal', email: 'aggarwaldhurv@gmail.com', phone: '9876482891', creationDate: '2022-06-11' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAccountCreation = (newUser) => {
    const newUserDetails = {
      id: users.length + 1,
      username: newUser.username,
      email: newUser.email, 
      phone: newUser.phone,
      creationDate: new Date().toISOString().split('T')[0],
    };

    setUsers((prevUsers) => [...prevUsers, newUserDetails]);
    setActiveTab('userDetails');
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-red-200">
      <div className="max-w-3xl w-full bg-white rounded-md shadow-md overflow-hidden">
        <div className="flex bg-gray-200">
          <button
            className={`py-2 px-4 text-white font-bold ${activeTab === 'userDetails' ? 'bg-red-500 border-b-2 border-red-950' : 'bg-red-700'}`}
            onClick={() => setActiveTab('userDetails')}
          >
            User Details
          </button>
          <button
            className={`py-2 px-4 text-white font-bold ${activeTab === 'accountCreation' ? 'bg-red-400 border-b-2 border-red-700' : 'bg-red-950'}`}
            onClick={() => setActiveTab('accountCreation')}
          >
            Account Creation
          </button>
        </div>

        <div className="p-4">
          {activeTab === 'userDetails' && <UserInfo users={users} onUserClick={handleUserClick} />}
          {activeTab === 'accountCreation' && <AccountCreate onCreateAccount={handleAccountCreation} />}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="Modal flex flex-col items-center justify-center min-h-screen text-white font-medium text-xl bg-slate-700">
        {selectedUser && (
          <div>
            <h2 className = 'text-center mb-3 text-2xl text-red-500'>User Report</h2>
            <p>ID: {selectedUser.id}</p>
            <p>Username: {selectedUser.username}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Creation Date: {selectedUser.creationDate}</p>
            <button onClick={closeModal} className = 'bg-red-500 p-2 rounded-lg ml-20 mt-10'>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
