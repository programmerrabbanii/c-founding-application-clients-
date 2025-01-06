import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "What is Crowdfunding?",
      content:
        "Crowdfunding is a way to raise money for different projects, ideas, or causes by inviting others to contribute financially. It empowers people to bring their dreams to reality.",
      author: "John Doe",
      date: "January 5, 2025",
    },
    {
      id: 2,
      title: "Creative Ideas to Fund",
      content:
        "From making films to launching innovative apps, crowdfunding provides a platform to support creativity and innovation. Explore how creators can turn their ideas into reality.",
      author: "Jane Smith",
      date: "January 3, 2025",
    },
    {
      id: 3,
      title: "Crowdfunding for Startups",
      content:
        "Startups can use crowdfunding to launch new products, attract investors, and create a strong community of early supporters.",
      author: "Mike Brown",
      date: "January 1, 2025",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Blogs</h2>
        <p className="mt-4 text-gray-600">
          Learn more about crowdfunding, creative ideas, and how to make your projects successful.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
            <p className="mt-4 text-gray-600">{blog.content}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>By {blog.author}</span>
              <span>{blog.date}</span>
            </div>
            <button className="mt-4 py-2 px-4 text-white rounded-md bg-[#00D9E9]">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
