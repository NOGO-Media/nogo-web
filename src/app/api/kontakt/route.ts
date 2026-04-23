import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY missing");
      return Response.json(
        { error: "Serverkonfigurationen saknas" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const { namn, foretag, email, fordon, meddelande } = await request.json();

    if (!email) {
      return Response.json({ error: "E-post krävs" }, { status: 400 });
    }

    // Send notification email to the team
    await resend.emails.send({
      from: "NOGO Media <noreply@nogomedia.se>",
      to: "hugo@nogomedia.se",
      subject: `Förfrågan från ${namn || "webbsidan"}${foretag ? ` — ${foretag}` : ""}`,
      text: [
        namn && `Namn: ${namn}`,
        foretag && `Företag: ${foretag}`,
        email && `E-post: ${email}`,
        fordon && fordon !== "Välj antal" && `Antal fordon: ${fordon}`,
        meddelande && `\nMeddelande:\n${meddelande}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    // Send confirmation email to the customer using the "kontakt" template
    await resend.emails.send({
      to: email,
      template: {
        id: "8192cc7d-1b6d-4089-9e5e-663fab8d0d97",
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json(
      { error: "Kunde inte skicka meddelandet" },
      { status: 500 }
    );
  }
}
