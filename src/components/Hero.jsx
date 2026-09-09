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
              
            </span>

            <h1>
          Welcome to my mind, one post at a time.
            </h1>

            <div className="gold-line" />

            <p>
           ME!!! …one who communicates better through writing and it is also my escape from anything, everything! Ah! Yes! I do ‘non-fictional fiction’, if there’s anything of sort. No one has a 100% ability to reach out to the world but then, we impact our individual spaces to the degree that we can. … reaching out to a few who in turn will reach out to others. This in mind, we are assured of a ‘close to perfect’ world. I will really appreciate feedbacks/comments.I love us all 💕💕
            </p>

            <a
             onClick={() => navigate("/everything")} 
              className="btn btn-primary cursor-pointer"
            >
            Explore blogs <span>→</span>
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