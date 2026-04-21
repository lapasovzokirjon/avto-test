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

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filled = Object.values(form).every((value) => value.trim().length > 0);

    if (!filled) {
      setSuccess("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    setSuccess("Rahmat! So'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.");
    setForm(initialForm);
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

          <button type="submit" className="primaryBtn fullBtn">
            Yuborish
          </button>

          {success ? <p className="formMessage">{success}</p> : null}
        </form>
      </div>
    </section>
  );
}
