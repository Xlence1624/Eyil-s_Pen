import { assets } from "../assets/assets";


export default function About() {
  return (
    <section className="about">

      <div className="container">

        <div className="about-grid">

          <div className="about-copy">

            <span className="eyebrow">
               About the Writer
            </span>

            <h2>
              IyanuOluwa Temitope Araba.
            </h2>

            <div className="gold-line" />

            <p>
           I write about the things that make us human—work, life, faith, finance, relationships and ‘everything in between.’</p> <br/><p> Basically, the little everyday moments that constitute our larger life.

Mostly, I’m just observing, questioning, connecting dots, provoking thoughts and putting those thoughts somewhere—and everywhere—for you, my smart friends.

</p> <br/><p>Sometimes, the posts are serious. At other times, they’re cheeky. But they’re definitely intended to make your time here worthwhile; leaving you with a busy mind and thoughts to go back to.




            </p>
          <br/>  <p>Welcome to my mind, reflected in my words.</p>

            <span className="signature">
             Eyilzpen
            </span>

          </div>

          <div className="about-image">

            <img
              src={assets.Iyanu}
              alt="Writer sitting at a desk"
              loading="lazy" 
              className=" sm:h-full w-100 object-fit object-top"
            />

          </div>

        </div>

      </div>

    </section>
  );
}