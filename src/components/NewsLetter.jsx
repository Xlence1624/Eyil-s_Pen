// import React from 'react'

// const NewsLetter = () => {
//   return (
//     <div  className="flex flex-col items-center justify-center text-center space-y-2 my-32 mx-5">
//       <h1 className="md:text-4xl text-2xl font-semibold" >Subscribe to My Newsletter</h1>
//       <p className="md:text-lg text-gray-500/70 pb-8">Subscribe to get the latest blog posts delivered straight to your inbox.</p>
//       <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
//         <input type="text" placeholder="Enter your email" required className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"/>
//         <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none">Subscribe</button>
//       </form>
//     </div>
//   )
// }

// export default NewsLetter
import { useState } from "react";

export default function Newsletter() {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="newsletter">

      <div className="eyebrow">
        The Newsletter
      </div>

      <h2>
        For thoughts worth sitting with.
      </h2>

      <p>
        Reflections, lessons, stories and resources —
        sent occasionally and intentionally.
      </p>

      {submitted ? (

        <div className="newsletter-success">
          You're on the list. See you in your inbox.
        </div>

      ) : (

        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required

            className="text-black"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      )}

    </section>
  );
}