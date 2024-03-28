// app/api/send-email/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  // Render the WelcomeTemplate component to a string
  const htmlContent = ReactDOMServer.renderToString(
    <WelcomeTemplate name="Dinujaya" />
  );

  await resend.emails.send({
    from: "info.dinujaya.me",
    to: "itkindom.dhomes@gmail.com",
    subject: "Welcome to our platform",
    html: htmlContent, // Use the rendered HTML string here
  });

  return NextResponse.json({});
}
