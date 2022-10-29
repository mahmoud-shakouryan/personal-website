import { Link } from "react-router-dom"
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';



const Works = () => {
  return (
    <div className="bg-dark w-full h-screen flex flex-col items-center justify-between">
        <div className="w-full h-1/2  flex flex-col items-center justify-center gap-2 ">
            <div className="w-3/5 sm:w-[200px] h-2/5 bg-lightDark rounded shadow-sm shadow-lightDark sm:hover:scale-105 sm:duration-100">
            <a href="https://www.avayejaan.ir" target='_blank'><img src='/images/homepageImg.png' className="h-full w-full object-scale-down "/></a>
            </div>
            <ul className="w-full sm:w-1/2 lg:w-1/3 h-10 flex items-center justify-center gap-7">
                <li className=" w-1/5  text-center p-2"><a target='_blank' href="https://www.github.com/mahmoud-shakouryan/dfrontava"><GitHubIcon style={{color:'#7C84A4'}} className='sm:hover:scale-105 sm:duration-100'/></a></li>
                <li className=" w-1/5  text-center p-2 "><a target='_blank' href="https://www.avayejaan.ir"><RemoveRedEyeOutlinedIcon style={{fontSize:'26px', color:'#7C84A4'}} className='sm:hover:scale-110 sm:duration-100'/></a></li>
            </ul>
        </div>
        <div className="h-1/2 w-full">

        </div>

    </div>
  )
}

export default Works