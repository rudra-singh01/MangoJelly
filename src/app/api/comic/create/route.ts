import { InternDB } from "@/db/dbConfig";
import Book from '@/models/Comic-Model'
import { NextRequest ,NextResponse } from "next/server";
InternDB()

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const { 
            bookName, 
            authorName, 
            yearOfPublication, 
            price, 
            discount, 
            numberOfPages, 
            condition, 
            description 
          } = reqbody;

        const NewelyCreated = new Book({
            bookName, 
            authorName, 
            yearOfPublication, 
            price, 
            discount, 
            numberOfPages, 
            condition, 
            description 
        })
        const SavedNewelyCreated = await NewelyCreated.save()
        return NextResponse.json({message:"Book created successfully",
            success:true,
            SavedNewelyCreated
        })
    } catch (error: unknown) { // Specify the type of error
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'; 
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
      