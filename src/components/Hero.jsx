import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate()
  return (
    <section className="hero">

      <div className="container">

        <div className="hero-grid">

          <div className="hero-copy">

            <span className="eyebrow">
              A thought on work ethics
            </span>

            <h1>
            Respectfully, Read The Room.
            </h1>

            <div className="gold-line" />

            <p>
             Yo!!! The ‘Gen Z’ and woke generation versus cultural orientation and application has been everywhere since yesterday. And while I’m not exactly one to jump on trendy topics, in fact, I never intended to until now. Did you ask why? So a thought just hit me, about a minute ago, at 5.32am on 21st August, 2026, and it made me rush to my notepad…
            </p>

            <a
             onClick={() => navigate(`/blog/${210}`)} 
              className="btn btn-primary cursor-pointer"
            >
              Read the essay <span>→</span>
            </a>

          </div>

          <div className="hero-image">
            <img

            src={assets.office2}
              // src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
              alt="Coffee beside a quiet window"
            />
          </div>

        </div>

      </div>

    </section>
  );
}