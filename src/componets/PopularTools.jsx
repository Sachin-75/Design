import React from 'react';
import { MdMediation } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlineArticle } from "react-icons/md";

const PopularTools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fdf1e8] to-[#c4c9e8] p-8 flex flex-col items-center mt-[180px] sm:mt-[560px] lg:mt-[560px]">
      
      <h2 className="text-4xl md:text-5xl font-bold text-[#252b48] text-center mt-10">
        Most Popular Tools
      </h2>
      <p className="text-lg md:text-xl text-[#606f87] text-center mt-4 mb-10">
        These are the most popular tools and a good place to start. <br /> Give them a try!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        
        {[
          { title: 'Article Generator', description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.', icon: <MdOutlineArticle/>, color: 'text-green-600', bg: 'bg-green-100' },
          { title: 'Blog Post Writer', description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.', icon: <TbBrandBlogger/>,  color: 'text-red-500', bg: 'bg-red-100'},
          { title: 'Content Rewriter', description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.', icon: <TfiWrite/>, color: 'text-blue-500', bg: 'bg-blue-100'  },
          { title: 'Image Generator', description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.', icon: <CiImageOn/>, color: 'text-yellow-700', bg: 'bg-yellow-100'},
          { title: 'Product Descriptions', description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.', icon: <MdProductionQuantityLimits />, color: 'text-purple-700', bg: 'bg-purple-100' },
          { title: 'Social Media Post', description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.', icon: <MdMediation />, color: 'text-blue-700', bg: 'bg-blue-100' },
        ].map((tool, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4 transition-transform transform hover:scale-105">
            <span className={`text-3xl ${tool.color} ${tool.bg} p-1 rounded`}>
              {tool.icon}
            </span>
            <h3 className="text-xl font-semibold text-[#252b48]">{tool.title}</h3>
            <p className="text-[#606f87]">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTools;
