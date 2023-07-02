import img from '../assets/noman-1.png'

const About = () => {
    return (
        <div id='about' className='bg-slate-800 text-base-content'>
            <div className="max-w-screen-lg md:h-[91vh] mx-auto py-10 px-6">
                <h3 className="text-3xl text-center p-4">About Me</h3>
                <div className="md:flex place-items-center">
                    <div className='flex-1 hidden md:block'>
                        <img src={img} className='w-9/12 mx-auto' alt="my-photo" />
                    </div>
                    <div className='flex-1'>
                        <p className='leading-7'>Hello,<br /> This is <i className="">Abdullah Al Noman</i> in front of you. The most fascinating thing for me is that I&apos;m a MERN stack developer. I am highly expert in MongoDB, Express.js, React, and Node.js, I specialize in building dynamic and responsive web applications. I&apos;m passionate about creating seamless user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;