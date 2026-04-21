import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container heroGrid">
        <div>
          <span className="badge">Yangi guruhga qabul boshlandi</span>
          <h1>Haydovchilikni ishonch bilan o'rganing</h1>
          <p className="lead">
            TurboDrive Avto Maktab sizga nazariya, amaliyot va imtihonga
            tayyorlovni bitta tizimda beradi. Maqsadimiz — sizni faqat guvohnoma
            olishgacha emas, real hayotda xavfsiz haydashgacha olib chiqish.
          </p>

          <div className="heroActions">
            <a href="#contact" className="primaryBtn">
              Ariza qoldirish
            </a>
            <a href="#about" className="secondaryBtn">
              Batafsil ko'rish
            </a>
          </div>

          <div className="heroCards">
            <div className="miniCard">
              <strong>Avtomat / Mexanika</strong>
              <span>Ikkala format mavjud</span>
            </div>
            <div className="miniCard">
              <strong>Ertalab / Kechqurun</strong>
              <span>Moslashuvchan jadval</span>
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
