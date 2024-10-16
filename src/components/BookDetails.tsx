import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface TodoDetailsProps {
  Books?: {
    _id: string;
    bookName: string;
    authorName: string;
    yearOfPublication: number;
    price: number;
    discount: number;
    numberOfPages: number;
    condition: string;
    description: string;
  };
}

const TodoDetails = ({ Books }: TodoDetailsProps) => {
  const router = useRouter();

  const handleEditClick = () => {
    if (Books) {
      router.push(`Edit/${Books._id}`);
    }
  };

  const handleDeleteClick = async () => {
    if (Books) {
      const confirmDelete = window.confirm("Are you sure you want to delete this book?");
      if (confirmDelete) {
        try {
          const response = await axios.delete(`http://localhost:3000/api/comic/delete/${Books._id}`);
          alert("Book deleted successfully.");
          router.push("/"); // Redirect or update state as needed
        } catch (error) {
          console.error("Error deleting book:", error);
          alert("There was an error deleting the book.");
        }
      }
    }
  };

  if (!Books) {
    return (
      <div className="p-6 bg-[#a8a1a1] border border-gray-300 rounded shadow-md">
        <p className="text-black font-semibold">Select a book to view details</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="table w-full">
        <div className="table-row bg-gray-200">
          <div className="table-cell font-bold py-2 px-4">Book Name:</div>
          <div className="table-cell py-2 px-4">{Books.bookName}</div>
        </div>
        <div className="table-row">
          <div className="table-cell font-bold py-2 px-4">Author Name:</div>
          <div className="table-cell py-2 px-4">{Books.authorName}</div>
        </div>
        <div className="table-row bg-gray-200">
          <div className="table-cell font-bold py-2 px-4">Year of Publication:</div>
          <div className="table-cell py-2 px-4">{Books.yearOfPublication}</div>
        </div>
        <div className="table-row">
          <div className="table-cell font-bold py-2 px-4">Price:</div>
          <div className="table-cell py-2 px-4">{Books.price}</div>
        </div>
        <div className="table-row bg-gray-200">
          <div className="table-cell font-bold py-2 px-4">Discount:</div>
          <div className="table-cell py-2 px-4">{Books.discount}</div>
        </div>
        <div className="table-row">
          <div className="table-cell font-bold py-2 px-4">Number of Pages:</div>
          <div className="table-cell py-2 px-4">{Books.numberOfPages}</div>
        </div>
        <div className="table-row bg-gray-200">
          <div className="table-cell font-bold py-2 px-4">Condition:</div>
          <div className="table-cell py-2 px-4">{Books.condition}</div>
        </div>
        <div className="table-row">
          <div className="table-cell font-bold py-2 px-4">Description:</div>
          <div className="table-cell py-2 px-4">{Books.description}</div>
        </div>
      </div>
      <button
        onClick={handleEditClick}
        className="px-5 py-2 bg-blue-500 text-white rounded-xl mt-5"
      >
        Edit
      </button>
      <button
        onClick={() => handleDeleteClick()}
        className="px-5 py-2 mx-5 bg-red-500 text-white rounded-xl mt-5"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoDetails;
