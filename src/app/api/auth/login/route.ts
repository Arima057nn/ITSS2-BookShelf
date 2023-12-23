import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 30; // days;

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  if (email !== "user" || password !== "user") {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  // Always check this
  const secret = "MY_TOKEN_SECRET" || "";

  const token = sign(
    {
      email,
      password,
    },
    secret,
    {
      expiresIn: MAX_AGE,
    }
  );

  const seralized = serialize("OurSiteJWT", token, {
    httpOnly: true,
    secure: "development" === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  const response = {
    message: "Authenticated!",
    role: 2,
    token: token,
    email: email,
    userId: 123456,
    name: "Arima",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": seralized },
  });
}
