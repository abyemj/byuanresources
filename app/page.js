'use client';

import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function HomePage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <section>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-navy-blue">
            Byuan Resources
          </div>
          
          {/* Menu Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="text-navy-blue md:hidden"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Links - Hidden on Mobile, Visible on Desktop */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 md:static md:h-auto md:w-auto md:flex md:flex-row md:translate-x-0`}
          >
            <a
              href="#home"
              className="text-navy-blue font-medium hover:text-gray-700 md:ml-6 mb-4 md:mb-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-navy-blue font-medium hover:text-gray-700 md:ml-6 mb-4 md:mb-0"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-navy-blue font-medium hover:text-gray-700 md:ml-6 mb-4 md:mb-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-navy-blue font-medium hover:text-gray-700 md:ml-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
        <div id='home' className=" h-screen bg-contain bg-right bg-no-repeat  "
           style={{ backgroundImage: 'url("/skyscrapers.jpg")' }}>
        </div>
        <div className="h-48 absolute bg-current ml-25 top-48 ">
        <div className="relative z-10 px-6 py-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Byuan Resources</h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Consulting Services
          </p>
        </div>
          <button className="px-6 py-1 mx-5 text-current bg-white text-navy-blue font-bold rounded-lg">
            Work with us
          </button>
        </div> 
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-navy-blue">Expertise you can count on</h2>
        <p className="mt-4 text-lg text-gray-600">
          With multiple years of industry experience, Byuan Resources is a consulting firm specializing in business insights and strategies. We partner with organizations to deliver measurable impact and sustainable growth.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-current">
        <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-navy-blue">Strategy Consulting</h3>
            <p className="mt-4 text-gray-600">
              Develop strategies that drive growth, efficiency, and competitive advantage.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-navy-blue">Market Research</h3>
            <p className="mt-4 text-gray-600">
              Gain insights into markets, customers, and trends to inform decision-making.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-navy-blue">Operational Excellence</h3>
            <p className="mt-4 text-gray-600">
              Streamline operations and optimize performance for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-navy-blue">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ready to take your business to the next level? Get in touch with us today!
        </p>
        <button className="mt-6 px-6 py-3 text-white bg-navy-blue font-bold rounded-lg">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          BYUAN RESOURCES
          <div>
            <h3 className="text-lg font-bold">Company Name</h3>
            <p className="mt-2">Byuan Resources Ltd</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Location</h3>
            <p className="mt-2">
              Head Office: Plot 2, Al-Mahila Commercial Centre, Suite C9, Michika Street, Area 11, Garki, Abuja
            </p>
            <p className="mt-2">
              Lagos Office: No 6, lander close Liverpool road, GRA, Apapa Lagos
            </p>
            <p className="mt-2">
              Abuja Branch Office: Plot 123, Samuel Ladoke Akintola Boulevard, Garki II, Abuja
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="mt-2">Phone: 07038913554</p>
            <p className="mt-2">Website: <a href="https://www.byuanresources.com" className="underline text-light-blue">www.byuanresources.com</a></p>
            <p className="mt-2">Email: <a href="mailto:drmathiasbyuan@byuanresources.com" className="underline text-light-blue">drmathiasbyuan@byuanresources.com</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
