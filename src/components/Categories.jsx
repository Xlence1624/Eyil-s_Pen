import React from 'react'


const Categories = ({ selectedCategory, setSelectedCategory }) => {




    const categories = [
  {
    id: "everything-in-between",
    icon: "◇",
    name: ' "Everything in between" ',
    description:
      "Everything else that shapes how we see life.",
  },


  {
    id: "faith",
    icon: "✦",
    name: "faith",
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
    id: "life",
    icon: "○",
    name: "Life",
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
    id: "finance",
    icon: "↗",
    name: "Finance",
    description:
      "Wisdom for your money and your future.",
  }


];
  return (
     <section className="categories">

      <div className="container">

        <div className="eyebrow">
          Explore eyilzpen
        </div>

        <div className="category-grid"    >

          {categories.map((category) => (
            <div
              href={`#${category.id}`}
              className="category"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
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

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Categories








