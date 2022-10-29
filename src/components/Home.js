import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Home = () => {

  

  return (
    <div className='w-full h-screen bg-dark pt-10 flex'>
      <div className="h-full w-1/5 flex flex-col items-center justify-end relative">
        <ul className=" flex flex-col gap-4  mb-[180px]">
              <li><a href="https://github.com/mahmoud-shakouryan" target="_blank"><GitHubIcon style={{color:'#584E61'}}/></a></li>
              <li><a href="https://www.linkedin.com/in/mahmoudshakouryan" target="_blank"><LinkedInIcon style={{color:'#584E61'}}/></a></li>
              <li><a href="https://telegram.me/mahmoud_feb" target="_blank"><TelegramIcon style={{color:'#584E61'}}/></a></li>
              <li><a href="https://wa.me/00989111303274" target="_blank"><WhatsAppIcon style={{color:'#584E61'}}/></a></li>
          </ul>
        <div className="bg-dark w-full after:content-[''] after:absolute after:z-50 after:bg-lightBlue after:top-[78%] sm:after:top-[75%] after:bottom-0 after:left-1/2 after:border-l after:border-lightBlue after:transform:-translateY(70%)"></div>    
      </div>
      <div className="font-font w-4/5 flex flex-col justify-start mt-20 sm:mt-28 sm:pl-20  gap-1 text-lightBlue">
        <h3 className="text-sm sm:text-base">Hi There, I'm</h3>
        <h1 className="text-xl sm:text-2xl">Mahmoud Shakouryan</h1>
        <h4 className="text-base sm:text-lg mb-5 flex gap-2"><p>I am a </p><span className="font-font text-pink"><Typewriter options={{loop: true}} onInit={(typeWriter)=>typeWriter.typeString('Frontend Developer').pauseFor(1000).deleteAll().typeString('React.js Developer').pauseFor(1000).deleteAll().start()}/></span></h4>
        <p className="text-sm sm:text-base"> I am a self-taught programmer, <br/>currently based in Iran,<br/>specialized in front-end react.js library <br/>and other things related to the front-end area such as tailwindcss.</p>
      </div>
    </div>
  )
}

export default Home