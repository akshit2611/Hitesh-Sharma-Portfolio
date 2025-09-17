 import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="relative w-full mt-16 bg-zinc-900">


  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-gray-300">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
      
      {/* Brand / About */}
      <div>
        <h2 className="text-2xl font-bold text-rose-500">Hitesh's Portfolio</h2>
        <p className="mt-3 text-sm">
          A portfolio to showcase skills, creativity, and projects.  
          Combining fashion & technology to build unique digital experiences.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold text-purple-400 mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#Gallery" className="hover:text-rose-400">Gallery</a></li>
          <li><a href="#Projects" className="hover:text-rose-400">Projects</a></li>
          <li><a href="#Experience" className="hover:text-rose-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-rose-400">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-purple-400 mb-3">Contact</h3>
        <p className="text-sm">📧 akshit.26112002@gmail.com</p>
        <p className="text-sm">📞 +91 7082647997</p>
        <p className="text-sm">📍 Ambala, Haryana</p>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-start gap-4 mt-4">
          <a href="https://github.com/akshit2611" target="_blank" className="hover:text-rose-400">GitHub</a>
          <a href="https://www.linkedin.com/in/hitesh-sharma-941742310/" target="_blank" className="hover:text-rose-400">LinkedIn</a>
          <a href="https://wa.me/7082647997" target="_blank" className="hover:text-rose-400">Whatsapp</a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Hitesh Sharma | All Rights Reserved
    </div>
  </div>
</footer>

    </>
  )
}


