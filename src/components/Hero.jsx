export default function Hero() {
  return (
    <section className="hero">

      <div className="container">

        <div className="hero-grid">

          <div className="hero-copy">

            <span className="eyebrow">
              A Thought on Life
            </span>

            <h1>
              We Become What We Repeatedly Choose
            </h1>

            <div className="gold-line" />

            <p>
              The life we want is often built quietly —
              in the choices nobody sees, the conversations
              we have, and the things we choose to do again
              and again.
            </p>

            <a
              href="/articles/we-become-what-we-repeatedly-choose"
              className="btn btn-primary"
            >
              Read the essay <span>→</span>
            </a>

          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
              alt="Coffee beside a quiet window"
            />
          </div>

        </div>

      </div>

    </section>
  );
}