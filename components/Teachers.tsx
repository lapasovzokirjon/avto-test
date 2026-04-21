import { teachers } from "./data";

export default function Teachers() {
  return (
    <section className="section" id="teachers">
      <div className="container">
        <div className="sectionHead columnHead">
          <p className="sectionLabel">O'qituvchilar</p>
          <h2>Tajribali va sabrli murabbiylar</h2>
          <p className="sectionText maxText centerText">
            Har bir instruktorimiz o'quvchining darajasi va qo'rquviga qarab
            individual metodika qo'llaydi.
          </p>
        </div>

        <div className="cardGrid threeCol">
          {teachers.map((teacher) => (
            <article className="infoCard" key={teacher.name}>
              <div className="avatar">{teacher.name.slice(0, 1)}</div>
              <h3>{teacher.name}</h3>
              <strong>{teacher.role}</strong>
              <span>{teacher.experience}</span>
              <p>{teacher.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
