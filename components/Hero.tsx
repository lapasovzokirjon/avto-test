import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container heroGrid">
        <div>
          <span className="badge">Yangi guruhga oxirgi joylar qoldi
          <h1>Darslarimiz sizga ma’qul kelmasa — pulingizni qaytaramiz
          <p className="lead">
            BEKZOD PRAVA kafolatlangan prava nazariy imtihonga tayyorlov kursi.
          </p>

          <div className="heroActions">
            <a href="#contact" className="primaryBtn">
              Mutaxassiadan maslahat olish
            </a>
            <a href="#about" className="secondaryBtn">
              Batafsil ko'rishs
            </a>
          </div>

          <div className="heroCards">
            <div className="miniCard">
              <strong>Express kurslar</strong>
              <span>Kunduzgi va kechgi guruhlar
            </div>
            <div className="miniCard">
              <strong>Avto maktab guvohnomasi uchun kurslar/strong>
              <span>Moslashuvchan vaqtda o'qish!
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroImageCard">
            <Image
              src="/hero-driving.svg"
              alt="Avto maktab o'quvchilari va mashina"
              width={620}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
