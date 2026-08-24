const categories = [
  {
    id: "faith",
    icon: "✦",
    name: "Faith",
    description:
      "Thoughts on God, purpose and everything eternal.",
  },

  {
    id: "relationships",
    icon: "♡",
    name: "Relationships",
    description:
      "Love, marriage, friendship and the people in between.",
  },

  {
    id: "lifestyle",
    icon: "○",
    name: "Lifestyle",
    description:
      "Living well, intentionally and with meaning.",
  },

  {
    id: "work",
    icon: "□",
    name: "Work",
    description:
      "Purpose, career, productivity and making impact.",
  },

  {
    id: "money",
    icon: "↗",
    name: "Money",
    description:
      "Wisdom for your money and your future.",
  },

  {
    id: "perspectives",
    icon: "◇",
    name: "Perspectives",
    description:
      "Everything else that shapes how we see life.",
  },
];

export default function Categories() {
  return (
    <section className="categories">

      <div className="container">

        <div className="eyebrow">
          Explore eyilzpen
        </div>

        <div className="category-grid">

          {categories.map((category) => (
            <a
              href={`#${category.id}`}
              className="category"
              key={category.id}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>
                {category.name}
              </h3>

              <p>
                {category.description}
              </p>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}