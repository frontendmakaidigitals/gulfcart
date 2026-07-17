import { Resend } from "resend";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, brandName, storeUrl, monthlyRevenue, localCurrency } = body;

    if (!name || !email || !brandName || !storeUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Gulfcart <info@spok.digital>", 
      to: ["mystylesouk@gmail.com"],
      subject: `New Demo Request: ${brandName}`,
      html: `
        <h2>New Demo Call Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Brand:</strong> ${brandName}</p>
        <p><strong>Store URL:</strong> ${storeUrl}</p>
        <p><strong>Monthly Revenue:</strong> ${monthlyRevenue}</p>
        <p><strong>Local Currency:</strong> ${localCurrency}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
