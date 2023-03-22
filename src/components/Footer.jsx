import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import Link from 'next/link';

function Footer() {
  return (
    <div className='md:p-16 p-8'>
        <div className="justify-center flex space-x-4 ">
            <AiFillFacebook color="white" size={26} className="cursor-pointer" />
            <AiOutlineInstagram color="white" size={26} className="cursor-pointer" />
            <AiOutlineTwitter color="white" size={26} className="cursor-pointer" />
            <AiFillYoutube color="white" size={26} className="cursor-pointer" />           
        </div>

        <div className="md:justify-center md:flex md:space-x-6 md:space-y-0 space-y-2 text-center pt-6">
            <h5 className="text-white cursor-pointer">Conditions of Use</h5>
            <h5 className="text-white cursor-pointer">Privacy & Policy</h5>
            <h5 className="text-white cursor-pointer">Press Room</h5>
        </div>
        <div className="text-center pt-6 space-x-6">
            <p>&#169; RDMovie by Raditya Krishna - </p>
            <p>Design inspiration: <span className="text-yellowTheme hover:underline hover:underline-offset-4"><Link href="https://www.figma.com/community/file/1082278000598168398" target="_blank">Movie Villa</Link></span> <br className="md:hidden block" /> by Tanmay Jitendra Thakare</p>
        </div>
    </div>
  )
}

export default Footer