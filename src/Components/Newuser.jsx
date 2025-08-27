import React, { useState } from "react";
import Data from "./Data";


const Newuser = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    contact: "",
    email: "",
    gender: "",
    role: "",
    image: null,
  });
  const [users, setUsers] = useState([]); 

    const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // for file inputs
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.userName ||
      !formData.password ||
      !formData.contact ||
      !formData.email ||
      !formData.gender ||
      !formData.role
    ) {
      alert("Please fill all required fields");
      return;
    }

     setUsers([...users, formData]); // add new user to list
    setFormData({
      title: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      contact: "",
      email: "",
      gender: "",
      role: "",
      image: null,
    }); // reset form
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Form (1/3 width) */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-bold mb-6">Add New User Details</h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* User Title */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              User Title <span className="text-red-500">*</span>
            </label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-2 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value="">Select</option>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
              <option>Dr.</option>
              <option>Prof.</option>
              <option>Engr.</option>
              <option>Er.</option>
            </select>
          </div>

          {/* First Name */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Username */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="userName"
              className="text-sm font-medium text-gray-700"
            >
              User Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              User Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="contact"
              className="text-sm font-medium text-gray-700"
            >
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex.abc@gmail.com"
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="gender"
              className="text-sm font-medium text-gray-700"
            >
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            > 
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Role */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="role" className="text-sm font-medium text-gray-700">
              Role Name <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="col-span-2 border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            > 
              <option value="">Select</option>
              <option>SDE1</option>
              <option>QA</option>
              <option>Supervisor</option>
              <option>Frontend Eng.</option>
              <option>Manager</option>
            </select>
          </div>

          {/* User Image */}
          <div className="grid grid-cols-3 items-center gap-4">
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700"
            >
              User Image <span className="text-red-500">*</span>
            </label>
            <div className="col-span-2">
              <input type="file" id="image" name="image" className="w-full" accept="image/*"
              onChange={handleChange} />
              <p className="text-xs text-red-500 mt-1">
                (Please choose an image size that is smaller than 1MB)
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
                onClick={() =>
                setFormData({
                  title: "",
                  firstName: "",
                  lastName: "",
                  userName: "",
                  password: "",
                  contact: "",
                  email: "",
                  gender: "",
                  role: "",
                  image: null,
                })
              }
              className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Table (2/3 width) */}
      <div className="w-2/3 p-6">
        <Data users={users} />
      </div>
    </div>
  );
};

export default Newuser;
