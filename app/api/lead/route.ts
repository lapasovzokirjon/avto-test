import { NextResponse } from "next/server";

type LeadData = {
  fullName: string;
  phone: string;
  address: string;
  age: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export async function POST(req: Request) {
  try {
    const body: LeadData = await req.json();

    const {
      fullName,
      phone,
      address,
      age,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    } = body;

    if (!fullName || !phone || !address || !age) {
      return NextResponse.json(
        { success: false, message: "Barcha maydonlarni to'ldiring." },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "TELEGRAM_BOT_TOKEN topilmadi." },
        { status: 500 }
      );
    }

    if (!chatId) {
      return NextResponse.json(
        { success: false, message: "TELEGRAM_CHAT_ID topilmadi." },
        { status: 500 }
      );
    }

    const now = new Date();

    const formattedDate = now.toLocaleDateString("uz-UZ", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const formattedTime = now.toLocaleTimeString("uz-UZ", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const text = `
🚗 Yangi lead keldi

👤 Ism familiya: ${fullName}
📞 Telefon: ${phone}
📍 Manzil: ${address}
🎂 Yoshi: ${age}

🗓 Sana: ${formattedDate}
⏰ Soat: ${formattedTime}

📊 UTM ma'lumotlari:
utm_source: ${utm_source || "-"}
utm_medium: ${utm_medium || "-"}
utm_campaign: ${utm_campaign || "-"}
utm_content: ${utm_content || "-"}
utm_term: ${utm_term || "-"}
    `.trim();

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    console.log("TELEGRAM STATUS:", telegramResponse.status);
    console.log("TELEGRAM RESPONSE:", telegramData);

    if (!telegramResponse.ok || !telegramData.ok) {
      return NextResponse.json(
        {
          success: false,
          message: telegramData?.description || "Telegramga yuborilmadi.",
          telegramStatus: telegramResponse.status,
          telegramError: telegramData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead muvaffaqiyatli yuborildi.",
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server xatoligi yuz berdi.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}