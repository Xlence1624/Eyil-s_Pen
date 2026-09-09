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