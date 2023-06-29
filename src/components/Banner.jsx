import { FiDownload } from 'react-icons/fi';
import img from '../assets/noman-1.png'

const Banner = () => {
    return (
        <div className='bg-slate-900 text-base-content'>
            <div className="max-w-screen-lg mx-auto h-[91vh] py-10 px-6 pb-0 flex place-items-center">
                <div className='flex-1 space-y-4'>
                    <p className='bg-primary bg-opacity-20 text-3xl p-2 inline-block'>Welcome! I&#39;m</p>
                    <h2 className="text-5xl ">Abdullah Al Noman</h2>
                    <p className='pb-4 text-3xl'>MERN Stack Developer</p>
                    <button className="btn btn-primary normal-case"><FiDownload size={20} />Resume</button>
                </div>
                <div className='flex-1'>
                    <img src={img} className='w-9/12 mx-auto' alt="my-photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;