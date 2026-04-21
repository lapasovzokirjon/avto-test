export default function About() {
  return (
    <section className="section" id="about">
      <div className="container twoCol">
        <div>
          <p className="sectionLabel">Biz haqimizda</p>
          <h2>Nega aynan bizni tanlashingiz kerak?</h2>
          <p className="sectionText">
            Bizning avto maktabimizda 12 yillik tajribaga ega bo'lgan yo'l harakati qoidalari mutaxassislar dars berishadi, shu vaqtgacha 90% o'quvchilarimiz prava nazariy imtihondan o'tishmoqda. Darslarimiz sizga ma'qul kelmasa pulingizni 100% qaytarib beramiz!
          </p>
          <p className="sectionText">
            Kurs davomida ichki testlar, individual murabbiy yondashuvi va
            imtihon oldi tayyorlov mavjud. O'quvchilarimiz orasida birinchi
            urinishdayoq imtihondan o'tish ko'rsatkichi yuqori.
          </p>
        </div>

        <div className="featureList">
          <div className="featureItem">
            <h3>Kuchli nazariya</h3>
            <p>Testlar, video tushuntirishlar va murakkab mavzularni sodda metodika.</p>
          </div>
          <div className="featureItem">
            <h3>Real amaliyot</h3>
            <p>Shahar ichida, parkovka va tirbandlikda haqiqiy mashg'ulotlar.</p>
          </div>
          <div className="featureItem">
            <h3>Moslashuvchan jadval</h3>
            <p>Ishlaydigan va o'qiydiganlar uchun qulay guruhlar mavjud.</p>
          </div>
          <div className="featureItem">
            <h3>Natijaga fokus</h3>
            <p>Bizning maqsad — sizni imtihondan va real yo'ldan o'tkaza olish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
