import { FiDownload } from 'react-icons/fi';
import img from '../assets/noman-1.png'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='bg-slate-900 text-base-content'>
            <div className="max-w-screen-lg mx-auto md:h-[91vh] py-10 px-6 pb-0 md:flex place-items-center">
                <div className='flex-1 space-y-4 mb-8 md:mb-0'>
                    <p className='bg-primary bg-opacity-20 text-3xl p-2 inline-block'>Welcome! I&#39;m</p>
                    <h2 className="text-5xl ">Abdullah Al Noman</h2>
                    <p className='pb-4 text-3xl'>
                        <TypeAnimation
                        className='text-white opacity-60'
                            sequence={[
                                'Web Designer', 500,
                                'Web Developer', 500,
                                'React Developer', 500,
                                'MERN Stack Developer', 500,
                            ]}
                            repeat={Infinity}
                        />
                    </p>
                    <a href="https://drive.google.com/uc?export=download&id=1_RxSS_pyqCSxXXhzzTqZPeLdU0l8bCm3" download="abdullah-al-noman-resume.pdf" className="btn btn-primary normal-case"><FiDownload size={20} />Resume</a>
                </div>
                <div className='flex-1'>
                    <img src={img} className='w-9/12 mx-auto' alt="my-photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;