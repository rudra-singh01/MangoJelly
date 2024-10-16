"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const [book, setBook] = useState({
    bookName: '',
    authorName: '',
    yearOfPublication: 0,
    price: 0,
    discount: 0,
    numberOfPages: 0,
    condition: '',
    description: ''
  });

  const onCreated = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/comic/create', book);
      console.log("Creation successful");
      router.push("/");
    } catch (error) {
      console.error("Failed to create book", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dadada]">
      <div className="container max-w-md mx-auto p-8 bg-[#dedede] shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-zinc-700">Create a book</h2>
        <form className="space-y-4" onSubmit={onCreated}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookName">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name='bookName'
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your book name"
              required
              onChange={(e) => setBook({ ...book, bookName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="authorName">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name='authorName'
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter author name"
              required
              onChange={(e) => setBook({ ...book, authorName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearOfPublication">
              Year of Publication
            </label>
            <input
              type="number"
              id="yearOfPublication"
              name='yearOfPublication'
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter year of publication"
              required
              onChange={(e) => setBook({ ...book, yearOfPublication: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name='price'
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter price"
              required
              onChange={(e) => setBook({ ...book, price: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discount">
              Discount
            </label>
            <input
              type="number"
              id="discount"
              name='discount'
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter discount"
              onChange={(e) => setBook({ ...book, discount: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPages">
              Number of Pages
            </label>
            <input
              type="number"
              id="numberOfPages"
              name='numberOfPages'
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter number of pages"
              required
              onChange={(e) => setBook({ ...book, numberOfPages: parseInt(e.target.value) })}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condition">
              Condition
            </label>
            <select
              id="condition"
              name="condition"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
              onChange={(e) => setBook({ ...book, condition: e.target.value })}
            >
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
              placeholder="Enter your book description"
              rows={4}
              required
              onChange={(e) => setBook({ ...book, description: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
