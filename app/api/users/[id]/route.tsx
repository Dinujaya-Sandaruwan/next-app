import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate the request body
  const body = await request.json();
  //  If invalid, return an error response 400
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Fetch the user with the given ID
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  //  If not found, return an error response 404
  if (!user) {
    console.log(params.id);
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // If the user with the given email already exists, return an error response 400
  if (user.email === body.email) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Update the user with the given ID
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { name: body.name, email: body.email },
  });
  // Return the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch user from DB
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // If not found return 404
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  // Delete the user
  await prisma.user.delete({ where: { id: parseInt(params.id) } });

  // Return 200

  return NextResponse.json({});
}
