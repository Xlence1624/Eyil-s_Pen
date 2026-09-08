// // 


// import { useRef, useState } from "react";
// import api from "../api/axios.js";

// const Post = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     category: "",
//     published: true,
//     readTime: "",
//     date: "",
// },
//   );

//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const imageInputRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "readTime" ? Number(value) : value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//    setErrorMessage("");

//    if (!file) {
//      return;
//    }

//    if (!file.type.startsWith("image/")) {
//      setImage(null);
//      setErrorMessage("Please select an image file.");
//      e.target.value = "";
//      return;
//    }

//    if (file.size > 5 * 1024 * 1024) {
//      setImage(null);
//      setErrorMessage("Image must be 5 MB or smaller.");
//      e.target.value = "";
//      return;
//    }

//    setImage(file);
//  };

//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    setErrorMessage("");

//    if (!image) {
//      setErrorMessage("Please select a post image.");
//      return;
//    }

//    try {
//      setLoading(true);

//      const data = new FormData();

//      data.append("title", formData.title);
//      data.append("content", formData.content);
//      data.append("category", formData.category);
//      data.append("published", String(formData.published));
//      data.append("readTime", String(formData.readTime));
//      data.append("date", formData.date);

//      data.append("image", image);

//      const response = await api.post("/posts", data);

//      console.log("Post created:", response.data);

//      setFormData({
//        title: "",
//        content: "",
//        category: "",
//        published: true,
//        readTime: "",
//        date: "",
//      });

//      setImage(null);
//      if (imageInputRef.current) {
//        imageInputRef.current.value = "";
//      }

//      alert("Post created successfully!");

//    } catch (error) {
//      const message =
//        error.response?.data?.message ||
//        (error.request
//          ? "Could not reach the server. Make sure the API is running."
//          : "Failed to create post.");

//      console.error(message, error);
//      setErrorMessage(message);
//    } finally {
//      setLoading(false);
//    }
//  };


//   return (
//     <div className="py-5 flex flex-col justify-between bg-white">
//       <form
//         className="md:px-10 px-4 space-y-5 max-w-lg"
//         onSubmit={handleSubmit}
//       >

//         {/* Image */}
//         <div>
//           <p className="text-base font-medium">
//             Post Hero Image
//           </p>

//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             <label htmlFor="image">
//               <input
//                 accept="image/*"
//                 type="file"
//                 id="image"
//                 hidden
//                 ref={imageInputRef}
//                 onChange={handleImageChange}
//               />

//               <img
//                 className="max-w-24 cursor-pointer"
//                 src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
//                 alt="Upload"
//                 width={100}
//                 height={100}
//               />
//             </label>
//           </div>

//           {image && (
//             <p className="text-sm mt-2 text-gray-600">
//               {image.name}
//             </p>
//           )}

//           {errorMessage && (
//             <p className="text-sm mt-2 text-red-600" role="alert">
//               {errorMessage}
//             </p>
//           )}
//         </div>

//         {/* Title */}
//         <div className="flex flex-col gap-1 max-w-md">
//           <label
//             className="text-base font-medium"
//             htmlFor="title"
//           >
//             Post Title
//           </label>

//           <input
//             id="title"
//             name="title"
//             type="text"
//             placeholder="Type your post title"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             required
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Content */}
//         <div className="flex flex-col gap-1 max-w-md">
//           <label
//             className="text-base font-medium"
//             htmlFor="content"
//           >
//             Post Content
//           </label>

//           <textarea
//             id="content"
//             name="content"
//             rows={6}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//             placeholder="Write your post..."
//             required
//             value={formData.content}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Category */}
//         <div className="w-full flex flex-col gap-1">
//           <label
//             className="text-base font-medium"
//             htmlFor="category"
//           >
//             Category
//           </label>

//           <select
//             id="category"
//             name="category"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             required
//             value={formData.category}
//             onChange={handleChange}
//           >
//             <option value="">Select Category</option>

