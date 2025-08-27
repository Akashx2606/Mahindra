import React from 'react';

const Data = ({users}) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className=" w-full max-w-6xl">
        <table className="table-auto w-full border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left border">User Title</th>
              <th className="px-4 py-2 text-left border">First Name</th>
              <th className="px-4 py-2 text-left border">Last Name</th>
              <th className="px-4 py-2 text-left border">User Name</th>
              <th className="px-4 py-2 text-left border">User Password</th>
              <th className="px-4 py-2 text-left border">Contact Number</th>
              <th className="px-4 py-2 text-left border">Email</th>
              <th className="px-4 py-2 text-left border">Gender</th>
              <th className="px-4 py-2 text-left border">Role Name</th>
              <th className="px-4 py-2 text-left border">User Image</th>
            </tr>
          </thead>

          <tbody>
            {/* Example dummy row */}
          {users.length === 0 ? (
            <tr>
              <td colSpan="10" className="text-center py-4">
                No users added yet.
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{user.title}</td>
                <td className="px-4 py-2 border">{user.firstName}</td>
                <td className="px-4 py-2 border">{user.lastName}</td>
                <td className="px-4 py-2 border">{user.userName}</td>
                <td className="px-4 py-2 border">{"*".repeat(user.password.length)}</td>
                <td className="px-4 py-2 border">{user.contact}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.gender}</td>
                <td className="px-4 py-2 border">{user.role}</td>
                <td className="px-4 py-2 border">
                  {user.image ? (
                    <img
                      src={URL.createObjectURL(user.image)}
                      alt="user"
                      className="rounded-full w-10 h-10"
                    />
                  ) : (
                    "No image"
                  )}
                </td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
