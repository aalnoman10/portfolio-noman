import messageImg from '../assets/message.png'

const Massage = () => {
    return (
        <div className='bg-slate-800 text-base-content'>
            <div className="max-w-screen-lg md:h-[80vh] mx-auto py-10 px-6">
                <h3 className="text-3xl text-center pt-4">Send a Message</h3>
                <div className="md:flex items-center h-full">
                    <div className="flex-1 -mt-4">
                        <img src={messageImg} className='w-full h-full' alt="" />
                    </div>
                    <form className="space-y-5 flex-1">
                        <div className="flex gap-4">
                            <input type="text" placeholder="Name" name="name" className="input input-bordered input-primary bg-transparent w-full max-w-xs" />
                            <input type="email" placeholder="some@example.com" name="email" className="input input-bordered input-primary bg-transparent w-full max-w-xs" />
                        </div>
                        <div className="flex gap-4">
                            <input type="number" placeholder="number" name="number" className="input input-bordered input-primary bg-transparent w-full max-w-xs" />
                            <input type="text" placeholder="Subject" name="subject" className="input input-bordered input-primary bg-transparent w-full max-w-xs" />
                        </div>
                        <div>
                            <textarea name="description" placeholder="Write any Massage" className="py-2 input h-32 input-bordered input-primary bg-transparent w-full mb-5"></textarea>
                            <input type="submit" className="btn btn-primary w-full mb-0" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Massage;