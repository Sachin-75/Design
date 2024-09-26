import React, { useState } from 'react';
import { LuCodesandbox } from 'react-icons/lu';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full p-6 bg-gradient-to-r from-[#fdf1e8] to-[#c4c9e8]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">


        <div className="flex items-center">
          <LuCodesandbox className="size-7 mr-3 text-blue-800" />
          <div className="text-3xl  text-[#393746]">uiAid</div>
        </div>


        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#about" className="hover:text-[#5238cf]">About</a>
          <a href="#work" className="hover:text-[#5238cf]">Work</a>
          <a href="#research" className="hover:text-[#5238cf]">Research</a>
        </nav>


        <button className="hidden md:block border border-[#5238cf] rounded-full py-2 px-6 hover:bg-[#f0f1f6]">
          Login
        </button>


        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>


      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-r from-[#fdf1e8] to-[#c4c9e8] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 md:hidden z-50 shadow-lg`}
      >
        <div className="p-6 flex flex-col space-y-6 text-lg">
          <button onClick={toggleMenu} className="self-end">
            <AiOutlineClose size={28} />
          </button>
          <a href="#about" className="hover:text-[#5238cf]">About</a>
          <a href="#work" className="hover:text-[#5238cf]">Work</a>
          <a href="#research" className="hover:text-[#5238cf]">Research</a>
          <button className="border border-[#5238cf] rounded-full py-2 px-6 hover:bg-[#f0f1f6]">
            Login
          </button>
        </div>
      </div>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
