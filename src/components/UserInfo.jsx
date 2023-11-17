import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UserDetails = ({ users, onUserClick }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">User Details</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300">ID</th>
            <th className="border border-gray-300">Username</th>
            <th className="border border-gray-300">Email</th>
            <th className="border border-gray-300">Phone</th>
            <th className="border border-gray-300">Creation Date</th>
            <th className="border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300">{user.id}</td>
              <td className="border border-gray-300">{user.username}</td>
              <td className="border border-gray-300">{user.email}</td>
              <td className="border border-gray-300">{user.phone}</td>
              <td className="border border-gray-300">{user.creationDate}</td>
              <td className="border border-gray-300">
                <button onClick={() => onUserClick(user)} className="mr-2 text-blue-500">
                  Generate Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for user report */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="Modal">
        {selectedUser && (
          <div>
            <h2>User Report</h2>
            <p>ID: {selectedUser.id}</p>
            <p>Username: {selectedUser.username}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Creation Date: {selectedUser.creationDate}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserDetails;
