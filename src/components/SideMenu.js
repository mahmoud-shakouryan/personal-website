import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';


const SideMenu = ({setShowSidebar}) => {
  return (
    <div className="w-1/3 h-screen bg-lightBlue2 fixed top-0 right-0 mt-10 transition-translate duration-500">
        <ul className='mt-10 w-full h-full text-dark flex flex-col gap-7'>
            <li className='w-full  font-font h-10 flex flex-col justify-center items-center' onClick={()=>setShowSidebar(false)}><Link to='/' className='flex flex-col'><span className='text-center'><HomeOutlinedIcon/></span><span >Homepage</span></Link></li>
            <li className='w-full  font-font h-10 flex flex-col justify-center items-center' onClick={()=>setShowSidebar(false)}><Link to='/works' className='flex flex-col'><span className='text-center'><WorkOutlineIcon/></span><span >Works</span></Link></li>
            <li className='w-full  font-font h-10 flex flex-col justify-center items-center' onClick={()=>setShowSidebar(false)}><Link to='/contact' className='flex flex-col'><span className='text-center'><AlternateEmailIcon/></span><span >Contact</span></Link></li>
            <li className='w-full  font-font h-10 flex flex-col justify-center items-center' onClick={()=>setShowSidebar(false)}><Link to='/blog' className='flex flex-col'><span className='text-center'><DriveFileRenameOutlineOutlinedIcon/></span><span >Blog</span></Link></li>
        </ul>
    </div>
  )
}

export default SideMenu