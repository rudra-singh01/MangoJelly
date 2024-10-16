import { InternDB } from "@/db/dbConfig";
import Book from "@/models/Comic-Model";
import { NextRequest, NextResponse } from "next/server";
 InternDB()

 export async function GET(req: NextRequest) {
    try {
      const BookDetail = await Book.find();
      return NextResponse.json({ BookDetail });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }