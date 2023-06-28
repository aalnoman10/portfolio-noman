import img from '../assets/noman-1.png'
const Banner = () => {
    return (
        <div className='bg-slate-900 text-base-content'>
            <div className="max-w-screen-lg mx-auto p-6 pb-0 flex place-items-center">
                <div className='flex-1 space-y-2'>
                    <p className='bg-primary bg-opacity-20 p-2 inline-block mb-4'>Welcome! I&#39;m</p>
                    <h2 className="text-4xl font-bold ">Abdullah Al Noman</h2>
                    <p className='pb-4 inline-block'>MERN Stack Developer.</p>
                    <p>I specialize building dynamic and responsive wev applications</p>
                </div>
                <div className='flex-1'>
                    <img src={img} className='w-9/12 mx-auto' alt="my-photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;