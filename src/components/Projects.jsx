import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='bg-slate-800 text-base-content'>
            <div className="max-w-screen-lg md:h-[91vh] mx-auto py-10 px-6">
                <h3 className="text-3xl text-center mb-8 md:mb-0">Latest Projects</h3>
                <div className="grid place-items-center h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* card 1 */}
                        <div className="card bg-base-100 shadow-xl">
                            <iframe className="rounded-t-lg h-60" src="https://artcraft-school.web.app/"></iframe>
                            <div className="card-body p-3">
                                <h2 className="card-title font-normal">ArtCraft-School <span className="text-base font-normal italic">- learning</span></h2>
                                <p>ArtCraft-School. This project based on a learning platform.</p>
                                <div className="card-actions justify-end">
                                    {/* modal */}
                                    <button className="btn btn-primary normal-case" onClick={() => window.my_modal_4.showModal()}>Details</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <form method="dialog" className="modal-box w-11/12 max-w-5xl glass">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <div className="md:flex">
                                                <figure className="flex-1">
                                                    <iframe className="w-full h-96 md:h-full rounded" src="https://artcraft-school.web.app/"></iframe>
                                                </figure>
                                                {/* card */}
                                                <div className="card-body p-0 pt-4 md:p-6 flex-1">
                                                    <h2 className="card-title font-normal">ArtCraft-School <span className="text-base font-normal italic">- learning</span></h2>
                                                    <p>This project based on a learning platform. From this, anyone can buy & learn courses. There are three dashboards in this project which are the student dashboard, the instructor dashboard and the admin dashboard. These dashboards are highly protected. Admin can make any user instructor or admin.</p>
                                                    <h4 className="font-normal mt-2">Technologies Used</h4>
                                                    <div className="space-x-1 space-y-1">
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React.js</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Tailwind CSS</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Swiper.js</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React icon</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Firebase Authentication</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">express</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Node.js</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">MongoDB</p>
                                                    </div>
                                                    <div className="card-actions justify-end relative -bottom-4">
                                                        <a href="https://github.com/aalnoman10/ArtCraft-School" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaGithub size={14} className="mr-1" />Client</a>
                                                        <a href="https://github.com/aalnoman10/ArtCraft-School-Server" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaGithub size={14} className="mr-1" />Server</a>
                                                        <a href="https://artcraft-school.web.app/" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaExternalLinkAlt size={12} className="mr-1" />Live</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card bg-base-100 shadow-xl">
                            <iframe className="rounded-t-lg h-60" src="https://animal-toys-35bea.web.app/"></iframe>
                            <div className="card-body p-3">
                                <h2 className="card-title font-normal">Animal Toys <span className="text-base font-normal italic">- e-commerce</span></h2>
                                <p>This website is dedicated to providing a wide range of animal toys for children and animal enthusiasts.</p>
                                <div className="card-actions justify-end">
                                    {/* modal 2 */}
                                    <button className="btn btn-primary normal-case" onClick={() => window.my_modal_5.showModal()}>Details</button>
                                    <dialog id="my_modal_5" className="modal">
                                        <form method="dialog" className="modal-box w-11/12 max-w-5xl glass">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <div className="md:flex">
                                                <figure className="flex-1">
                                                    <iframe className="w-full h-96 md:h-full rounded" src="https://animal-toys-35bea.web.app/"></iframe>
                                                </figure>
                                                {/* card */}
                                                <div className="card-body p-0 pt-4 md:p-6 flex-1">
                                                    <h2 className="card-title font-normal">Animal Toys <span className="text-base font-normal italic">- e-commerce</span></h2>
                                                    <p>A full-stack single-page e-commerce Animal Toys web application. Login system with firebase and private root. To add toys after any user login. To see all users in the All-Toys root and the My-Toys root home page, there is the react-tabs, which will show the top toys.</p>
                                                    <h4 className="font-normal mt-2">Technologies Used</h4>
                                                    <div className="space-x-1 space-y-1">
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React.js</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Tailwind CSS</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React icon</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Firebase Authentication</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">express</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Node.js</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">MongoDB</p>
                                                    </div>
                                                    <div className="card-actions justify-end relative -bottom-4">
                                                        <a href="https://github.com/aalnoman10/animal-toys" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaGithub size={14} className="mr-1" />Client</a>
                                                        <a href="https://github.com/aalnoman10/animal-toys-server" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaGithub size={14} className="mr-1" />Server</a>
                                                        <a href="https://animal-toys-35bea.web.app/" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaExternalLinkAlt size={12} className="mr-1" />Live</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card bg-base-100 shadow-xl">
                            <iframe className="rounded-t-lg h-60" src="https://the-china-kitchen.web.app/"></iframe>
                            <div className="card-body p-3">
                                <h2 className="card-title font-normal">The China Kitchen <span className="text-base font-normal italic">- restaurant</span></h2>
                                <p>The project is called &quot;The China Kitchen&quot; and is a web application built with ReactJS.</p>
                                <div className="card-actions justify-end">
                                    {/* modal 2 */}
                                    <button className="btn btn-primary normal-case" onClick={() => window.my_modal_3.showModal()}>Details</button>
                                    <dialog id="my_modal_3" className="modal bg-black bg-opacity-20">
                                        <form method="dialog" className="modal-box w-11/12 max-w-5xl glass">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <div className="md:flex">
                                                <figure className="flex-1">
                                                    <iframe className="w-full h-96 md:h-full rounded" src="https://the-china-kitchen.web.app/"></iframe>
                                                </figure>
                                                {/* card */}
                                                <div className="card-body p-0 pt-4 md:p-6 flex-1">
                                                    <h2 className="card-title font-normal">The China Kitchen <span className="text-base font-normal italic">- restaurant</span></h2>
                                                    <p>A full-stack single-page e-commerce The China Kitchen web application. Login system with firebase and protected route. Any user cannot view chef details without login.</p>
                                                    <h4 className="font-normal mt-2">Technologies Used</h4>
                                                    <div className="space-x-1 space-y-1">
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React.js</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React Bootstrap</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React icon</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React rating</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">React Hot Toast</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Firebase Authentication</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">express</p>
                                                        <p className="bg-slate-800 rounded p-1 w-fit inline-block">Node.js</p>
                                                    </div>
                                                    <div className="card-actions justify-end relative -bottom-4">
                                                        <a href="https://github.com/aalnoman10/The-china-kitchen-client" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaGithub size={14} className="mr-1" />Client</a>
                                                        <a href="https://github.com/aalnoman10/The-china-kitchen-server" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaGithub size={14} className="mr-1" />Server</a>
                                                        <a href="https://the-china-kitchen.web.app/" target="_blank" rel="noreferrer" className="badge badge-outline hover:scale-110 transition duration-500 hover:text-primary"><FaExternalLinkAlt size={12} className="mr-1" />Live</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;