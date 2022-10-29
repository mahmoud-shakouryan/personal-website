import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

const Contact = () => {
  return (
    <div className='h-screen w-full bg-dark flex flex-col justify-center items-center'>
        <ul className="w-full h-3/4 flex flex-col justify-start items-center gap-4 font-font font-bold">
            <li className='bg-lightDark w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-20  rounded-lg shadow-sm shadow-lightDark'><a href="https://www.linkedin.com/in/mahmoudshakouryan" target='_blank' className='w-full h-full flex items-center justify-center'><LinkedInIcon className='scale-150 text-Dark'/></a></li>
            <li className='bg-lightDark w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4  h-20  rounded-lg shadow-sm shadow-lightDark'><a href="https://www.github.com/mahmoud-shakouryan" target='_blank' className='w-full h-full flex items-center justify-center'><GitHubIcon className='scale-150 text-Dark'/></a></li>
            <li className='bg-lightDark w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4  h-20  rounded-lg shadow-sm shadow-lightDark'><a href="https://www.telegram.me/" target='_blank' className='w-full h-full flex items-center justify-center'><TelegramIcon className='scale-150 text-Dark'/></a></li>
            <li className='bg-lightDark w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4  h-20 flex flex-col items-center justify-center gap-2 rounded-lg shadow-sm shadow-lightDark'><WhatsAppIcon className='scale-150 text-Dark'/><span>+98-911-130-3274</span></li>
            <li className='bg-lightDark w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4  h-20 flex flex-col items-center justify-center gap-2 rounded-lg shadow-sm shadow-lightDark'><PhoneInTalkOutlinedIcon className='scale-150 text-Dark'/><span>+98-911-130-3274</span></li>
            <li className='bg-lightDark w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-20 flex flex-col items-center justify-center gap-2 rounded-lg shadow-sm shadow-lightDark'><TextsmsOutlinedIcon className='scale-150 text-Dark'/><span>+98-911-130-3274</span></li>
        </ul>
    </div>
  )
}

export default Contact