import { reviews } from "./data";

export default function Reviews() {
  return (
    <section className="section mutedSection" id="reviews">
      <div className="container">
        <div className="sectionHead columnHead">
          <p className="sectionLabel">Sharhlar</p>
          <h2>Bitiruvchilar fikri</h2>
        </div>

        <div className="cardGrid threeCol">
          {reviews.map((review) => (
            <article className="reviewCard" key={review.name}>
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
