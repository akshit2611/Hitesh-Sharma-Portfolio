import React from 'react'
import { MdEmail } from "react-icons/md";
import  { useState, useRef } from "react";
import { FaCode, FaPlane, FaMusic,FaDumbbell,FaGithub, FaLinkedin, FaWhatsapp,FaUsers,FaCompass} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";


export const Body = () => {

   const images = [
   "/images/15.png",
   "/images/11.png",
   "/images/16.png",
   "/images/18.png",
   "/images/19.png",
   "/images/22.png",
   "/images/21.png",
      
  ];
  
   const interests = [
    { icon: <FaCode size={30} />, title: "Coding & Tech" },
    { icon: <FaPlane size={30} />, title: "Travel & Adventure" },
    { icon: <FaMusic size={30} />, title: "Listening to Music" },
    { icon: <FaDumbbell size={30} />, title: "Fitness & Health" },
    { icon: <FaUsers size={30} />, title: "Social Activities" },
    { icon: <FaCompass size={30} />, title: "Exploring" }

  ];

  const socials = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hitesh-sharma-941742310/", color: "#0A66C2" },
    { icon: <FaGithub />, link: "https://github.com/akshit2611",  },
    { icon: <FaTwitter />, link: "https://x.com/sharma_aks59909", color: "#1DA1F2" },
    { icon: <FaWhatsapp />, link: "https://wa.me/7082647997", color: "#25D366" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/akshit6586/", color: "#E4405F" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/akshit.sharma.268666", color: "#1877F2" },
    { icon: <FaEnvelope />, link: "mailto:akshit.26112002@gmail.com", color: "#EA4335" },
  ];

  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) {
      // swipe left
      nextImage();
    } else if (endX - startX.current > 50) {
      // swipe right
      prevImage();
    }
  };

  return (
    <>
  
    < img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="background" className='absolute -z-10 w-full object-cover blur-lg h-115 \\ sm:absolute sm:-z-10 sm:w-full sm:object-cover sm:blur-lg sm:h-113'/>
    {/* summary section */}

    <div id="summary" className='text-center mt-14 mb-10 text-xl font-medium flex flex-col gap-2 items-center \\ sm:text-center sm:mt-14 sm:mb-10 sm:text-xl sm:font-medium sm:flex sm:flex-col sm:gap-2 sm:items-center'>
      <h1 className='text-3xl mb-4  text-purple-800 bg-pink-300 p-2 rounded-lg shadow-8xl \\ sm:text-5xl sm:mb-4  sm:text-purple-700 sm:bg-pink-300 sm:p-2 sm:rounded-sm sm:shadow-5xl'>Hitesh Sharma</h1>
      <p className='mb-6 text-yellow-300 text-lg bg-blue-700 px-2 rounded \\ sm:mb-2 sm:text-amber-300 sm:text-2xl sm:bg-blue-600 sm:px-2 sm:rounded animate-bounce'>Full Stack & MERN Stack developer</p>
      <p className='w-full text-sm text-pink-400 flex flex-wrap  \\ sm:w-200 sm:text-xl sm:text-pink-400 '>As a full-stack developer skilled in Javascript, Node.js, Express.js, SQL, and Tailwind CSS, MongoDB, I’m eager to contribute and grow with your team. I'd appreciate it if you could take a moment to review my profile.</p>
      <div className='flex gap-8 mt-4 text-blue-900'>
      <a
  href="/Hitesh-Sharma-Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className='bg-blue-300 p-2 rounded text-sm sm:bg-blue-300 sm:p-2 sm:rounded sm:text-base flex items-center justify-center hover:bg-blue-400 transition duration-200'
      >
        Download Resume
      </a>
      </div>
    </div>
    
   {/* Social icons */}

 <div  className="font-medium flex flex-row gap-8 justify-center">

      <a href="https://github.com/akshit2611" className="flex gap-2 flex-col items-center transition  text-sm">
        <FaGithub size={32} />Github
      </a>

      <a href="https://www.linkedin.com/in/hitesh-sharma-941742310/"
        className="flex gap-2 text-blue-500 transition flex-col items-center text-sm">
        <FaLinkedin size={32} /> linkedin
      </a>

      <a
        href="https://wa.me/7082647997" className="flex items-center gap-2 text-green-400 transition flex-col text-sm">
        <FaWhatsapp size={32} />Whatsapp
      </a>

      <a href="mailto:akshit.26112002@gmail.com" className="flex items-center gap-2 text-red-500 transition flex-col text-sm" >
        <MdEmail size={34} />Email
      </a>
    </div>

    {/* Skills section */}

 <h1 id="skills"className='text-center text-4xl mt-12 text-rose-500 font-semibold shadow-cyan-200 \\ sm:text-center sm:text-4xl sm:mt-20 sm:mb-10 sm:text-rose-500 sm:font-semibold sm:shadow-cyan-200 '>Tech Stack</h1>
 <div  className='text-center flex flex-row justify-center gap-18 flex-wrap mt-8 mb-10'>
      <div className='text-lg font-medium flex-col '>
          <p className='text-2xl bg-pink-500 rounded-b-lg py-1 '>Frontend</p>
          <div className=' p-4 rounded-lg '>
          <p className='mb-1'>React.js</p>
          <p className='mb-1'>JavaScript</p>
          <p className='mb-1'>TailwindCSS</p>
          <p className='mb-1'>HTML || CSS || EJS</p>
          </div>
       </div>

      <div className='text-lg font-medium flex-col'>
        <p className='text-2xl bg-pink-500 rounded-b-lg py-1'>Backend</p>
        <div className=' p-4 rounded-lg '>
          <p className='mb-1'>Node.js</p>
          <p className='mb-1'>Express.js</p>
          </div>
      </div>

      <div className='text-lg font-medium flex-col'>
        <p className='text-2xl bg-pink-500 rounded-b-lg py-1'>Database</p>
        <div className=' p-4 rounded-lg '>
        <p className='mb-1'>MongoDB</p>
        <p className='mb-1'>SQL</p>
        </div>
      </div>

      <div className='text-lg font-medium flex-col'>
        <p className='text-2xl bg-pink-500 rounded-b-lg py-1'>Deployment</p>
        <div className=' p-4 rounded-lg '>
        <p className='mb-1'>Render</p>
        <p className='mb-1'>Netlify</p>
        <p className='mb-1'>MongoDb atlas</p>
        </div>
      </div>

      <div className='text-lg font-medium flex-col'>
        <p className='text-2xl bg-pink-500 rounded-b-lg py-1'>Tools</p>
        <div className=' p-4 rounded-lg '>
        <p className='mb-1'>Github</p>
        <p className='mb-1'>Docker</p>
        <p className='mb-1'>VS code</p>
        <p className='mb-1'>MS-Excel & Word</p>
        </div>
      </div>

      <div className='text-lg font-medium flex-col'>
        <p className='text-2xl bg-pink-500 rounded-b-lg py-1'>Others</p>
        <div className=' p-4 rounded-lg '>
        <p className='mb-1'>Sales</p>
        <p className='mb-1'>Analyzing</p>
        <p className='mb-1'>Communication</p>
        <p className='mb-1'>Problem solving</p>
        </div>
      </div>
    </div>

    {/* about me */}


  <div className="relative w-full mt-20 mb-18">
    <img className="absolute inset-0 w-full h-full object-cover blur-xl" src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww"/>

    <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-36 items-center justify-center h-full px-4">
      {/* Paragraph left, image right on big screens; stacked on small screens */}
      <div className="text-lg font-medium flex flex-col max-w-xl md:max-w-[600px] bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg w-full md:w-1/2 text-center md:text-left">
        <p className="mb-6 text-rose-600 bg-purple-300 rounded p-1">
          I have always been fascinated by technology and how it shapes the
          world around us, which is why I decided to build my career in web
          development. Over time, I have gained strong knowledge of frontend
          technologies like HTML, JavaScript, React and Tailwind CSS, along with
          backend development skills in Node.js, Express.js, and MongoDB. I
          enjoy designing responsive and attractive websites that are not only
          visually appealing but also user-friendly and functional.
        </p>
        <p className="mb-2 text-purple-700 bg-pink-200 rounded">
          I am also passionate about continuous learning and exploring new
          tools, frameworks, and techniques that help me grow as a developer.
          Apart from coding, I have a creative side as well I am interested in
          fashion and design, which inspires me to create unique and engaging
          digital experiences. My goal is to combine creativity with technical
          expertise to build modern, scalable, and problem-solving applications
          that leaves a lasting impression.
        </p>
      </div>
      <img className="w-full md:w-[400px] lg:w-[670px] h-[250px] md:h-[450px] rounded-xl shadow-lg object-cover" src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About me" />
    </div>
  </div>

    {/* Experience & Intern */}



  <h1 id='Experience' className='text-center mb-8 text-3xl text-rose-600 font-semibold \\ sm:text-center sm:mb-8 sm:text-4xl sm:text-rose-600 sm:font-semibold'>Experience & Internship</h1>
  {/* Responsive Experience Cards with Arrow Navigation */}
  <div className="w-full flex justify-center items-center">
    <div className="relative w-full max-w-2xl mx-auto">
      {/* For small screens: show one card at a time with arrows */}
      <div className="block md:hidden">
        {/* State for mobile navigation */}
        {(() => {
          const [expIndex, setExpIndex] = React.useState(0);
          const experiences = [
            {
              title: "Technical Support executive - TechyBizz",
              points: [
                "Provided technical assistance of networks to US, UK, AUS Clients.",
                "Resolved & Troubleshoot customer issue Via Call, Email.",
                "Sales of network firewall security, Antivirus, PC cleaning",
                "Effective Problem-solving, Communication & Analyzing."
              ],
            },
            {
              title: "Frontend Developer Intern - TechyBizz",
              points: [
                "Developed responsive web pages using HTML, CSS, JavaScript",
                "Collaborated with designers to implement UI/UX designs",
                "Optimized website performance and ensured cross-browser compatibility",
                "Participated in code reviews and contributed to team knowledge sharing"
              ],
            },
          ];
          return (
            <div className="flex items-center justify-center gap-2">
              <button
                className="p-1 rounded bg-purple-600 font-extrabold shadow hover:bg-purple-400 disabled:opacity-50 text-xl"
                onClick={() => setExpIndex((expIndex - 1 + experiences.length) % experiences.length)}
                disabled={expIndex === 0}
                aria-label="Previous Experience"
              >
                &#8592;
              </button>
              <div className="bg-gray-800 p-4 rounded-xl shadow-lg min-w-[260px] max-w-[350px] w-full flex flex-col items-center">
                <div className="mb-4 px-4 py-2 rounded-lg bg-purple-300 text-purple-800 text-lg font-semibold text-center">
                  {experiences[expIndex].title}
                </div>
                <ul className="list-disc pl-5 text-white text-base text-left">
                  {experiences[expIndex].points.map((point, idx) => (
                    <li key={idx} className="mb-2 leading-snug">{point}</li>
                  ))}
                </ul>
              </div>
              <button
                className="p-1 rounded bg-purple-600 font-extrabold text-xl shadow disabled:opacity-50"
                onClick={() => setExpIndex((expIndex + 1) % experiences.length)}
                disabled={expIndex === experiences.length - 1}
                aria-label="Next Experience"
              >
                &#8594;
              </button>
            </div>
          );
        })()}
      </div>
      {/* For medium and large screens: show both cards side by side, centered */}
      <div className="hidden md:flex justify-center gap-50">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg min-w-[360px] max-w-[450px] w-full flex flex-col items-center">
          <div className="mb-4 px-4 py-2 rounded-lg bg-purple-300 text-purple-800 text-lg font-semibold text-center">
            Technical Support executive - (TechyBizz)
          </div>
          <ul className="list-disc pl-5 text-white text-base text-left">
            <li className="mb-2 leading-snug">Provided technical assistance of networks to US, UK, AUS Clients.</li>
            <li className="mb-2 leading-snug">Resolved & Troubleshoot customer issue Via Call, Email.</li>
            <li className="mb-2 leading-snug">Sales of network firewall security, Antivirus, PC cleaning</li>
            <li className="mb-2 leading-snug">Effective Problem-solving, Communication & Analyzing.</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg min-w-[360px] max-w-[450px] w-full flex flex-col items-center">
          <div className="mb-4 px-4 py-2 rounded-lg bg-purple-300 text-purple-800 text-lg font-semibold text-center">
            Frontend Developer Intern - (TechyBizz)
          </div>
          <ul className="list-disc pl-5 text-white text-base text-left">
            <li className="mb-2 leading-snug">Developed responsive web pages using HTML, CSS, JavaScript</li>
            <li className="mb-2 leading-snug">Collaborated with designers to implement UI/UX designs</li>
            <li className="mb-2 leading-snug">Optimized website performance and ensured cross-browser compatibility</li>
            <li className="mb-2 leading-snug">Participated in code reviews and contributed to team knowledge sharing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
   
{/* Projects */}

{/* Heading */}
    <div id="Projects"className="text-center mb-16 mt-18">
      <h2 className="text-4xl font-semibold text-red-500">Personal Projects</h2>
      <p className="text-lg text-purple-500 mt-2"> Here is My Recent Projects defining Experience</p>
    </div>

      <div className="relative w-full py-20">
  {/* Background Image */}
  <img className="absolute inset-0 w-full h-full object-cover blur-lg"src="https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148433468.jpg?semt=ais_hybrid&w=740"/>

  {/* Overlay */}
  <div className="relative z-10 max-w-7xl mx-auto ">
    

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
      
      {/* Project Card */}
       <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10 \\  ">
  <img src="/images/6.png" className="w-full h-40 object-cover rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">React.js</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">TailwindCSS</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">Express</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">UI || UX</span>
          <span className="bg-rose-500 text-white text-sm px-3 py-1 rounded-full">Hooks</span>
        </div>
        <h3 className="text-xl font-semibold text-orange-400">FabriCity</h3>
        <p className="text-gray-200 mt-2">🛍️ Product listing with details & prices<br></br>
🔍 Search products by name<br></br>
🛒 Add / remove from cart<br></br>
🧾 Cart page with total price<br></br>
📱 Mobile-friendly responsive UI<br></br>
⚛️ React Router for navigation<br></br>
🌀 Context API for global state</p>
        <div className="flex gap-4 mt-4">
          <a href="https://akshit2611.github.io/FabriCity/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/FabriCity" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>

      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10">
  <img src="/images/1.png" className="w-full h-40 object-contain rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full"> TailwindCSS</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">Node & Express</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">EJS</span>
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">MongoDB</span>
          <span className="bg-rose-500 text-white text-sm px-3 py-1 rounded-full">Express</span>
        </div>
        <h3 className="text-xl font-semibold text-orange-400">Pehnava</h3>
        <p className="text-gray-200 mt-2">✅ Registration & Login timestamp<br></br>
✅ Failed login attempts<br></br>
✅ Daily new & returning user registrations<br></br>✅Number of total users per day<br></br>
✅ Number of returning users per day<br></br>
✅ Count of failed login attempts</p>
        <div className="flex gap-4 mt-4">
          <a href="https://pehnava-by-surbhi.onrender.com/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/Pehnava" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>

      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10">
  <img src="/images/3.png" className="w-full h-40 object-contain rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">TailwindCss</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">Node & Express</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">MongoDB</span>
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">JWT & Bcrypt</span>
          <span className="bg-rose-500 text-white text-sm px-3 py-1 rounded-full">Authorization</span>
        </div>
        <h3 className="text-xl font-semibold text-orange-400">Form Authorization</h3>
        <p className="text-gray-200 mt-2">✅User Registration with time & date stamp<br></br>
✅User Login with validation<br></br>
✅Password Hashing using bcrypt<br></br>
✅JWT-based authentication<br></br>
✅Cookie storage using cookie-parser<br></br>
✅Route protection using JWT<br></br>
✅Login/Register timestamp logging</p>
        <div className="flex gap-4 mt-4">
          <a href="https://form-authorization-2.onrender.com/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/Form-authorization" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>

      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10">
  <img src="/images/2.png" className="w-full h-40 object-cover rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">Node.js</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">Express</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">EJS</span>
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">TailwindCSS</span>
        </div>
        <h3 className="text-xl font-semibold text-orange-400">Portfolio using Backend</h3>
        <p className="text-gray-200 mt-2"> ✅ Modern, responsive design<br></br>
✅ Smooth animations and transitions<br></br>
✅ Easily customizable projects and sections<br></br>
✅ Ready to deploy</p>
        <div className="flex gap-4 mt-4">
          <a href="https://portfolio-h4rb.onrender.com/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/Portfolio" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>

      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10 ">
  <img src="/images/4.png" className="w-full h-40 object-cover rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">CSS</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">HTML</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Logic</span>
          
        </div>
        <h3 className="text-xl font-semibold text-orange-400">Rock Paper Scissor</h3>
        <p className="text-gray-200 mt-2">Rock Paper Scissors is a simple hand game implemented as a single-player web app where a human player competes against the computer.</p>
        <div className="flex gap-4 mt-4">
          <a href="https://akshit2611.github.io/Stone-Paper-Scissor/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/Stone-Paper-Scissor" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>

      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10">
  <img src="/images/5.png" className="w-full h-40 object-cover rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">HTML</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">CSS</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Logic</span>
        </div>
        <h3 className="text-xl font-semibold text-orange-400">Tic Tac Toe</h3>
        <p className="text-gray-200 mt-2">Tic Tac Toe is a classic 2-player board game built using HTML, CSS, and JavaScript. Players take turns marking the cells in a 3×3 grid with X or O.</p>
        <div className="flex gap-4 mt-4">
          <a href="https://akshit2611.github.io/Tic-Tac-Toe-/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/Tic-Tac-Toe-" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>

     

      <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 gap-10">
  <img src="/images/111.png" className="w-full h-40 object-cover rounded-lg mb-4"/>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">React</span>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">Tailwind</span>
          <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">Express</span>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">React</span>
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">Tailwind</span>
          <span className="bg-rose-500 text-white text-sm px-3 py-1 rounded-full">Express</span>
        </div>
        <h3 className="text-xl font-semibold text-orange-400">Basic React & API Features</h3>
        <p className="text-gray-200 mt-2">The goal of this project was to get experience with the following key React concepts:<br></br>
✅ Components (Function-based)<br></br>
✅ Props<br></br>
✅ State Management using useState<br></br>
✅ API Integration using Axios</p>
        <div className="flex gap-4 mt-4">
          <a href="https://akshit2611.github.io/Basic-React-features/"className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Live Demo</a>
          <a href="https://github.com/akshit2611/Basic-React-features" className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
            Github Repo</a>
        </div>
      </div>
      </div>
      </div>
      </div>

      {/* Education */}

       <h1 id="Education" className='text-center text-4xl mt-14 text-rose-500 font-semibold shadow-cyan-200 '>Education & Studies</h1>
      <div className="relative w-full py-16 mb-13">
   <div className="max-w-6xl mx-auto px-6">

    {/* Timeline Container */}
    <div className="relative border-l-4 border-purple-600 pl-8 space-y-12">
      
      {/* Item 1 */}
      <div className="relative">
        <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-purple-400 shadow-lg"></div>
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-yellow-300">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-rose-800 font-bold">2021 - 2024 | Kurukshetra University, Haryana</p>
          <p className="mt-2 text-gray-900">Learned core subjects like Programming, Web Development, Database Management, Operating Systems, and Networking and gained strong problem-solving skills.</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="relative">
        <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-rose-400  shadow-lg"></div>
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-yellow-300">12th Standard (Senior Secondary)</h3>
          <p className="text-rose-800 font-bold">2020 - 2021 | [PKR Jain Public School], Ambala</p>
          <p className="mt-2 text-gray-900">Completed Senior Secondary with subjects including Economics, Politics Science and English. Developed an early interest in technology and logical reasoning.</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="relative">
        <div className="absolute -left-5 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 shadow-lg"></div>
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-yellow-300">10th Standard (Secondary)</h3>
          <p className="text-rose-800 font-bold">2019 - 2020 | [PKR Jain Public School], Ambala</p>
          <p className="mt-2 text-gray-900">Built a foundation in core subjects like Mathematics, Science, and Computer Basics. First exposure to programming and coding concepts.</p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* About me and pictures */}


 <div id="Gallery"className="relative w-full py-16">
      {/* Background Image */}
      <img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww" className="absolute inset-0 w-full h-full object-cover blur-lg"/>

      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-18">
        {/* Left Side - Image Slider */}
        <div className="relative bg-white/40 backdrop-blur-md p-3 sm:p-6 rounded-xl shadow-lg w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
          {/* Main Image */}
          <div className="relative w-full h-[220px] sm:h-[400px] overflow-hidden rounded-xl shadow-lg" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <img src={images[index]} alt="Selected" className="w-full h-full object-cover transition-all duration-500" />
            {/* Prev Button */}
            <button onClick={prevImage} className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-rose-500 text-white px-2 sm:px-3 py-1 rounded-full shadow-md hover:bg-rose-600">
              ❮
            </button>
            {/* Next Button */}
            <button onClick={nextImage} className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-rose-500 text-white px-2 sm:px-3 py-1 rounded-full shadow-md hover:bg-rose-600">
              ❯
            </button>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="bg-white/40 backdrop-blur-md p-3 sm:p-8 rounded-xl shadow-lg w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl sm:text-3xl font-bold text-purple-700 bg-rose-300 p-2 w-full sm:w-80 mb-4 sm:mb-6">
            Beyond My Career
          </h2>
          <ul className="space-y-2 sm:space-y-4 text-gray-800 font-medium text-sm sm:text-base">
            <li>
              I belong to <span className="text-rose-600">Ambala, Haryana</span>,
              a place that inspires me with its cultural roots and simplicity.
            </li>
            <li>
              Apart from coding, I am interested in <span className="text-yellow-400">fashion and creative design</span>,
              which keeps my imagination fresh and innovative.
            </li>
            <li>
              I enjoy exploring new technologies as well as learning from <span className="text-rose-600">real-life experiences</span>.
            </li>
            <li>
              In free time, I like to travel, listen to music, and explore <span className="text-green-400">trending styles</span>.
            </li>
            <li>
              I believe in <span className="text-rose-500">continuous self-improvement</span> –
              whether it’s enhancing technical expertise or improving communication.
            </li>
            <li>
              I am passionate about <span className="text-yellow-400">fitness and maintaining a healthy lifestyle</span>.
            </li>
            <li>
              I value <span className="text-orange-400">teamwork, discipline, and positivity</span>,
              which I try to bring into both my professional and personal life.
            </li>
          </ul>
        </div>
      </div>
    </div>

