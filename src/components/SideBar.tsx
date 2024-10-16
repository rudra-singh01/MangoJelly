"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BooksItems from "./BooksItems";
import BookDetails from "./BookDetails";

interface Books {
  id: string;
  bookName: string;
  authorName: string;
  yearOfPublication: number;
  price: number;
  discount: number;
  numberOfPages: number;
  condition: string;
  description: string;
}

function Sidebar() {
  const router = useRouter();
  const [Books, setBooks] = useState<Books[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<Books | null>(null);

  const handleBooksClick = (Books: Books) => {
    setSelectedBooks(Books);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/comic/details"); // Adjust the endpoint
        const data = await response.json();
        
        console.log(data);  // Check the structure of your data
        
        if (data && data.BookDetail) { // Assuming data contains a 'BookDetail' field
          setBooks(data.BookDetail);   // Set the books into the state
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching Books:", error);
      }
    };
  
    fetchBooks();
  }, []);

  const moveTo = () => {
    router.push("/makeBook");
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 p-4 border-b lg:border-b-0 lg:border-r border-gray-300 bg-[#dadada] flex flex-col">
        <div className="flex flex-col gap-4 mb-5 relative">
          <div
            onClick={moveTo}
            className="img w-12 h-12 bg-black cursor-pointer rounded-xl overflow-hidden relative"
          >
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFuNIOhMfp43q6xKKmhIVyDefS-VATWBWBA&s"
              alt="Add Books"
            />
            <div className="absolute bottom-[-8%] left-0 w-full bg-black bg-opacity-50 flex items-center justify-center text-white transition-opacity duration-300 ease-in-out">
              <p className="opacity-0 hover:opacity-100">Create</p>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-700">Book Management</h4>
        </div>
        <div className="flex-grow overflow-y-auto">
          {Books.length > 0 ? (
            <ul className="space-y-2 text-black">
              {Books.map((Books: Books, key) => (
                <li onClick={() => handleBooksClick(Books)} key={key}>
                  <div className="flex items-center gap-2">
                    <BooksItems bookName={Books.bookName}/>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-700">No books available</p>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-center text-slate-800 lg:flex-1 p-4 overflow-y-auto">
        <BookDetails Books={selectedBooks}/>
      </div>
    </div>
  );
}

export default Sidebar;