import { FaFacebookMessenger } from 'react-icons/fa';
import { ImLinkedin, ImFacebook2 } from 'react-icons/im';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-base-content'>
            <div className="footer footer-center text-base  gap-3 p-4 space-x-0 max-w-screen-lg mx-auto">
                <div className='flex-1 flex justify-center m-2'>
                    <a href="https://web.facebook.com/alnoman.dev/" target="_blank" rel="noreferrer" title='Linkedin'><ImFacebook2 size={24} className='hover:text-blue-600 hover:bg-white rounded' /></a>
                    <a href="https://web.facebook.com/messages/t/100022125303925" target="_blank" rel="noreferrer" title='Linkedin'><FaFacebookMessenger size={24} className='hover:text-blue-500' /></a>
                    <a href="https://www.instagram.com/alnoman.dev/" target="_blank" rel="noreferrer" title='Linkedin'><BsInstagram size={24} className='text-slate-800 bg-gray-300 hover:text-white hover:bg-pink-700 rounded-lg' /></a>
                    <a href="https://www.linkedin.com/in/aalnomanm10/" target="_blank" rel="noreferrer" title='Linkedin'><ImLinkedin size={24} className='hover:text-blue-600 hover:bg-white rounded' /></a>
                    <a href="https://www.github.com/aalnoman10/" target="_blank" rel="noreferrer" title='Github'><BsGithub size={24} className='hover:text-white hover:bg-black rounded-full' /></a>
                </div>
                <div className="md:flex md:justify-between w-full">
                    <div className='flex-1 flex justify-center md:order-3'>
                        <p>Copyright © 2024, All Rights Reserved</p>
                    </div>
                    <hr className='h-7 w-px bg-lime-50 hidden md:block md:order-2' />
                    <div className='flex-1 md:order-1'>
                        <p>Designed and Developed by <span className='text-primary'>Abdullah Al Noman</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