//             <option value="Faith">Faith</option>
//             <option value="Work">Work</option>
//             <option value="Finance">Finance</option>
//             <option value="Relationships">
//               Relationships
//             </option>
//             <option value="Life">Life</option>
//           </select>
//         </div>

//         {/* Date + Read time */}
//         <div className="flex items-center gap-5 flex-wrap">

//           {/* Date */}
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label
//               className="text-base font-medium"
//               htmlFor="date"
//             >
//               Date
//             </label>

//             <input
//               id="date"
//               name="date"
//               type="date"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               value={formData.date}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Read time */}
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label
//               className="text-base font-medium"
//               htmlFor="readTime"
//             >
//               Read time 
//             </label>

//             <input
//               id="readTime"
//               name="readTime"
//               type="number"
            
//               placeholder="5"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               value={formData.readTime}
//               onChange={handleChange}
//             />
//           </div>

//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="px-8 py-2.5 bg-[#183c32] text-white font-medium rounded disabled:opacity-50"
//         >
//           {loading ? "ADDING..." : "ADD POST"}
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Post;



import React, { useState } from "react";
import axios from "axios";

export default function Post() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
    image: "",
    author: "",
    category: "",
    date: "",
    readTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit article
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "https://herblogg.vercel.app/api/post",
        formData
      );

      console.log("Article created:", response.data);

      setMessage("Article published successfully!");

      // Clear form
      setFormData({
        title: "",
        content: "",
        description: "",
        image: "",
        author: "",
        category: "",
        date: "",
        readTime: "",
      });
    } catch (error) {
      console.error("Error creating article:", error);

      setMessage(
        error.response?.data?.message ||
          "Something went wrong while publishing the article."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-[#183c32] mb-2">
        Create New Article
      </h1>

      <p className="text-gray-600 mb-8">
        Add a new article to your blog.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* TITLE */}
        <div>
          <label className="block font-semibold mb-2">
            Article Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter article title"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />
        </div>


        {/* AUTHOR */}
        <div>
          <label className="block font-semibold mb-2">
            Author
          </label>

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />
        </div>


        {/* CATEGORY */}
        <div>
          <label className="block font-semibold mb-2">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          >
            <option value="">
              Select a category
            </option>

            <option value="Faith">
              Faith
            </option>

            <option value="Relationships">
              Relationships
            </option>

            <option value="Finance">
              Finance
            </option>

            <option value="Lifestyle">
              Lifestyle
            </option>

            <option value="Work">
              Work
            </option>

            <option value="Family">
              Family
            </option>
          </select>
        </div>


        {/* DATE */}
        <div>
          <label className="block font-semibold mb-2">
            Publication Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />
        </div>


        {/* READ TIME */}
        <div>
          <label className="block font-semibold mb-2">
            Read Time
          </label>

          <input
            type="text"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            placeholder="e.g. 5 min read"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />
        </div>


        {/* IMAGE */}
        <div>
          <label className="block font-semibold mb-2">
            Image URL
          </label>

          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />

          {/* Image preview */}
          {formData.image && (
            <div className="mt-4">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full max-h-80 object-cover rounded-lg"
              />
            </div>
          )}
        </div>


        {/* EXCERPT / DESCRIPTION */}
        <div>
          <label className="block font-semibold mb-2">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description or introduction..."
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />
        </div>


        {/* CONTENT */}
        <div>
          <label className="block font-semibold mb-2">
            Article Content
          </label>

          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write the full article here..."
            rows="15"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#183c32]"
          />
        </div>


        {/* SUCCESS / ERROR MESSAGE */}
        {message && (
          <div className="p-4 rounded-lg bg-gray-100">
            {message}
          </div>
        )}


        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#183c32] text-white px-6 py-3 rounded-lg hover:bg-[#245344] disabled:opacity-50"
        >
          {loading
            ? "Publishing..."
            : "Publish Article"}
        </button>

      </form>
    </div>
  );
}

