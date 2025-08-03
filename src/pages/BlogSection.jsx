import React, { useState } from "react";
import { ChevronDown, Calendar, User, ExternalLink } from "lucide-react";

const allBlogs = [
  {
    title: "How React 19 is Redefining Frontend Development",
    excerpt:
      "React 19 introduces new features like React Compiler and offscreen rendering. Learn how they impact modern web apps.",
    image:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2024/03/Group-27.png",
    author: "LogRocket Blog",
    date: "March 27, 2024",
    link: "https://www.freecodecamp.org/news/new-react-19-features/",
    category: "React",
  },
  {
    title: "Understanding Design Systems with Material UI",
    excerpt:
      "A practical guide to building consistent, scalable design systems using Material UI's components and theming.",
    image:
      "https://mui.com/static/logo.png",
    author: "Material UI Docs",
    date: "April 10, 2024",
    link: "https://mui.com/material-ui/getting-started/overview/",
    category: "Design",
  },
  {
    title: "10 AI Tools That Will Transform Your Workflow in 2025",
    excerpt:
      "Discover powerful AI tools — from text summarizers to image generators — to boost your productivity.",
    image:
      "https://images.ctfassets.net/lzny33ho1g45/6VcDGWbQfWElVwAiMWLk9c/54a88cca295511333240c2919fc3f084/best-ai-productivity.jpg?fm=avif&q=31&fit=thumb&w=1520&h=760",
    author: "Medium AI Insights",
    date: "June 5, 2025",
    link: "https://zapier.com/blog/best-ai-productivity-tools/",
    category: "AI",
  },
  // Additional blogs that will load when "Load More" is clicked
  {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn best practices for creating robust, scalable REST APIs using Node.js, Express, and modern development patterns.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
    author: "Dev.to Community",
    date: "July 15, 2024",
    link: "#",
    category: "Backend",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which?",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases for modern web layouts.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center",
    author: "CSS Tricks",
    date: "August 2, 2024",
    link: "#",
    category: "CSS",
  },
  {
    title: "The Future of Web Development: Trends for 2025",
    excerpt:
      "Explore upcoming web development trends including WebAssembly, Progressive Web Apps, and the evolution of JavaScript frameworks.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&crop=center",
    author: "TechCrunch",
    date: "September 12, 2024",
    link: "#",
    category: "Trends",
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Deep dive into React performance optimization with memoization, lazy loading, code splitting, and profiling techniques.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center",
    author: "React Docs",
    date: "October 5, 2024",
    link: "#",
    category: "React",
  },
  {
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Get started with TypeScript and learn how it can improve your JavaScript development experience with static typing.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop&crop=center",
    author: "TypeScript Team",
    date: "November 18, 2024",
    link: "#",
    category: "TypeScript",
  }
];

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3); // Initially show 3 blogs
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleBlogs(prev => Math.min(prev + 3, allBlogs.length));
      setIsLoading(false);
    }, 800);
  };

  const displayedBlogs = allBlogs.slice(0, visibleBlogs);
  const hasMoreBlogs = visibleBlogs < allBlogs.length;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Latest Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span> Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tutorials, and insights from our team of experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group/link"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreBlogs && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                <>
                  <span>Load More Articles</span>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                </>
              )}
            </button>
            
            {/* Blog counter */}
            <p className="text-gray-500 text-sm mt-4">
              Showing {visibleBlogs} of {allBlogs.length} articles
            </p>
          </div>
        )}

        {/* All blogs loaded message */}
        {!hasMoreBlogs && visibleBlogs > 3 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              All articles loaded
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;