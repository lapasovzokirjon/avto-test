import { NextResponse } from "next/server";

type LeadData = {
  fullName: string;
  phone: string;
  address: string;
  age: string;
};

export async function POST(req: Request) {
  try {
    const body: LeadData = await req.json();

    const { fullName, phone, address, age } = body;

    if (!fullName || !phone || !address || !age) {
      return NextResponse.json(
        { success: false, message: "Barcha maydonlarni to'ldiring." },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegram sozlamalari topilmadi.",
        },
        { status: 500 }
      );
    }

    const text = `
<b>🚗 Yangi lead keldi</b>

<b>👤 Ism familiya:</b> ${fullName}
<b>📞 Telefon:</b> ${phone}
<b>📍 Manzil:</b> ${address}
<b>🎂 Yoshi:</b> ${age}
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
          parse_mode: "HTML",
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegramga yuborishda xatolik yuz berdi.",
          error: telegramData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead muvaffaqiyatli yuborildi.",
    });
  } catch (error) {
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