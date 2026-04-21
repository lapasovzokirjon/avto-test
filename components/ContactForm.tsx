"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  fullName: string;
  phone: string;
  address: string;
  age: string;
};

const initialForm: FormData = {
  fullName: "",
  phone: "",
  address: "",
  age: "",
};

const getUTMParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
  };
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setMessage("");

  const filled = Object.values(form).every((value) => value.trim().length > 0);

  if (!filled) {
    setMessage("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          data.error ||
          data.telegramError?.description ||
          "Xatolik yuz berdi"
      );
    }

    setMessage("Rahmat! So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.");
    setForm(initialForm);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Xatolik yuz berdi";
    setMessage(errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="section contactSection" id="contact">
      <div className="container contactGrid">
        <div>
          <p className="sectionLabel">Forma</p>
          <h2>Ro'yxatdan o'tish uchun ma'lumot qoldiring</h2>
          <p className="sectionText">
            Ism-familiyangiz va aloqa ma'lumotlaringizni qoldiring. Menejerimiz
            sizga kurs jadvali, narx va boshlanish sanalari haqida ma'lumot beradi.
          </p>

          <div className="contactNote">
            <strong>Bonus:</strong> Bugun ariza qoldirganlar uchun bepul dastlabki konsultatsiya.
          </div>
        </div>

        <form className="formCard" onSubmit={handleSubmit}>
          <label>
            Ism familiya
            <input
              type="text"
              name="fullName"
              placeholder="Masalan: Ali Valiyev"
              value={form.fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Telefon raqam
            <input
              type="tel"
              name="phone"
              placeholder="+998 90 123 45 67"
              value={form.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Manzil
            <textarea
              name="address"
              rows={4}
              placeholder="Tuman / shahar / mahalla"
              value={form.address}
              onChange={handleChange}
            />
          </label>

          <label>
            Yoshi
            <input
              type="number"
              name="age"
              placeholder="18"
              value={form.age}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="primaryBtn fullBtn" disabled={loading}>
            {loading ? "Yuborilmoqda..." : "Yuborish"}
          </button>

          {message ? <p className="formMessage">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}