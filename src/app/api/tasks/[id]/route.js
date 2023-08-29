import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json(task);
}

export async function PUT(request, { params }) {

  const data = await request.json();

  await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    data: data
  })


  return NextResponse.json("Updating task" + params.id);
}

export async function DELETE(request, { params }) {
  try {

    await prisma.task.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json("Deleting task" + params.id);
  
  } catch (error) {
  
    return NextResponse.json(error);
  
  }
}
