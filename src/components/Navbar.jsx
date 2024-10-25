import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
const Navbar = () => {
    return( 
        <nav className="mb-20 flex flex-col lg:flex-row items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <span className="text-5xl">TP</span>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-5 text-xl mt-5 lg:mt-0">
          <a href="#about-me" className="hover:underline">About Me</a>
          <a href="#technologies" className="hover:underline">Technologies</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#contactme" className="hover:underline">Contact Me</a>
        </div>
        
        <div className="mt-5 lg:mt-0 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/tilak-pandya/" target="_blank"><FaLinkedin/></a>
          <a href="https://github.com/tilakpandya/" target="_blank"><FaGithub/></a>
          <a href="https://www.facebook.com/tilak.pandya.9/" target="_blank"><FaFacebook/></a>
          <a href="https://www.instagram.com/tilak_pandya07/" target="_blank"><FaInstagram/></a>
        </div>
      </nav>          
    );
};

export default Navbar;