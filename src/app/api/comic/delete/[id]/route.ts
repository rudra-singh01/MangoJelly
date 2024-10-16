import { InternDB } from "@/db/dbConfig";
import Book from "@/models/Comic-Model";
import { NextRequest, NextResponse } from "next/server";

// Ensure database connection
InternDB();

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Delete the todo item based on the id
    const deletedTodo = await Book.findByIdAndDelete(params.id);

    // If no todo item found, return a 404 error
    if (!deletedTodo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    // Success response
    return NextResponse.json({
      message: "Todo deleted successfully",
      success: true,
      deletedTodo,
    });
  } catch (error) {
    // Error response
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
