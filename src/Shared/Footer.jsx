import { FaFacebookMessenger } from 'react-icons/fa';
import { ImLinkedin, ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer footer-center md:flex md:justify-between gap-3 p-4 bg-slate-800 text-base-content space-x-0">
            <div className='flex-1 flex justify-center md:order-3'>
                <a href="https://web.facebook.com/alnoman.mern/" target="_blank" rel="noreferrer" title='Linkedin'><ImFacebook2 size={24} className='hover:text-blue-600 hover:bg-white rounded' /></a>
                <a href="https://web.facebook.com/messages/t/100022125303925" target="_blank" rel="noreferrer" title='Linkedin'><FaFacebookMessenger size={24} className='hover:text-blue-500' /></a>
                <a href="https://www.instagram.com/alnoman.mern/" target="_blank" rel="noreferrer" title='Linkedin'><BsInstagram size={24} className='text-slate-800 bg-gray-300 hover:text-white hover:bg-pink-700 rounded-lg' /></a>
                <a href="https://www.linkedin.com/in/aalnomanm10/" target="_blank" rel="noreferrer" title='Linkedin'><ImLinkedin size={24} className='hover:text-blue-600 hover:bg-white rounded' /></a>
            </div>
            <hr className='h-7 w-px bg-lime-50 hidden md:block md:order-2' />
            <div className='flex-1 md:order-1'>
                <p>Copyright © 2023 by <i className="font-bold">Al Noman</i>. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;