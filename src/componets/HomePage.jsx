import React from 'react';
import Navbar from './Navbar';
import Image1 from "../Images/Image1.png"

const HomePage = () => {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-[#fdf1e8] to-[#c4c9e8]">
    
        <Navbar />

        <section className="flex flex-col items-center text-center mt-16 px-4 md:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#252b48]">
            Effortlessly Create High-Quality Articles with Our AI Article Generator
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#606f87] mt-4 max-w-3xl">
            AI has the potential to revolutionize the way we live and work, from improving healthcare and transportation to enhancing the way.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-8">
            <button className="bg-[#5d38c0] text-white py-2 md:py-3 px-6 md:px-8 rounded-full hover:opacity-90">Get Started</button>
            <button className="border border-[#5d38c0] py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-[#e9ebf6]">Explore</button>
          </div>
       
          <div className="hidden md:block absolute -bottom-[30px] -right-[-250px] md:w-[150px] md:h-[150px] w-[150px] h-[150px] bg-blue-500 rounded-full opacity-50"></div>
        </section>


        <section className="relative flex justify-center mt-16 md:mt-24">
       
          <div className="hidden md:block absolute -top-20 -left-[-100px] md:w-[150px] md:h-[150px] w-[150px] h-[150px] bg-blue-500 rounded-full opacity-50"></div>


          <img
            src={Image1}
            alt="Main Content"
            className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl"
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
























// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="w-full h-screen bg-gradient-to-b from-[#fdf1e8] to-[#e8eaf6]">
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
//         <div className="text-3xl font-bold text-[#5238cf]">uiAid</div>
//         <nav className="flex space-x-8 text-lg">
//           <a href="#about" className="hover:text-[#5238cf]">About</a>
//           <a href="#work" className="hover:text-[#5238cf]">Work</a>
//           <a href="#research" className="hover:text-[#5238cf]">Research</a>
//         </nav>
//         <button className="border border-[#5238cf] rounded-full py-2 px-6 hover:bg-[#f0f1f6]">Login</button>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center text-center mt-20">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#252b48]">
//           Effortlessly Create High-Quality Articles with Our AI Article Generator
//         </h1>
//         <p className="text-lg md:text-2xl text-[#606f87] mt-4 max-w-3xl">
//           AI has the potential to revolutionize the way we live and work, from improving healthcare and transportation to enhancing the way.
//         </p>
//         <div className="flex space-x-6 mt-8">
//           <button className="bg-[#5d38c0] text-white py-3 px-8 rounded-full hover:opacity-90">Get Started</button>
//           <button className="border border-[#5d38c0] py-3 px-8 rounded-full hover:bg-[#e9ebf6]">Explore</button>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="flex justify-center mt-16 px-6">
//         <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="space-y-4">
//               <h2 className="text-2xl font-semibold text-[#252b48]">Generate Articles With AI</h2>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-500">Language</label>
//                   <select className="w-full p-2 border rounded-md">
//                     <option>English (US)</option>
//                     {/* More options */}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm text-gray-500">Article Title</label>
//                   <input type="text" className="w-full p-2 border rounded-md" placeholder="e.g., the 25 best places to live in the UK" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-gray-500">Focus Keyword</label>
//                   <input type="text" className="w-full p-2 border rounded-md" placeholder="Add keyword" />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-gray-500">Article Subheadings</label>
//                   <input type="text" className="w-full p-2 border rounded-md" placeholder="Subheading" />
//                 </div>
//                 <button className="bg-[#5d38c0] text-white py-2 px-6 rounded-md hover:opacity-90">Generate</button>
//               </form>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <p className="text-[#252b48] text-lg font-semibold">
//                 Effortlessly Create High-Quality Articles with Our AI Article Generator
//               </p>
//               <p className="text-gray-500 text-sm mt-4">
//                 AI has the potential to revolutionize the way we live and work, from improving healthcare and transportation to enhancing the way.
//               </p>
//               {/* You can replace this with any image */}
//               <img
//                 className="mt-4"
//                 src="https://via.placeholder.com/400"
//                 alt="Generated Article Example"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