{/* Interest */}

<div className="relative w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-rose-600 mb-12">
          Interests
        </h2>

        {/* Interests Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {interests.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-3 sm:p-6 bg-violet-400 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-rose-600 mb-2 sm:mb-4">{item.icon}</div>
              <h3 className="text-xs sm:text-lg font-semibold text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
    
{/* Contact me */}


  <h1 id="contact"className='text-center mb-14 text-4xl text-rose-600 font-semibold'>Get In Touch</h1>

 <div id="contact"className="relative w-full py-16 px-6 text-white mb-14">
      {/* Background Image */}
      <div className="absolute inset-0">
       <img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww"className="absolute inset-0 w-full h-full object-cover blur-lg"/>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Me</h2>
          <p className="text-yellow-300">
            Feel free to get in touch with me for collaborations, projects, or just to say hi!  
          </p>

          <div className="space-y-3 text-yellow-300">
            <p>📧 <span className="font-medium">Email:</span> akshit.26112002@gmail.com</p>
            <p>📞 <span className="font-medium">Phone:</span> +91 7082647997</p>
            <p>📍 <span className="font-medium">Location:</span> Ambala, Haryana, India</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/akshit2611"target="_blank"rel="noreferrer"className="px-4 py-2 bg-cyan-600 text-white rounded-lg shadow hover:bg-purple-600 transition">GitHub</a>

            <a href="https://www.linkedin.com/in/hitesh-sharma-941742310/"target="_blank"rel="noreferrer"className="px-4 py-2 bg-cyan-600 text-white rounded-lg shadow hover:bg-purple-600 transition"> LinkedIn</a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-300 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border border-gray-700 bg-black/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border border-gray-700 bg-black/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border border-gray-700 bg-black/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Social */}

<div id="social"className="w-full py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="sm:text-4xl  text-center mb-14 text-4xl text-rose-600 font-semibold">
          Connect With Me
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl sm:text-6xl"
              style={{ color: item.color }}
              animate={{
                y: [0, -8, 0], // upar niche move
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0, // har icon thoda delay se hile
              }}
              whileHover={{
                scale: 1.3,
                rotate: 0,
                textShadow: `0px 0px 0px ${item.color}`,
                boxShadow: `0px 0px 20px ${item.color}`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
   
    </>
  )
}
