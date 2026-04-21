export default function About() {
  return (
    <section className="section" id="about">
      <div className="container twoCol">
        <div>
          <p className="sectionLabel">Biz haqimizda</p>
          <h2>Nega aynan bizni tanlashadi?</h2>
          <p className="sectionText">
            Bizning avto maktab nazariy bilimni yodlashga emas, tushunishga
            o'rgatadi. Amaliyotda esa o'quvchi real ko'cha sharoitida o'zini
            erkin tutishi uchun bosqichma-bosqich tizim qo'llanadi.
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
