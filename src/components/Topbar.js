import { Link } from "react-router-dom"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SideMenu from "./SideMenu";
import { useState } from "react";

const Topbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const showSideBarHandler = () => { 
      setShowSidebar(prev => !prev);
     }

  return (
    <div className="fixed w-full h-10 flex items-center justify-between pr-5 bg-dark">
      <div className="font-font pl-5 h-full flex items-center">
        <Link to='/' className="text-pink">mshcode</Link>
      </div>
      <div className="flex items-center justify-end gap-5 h-full w-1/2">
        <div className="invisible sm:visible h-full sm:w-96 flex items-center justify-end gap-8 text-sm font-font">
          <Link to='/'  className='text-pink  h-full flex items-center justify-center '>Home</Link>
          <Link to='/works' className='text-pink h-full flex items-center justify-center'>Works</Link>
          <Link to='/contact' className='text-pink h-full flex items-center justify-center'>Contact</Link>
          <Link to='/blog' className='text-pink h-full flex items-center justify-center'>Blog</Link>
        </div>
        <div className="sm:invisible w-10 h-full flex items-center justify-center text-pink">
          <span onClick={showSideBarHandler}>{ showSidebar ? <ClearOutlinedIcon/> : <MenuOpenIcon/>}</span>
        </div>
         { showSidebar ? <SideMenu setShowSidebar={setShowSidebar}/> : null } 
      </div>
    </div>
  )
}

export default Topbar