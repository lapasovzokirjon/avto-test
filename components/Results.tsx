import { stats } from "./data";

export default function Results() {
  return (
    <section className="section mutedSection" id="results">
      <div className="container">
        <div className="sectionHead">
          <div>
            <p className="sectionLabel">O'quvchilar natijasi</p>
            <h2>Raqamlar biz haqimizda gapiradi</h2>
          </div>
          <p className="sectionText maxText">
            Har bir o'quvchi uchun yondashuv, doimiy mashq va imtihonga to'g'ri
            tayyorlov — natijalarimizning asosiy sababi.
          </p>
        </div>

        <div className="statsGrid">
          {stats.map((item) => (
            <div className="statCard" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
