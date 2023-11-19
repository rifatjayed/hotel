import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='bg-[#0B0D17;]'>
      <footer className="footer p-10  text-white">
        <nav>
          <header className="title text-[#F28E13] font-bold text-lg	">Hotel</header>

          <p className='text-base'>Lorem ipsum dolor sit amet, consectetur </p>
          <input type="text" placeholder="Your Email Address" className="input input-bordered w-56	text-white h-10	 bg-[#C4C4C440]" />
          <div>
            {/* <FontAwesomeIcon icon={faFacebook} /> 
   <FontAwesomeIcon icon={faYoutube} />
   <FontAwesomeIcon icon={faTwitter} /> */}
          </div>

        </nav>
        <nav>
          <header className="title text-white font-bold	text-lg	">Company</header>
       
            <a className="link link-hover text-base	">About us</a>
          <a className="link link-hover text-base	">Contact</a>
          <a className="link link-hover text-base	">Jobs</a>
          <a className="link link-hover text-base	">Press kit</a> 
        
         
        </nav>
        <nav>
          <header className="title text-white font-bold	text-lg	">Legal</header>
          <a className="link link-hover text-base	">Terms of use</a>
          <a className="link link-hover text-base	">Privacy policy</a>
          <a className="link link-hover text-base	">Cookie policy</a>
        </nav>

        <nav>
          <header className="title text-white font-bold	text-lg	">Reach Us</header>
          <div>


            <FontAwesomeIcon className='mr-3 text-[#1da1f2]' icon={faEnvelope} />

            <a className="link link-hover text-base	">6391 Elgin St. </a>
          </div>
          <div>
            <FontAwesomeIcon className='mr-3 text-[#1da1f2]' icon={faMobileScreenButton} />
            <a className="link link-hover text-base	">(239) 555-0108</a>
          </div>

          <div className=''>
            <FontAwesomeIcon className='mr-3 text-[#1da1f2]' icon={faLocationDot} />
            <a className="link link-hover text-base	">6391 Elgin St. Celina,
              Delaware 10299</a>
          </div>

        </nav>
      </footer>







    </div>
  );
};

export default Footer;