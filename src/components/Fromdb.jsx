// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Fromdb({ post }) {
//   const navigate = useNavigate();
//   const {title, content, image, author, date, _id, category, readTime} = post
//   // If the article prop hasn't loaded yet, prevent a crash
//   if (!post) return null;

//   return (
//     <article
//       className="article-card cursor-pointer"
//       onClick={() => navigate(`/post/${post._id}`)}
//     >
//       <div className="card-image">
//          <img src={image} alt={title || "Article Image"} />
//       </div>

//       <div className="card-body">
//         <span className="eyebrow">
//           {category}
//         </span>

//         <h3>{title}</h3>
            
     
//         <p className="mb-3 text-xs text-gray-500" >{content.slice(0, 100)}</p> 
    

//         <div className="card-footer">
//           <span>{readTime}</span>
//           <span className="arrow">→</span>
//         </div>
//       </div>
//     </article>
//   );
// }
 


import React from "react";
import { useNavigate } from "react-router-dom";

export default function Fromdb({ post }) {
  const navigate = useNavigate();

  // Prevent crash if post hasn't loaded yet
  if (!post) return null;

  const {
    title,
    content,
    image,
    category,
    readTime,
    _id,
  } = post;

  return (
    <article
      onClick={() => navigate(`/post/${_id}`)}
      className="cursor-pointe article-card"
    >
      <div className="card-image">
  <img
        src={image}
        alt={title}
        className="w-full object-top"
      />
      </div>
    <div className="card-body">
 <span className="eyebrow">
        {category}
      </span>
  <h3>
        {title}
      </h3>
       <p className="mb-3 text-xs text-gray-500">
        {content?.slice(0, 100)}...
      </p>
   
<div className="card-footer">
  <span>{readTime} minutes</span>
    <span className="arrow">
        →
      </span>
</div>
     

   </div>  

     

  
    </article>
  );
}

