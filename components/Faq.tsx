import { faqs } from "./data";

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faqWrap">
        <div>
          <p className="sectionLabel">Savol-javob</p>
          <h2>Ko'p beriladigan savollar</h2>
          <p className="sectionText">
            Ro'yxatdan oldin o'quvchilarimiz eng ko'p so'raydigan savollarga qisqa javoblar.
          </p>
        </div>

        <div className="faqList">
          {faqs.map((faq) => (
            <details className="faqItem" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
