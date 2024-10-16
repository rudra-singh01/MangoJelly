import React from 'react'
interface BookItemProps {
    bookName: string;
}

const BooksItems = ({ bookName }: BookItemProps) => {
    return (
        <div
          className="p-4 mb-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
        >
          <h3 className="text-lg font-bold">{bookName}</h3>
        </div>
      );
}

export default BooksItems