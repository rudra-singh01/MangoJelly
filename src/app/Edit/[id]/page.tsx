"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

const EditPage = () => {
  const router = useRouter();
  const { id } = useParams();

  // Initialize state for each field
  const [description, setDescription] = useState("");
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [yearOfPublication, setYearOfPublication] = useState<number | string>("");
  const [price, setPrice] = useState<number | string>("");
  const [numberOfPages, setNumberOfPages] = useState<number | string>("");
  const [condition, setCondition] = useState("");



  // Save the changes
  // Save the changes
const handleSave = async () => {
    if (
      !description ||
      !bookName ||
      !authorName ||
      !yearOfPublication ||
      !price ||
      !numberOfPages ||
      !condition
    ) {
      console.error("All fields are required");
      return; // Prevent sending the request if any field is missing
    }
  
    try {
      await axios.put(`http://localhost:3000/api/comic/edit/${id}`, {
        description,
        bookName,
        authorName,
        yearOfPublication: Number(yearOfPublication),
        price: Number(price),
        numberOfPages: Number(numberOfPages),
        condition,
      });
      router.push("/");
    } catch (error) {
      const axiosError = error as axios.AxiosError; // Use axios instead of Axios
      console.error("Error updating book:", axiosError.response?.data); // Log the response from the server
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Book</h1>
      <div className="text-black">


        

        {/* Book Name */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Book Name</label>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Author Name */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Author Name</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Year of Publication */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Year of Publication</label>
        <input
          type="number"
          value={yearOfPublication}
          onChange={(e) => setYearOfPublication(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Price */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Number of Pages */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Number of Pages</label>
        <input
          type="number"
          value={numberOfPages}
          onChange={(e) => setNumberOfPages(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Condition */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Condition</label>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        {/* Description */}
        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full mt-6 px-5 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditPage;
