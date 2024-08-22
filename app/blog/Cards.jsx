// blog/Cards.jsx
import React from "react";
import Link from "next/link";

const BlogCard = ({ title, date, slug }) => (
  <Link href={`/blog/${slug}`}>
    <div className="bg-[#191a1c] rounded-lg shadow-md p-6 max-w-sm hover:shadow-lg transition-shadow cursor-pointer">
      <h2 className="text-xl font-bold mb-4 text-navy-blue">{title}</h2>
      <div className="flex items-center">
        <span className="ml-auto text-gray-500">{date}</span>
      </div>
    </div>
  </Link>
);

const Cards = () => {
  const blogs = [
    {
      title: "Machine Learning: A Data Science Process Perspectives",
      date: "June 17, 2024",
      slug: "machine-learning-perspectives",
    },
    {
      title: "Causes and Inner workings of the SARS-CoV-2",
      date: "June 17, 2024",
      slug: "sars-cov-2-inner-workings",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          date={blog.date}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};

export default Cards;
