import { Blog_data } from "../../Data/data";
const blogs = Blog_data;
export const Blogs = () => {
  return (
    <div className="space-y-12 mt-12 mb-12 w-11/12 mx-auto">
      <h1 className="text-5xl font-semibold text-primary">Trending blogs </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog,i)=> (
        <div
          key={i}
          className=" p-6 shadow-md hover:shadow-2xl transition-shadow  rounded-lg  duration-300 bg-white"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-600 mb-2">
             By {blog.author} on {new Date(blog.date).toLocaleDateString()}
          </p>
          <p className="text-gray-800 mb-4">{blog.summary}</p>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {blog.category}
          </span>
        </div>
      ))}

      </div>
    </div>
  );
};
