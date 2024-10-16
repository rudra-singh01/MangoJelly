// In /app/api/comic/edit/[id]/route.ts

import { InternDB } from "@/db/dbConfig";
import Book from "@/models/Comic-Model";
import { NextRequest, NextResponse } from "next/server";

InternDB();

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { description, bookName, authorName, yearOfPublication, price, numberOfPages, condition } = body;

    // Validate required fields
    if (!description || !bookName || !authorName || !yearOfPublication || !price || !numberOfPages || !condition) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      params.id,
      { description, bookName, authorName, yearOfPublication, price, numberOfPages, condition },
      { new: true }
    );

    if (!updatedBook) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Book updated successfully",
      success: true,
      updatedBook
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
