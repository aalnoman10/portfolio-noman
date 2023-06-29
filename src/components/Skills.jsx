import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3, TbBrandFirebase, TbBrandJavascript, TbBrandMongodb, TbBrandTailwind } from 'react-icons/tb'
import { RiBootstrapLine } from 'react-icons/ri'
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';

const Skills = () => {
    return (
        <div className='bg-slate-900 text-base-content'>
            <div className="max-w-screen-lg md:h-[91vh] mx-auto py-10 px-6">
                <h3 className="text-3xl text-center mb-8 md:mb-0">Skills</h3>
                <div className="grid place-items-center w-full h-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5" title='I have 3 years+ experiece'>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <AiOutlineHtml5 size={30} />
                                <h4>HTML</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="90" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3" title='I have 3 years+ experiece'>
                            <div className="flex justify-between items-center">
                                <TbBrandCss3 size={30} />
                                <h4>CSS</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="80" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3" title='I have 3 years+ experiece'>
                            <div className="flex justify-between items-center">
                                <RiBootstrapLine size={30} />
                                <h4>Bootstrap</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="65" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <TbBrandTailwind size={30} />
                                <h4>Tailwind CSS</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="75" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <TbBrandJavascript size={30} />
                                <h4>JS</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="70" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <FaReact size={30} />
                                <h4>REACT</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="80" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <TbBrandFirebase size={30} />
                                <h4>Firebase</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="85" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <SiExpress size={30} />
                                <h4>Express</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="90" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <FaNodeJs size={30} />
                                <h4>Node js</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="45" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <TbBrandMongodb size={30} />
                                <h4>Mongobd</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="57" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <BsGit size={30} />
                                <h4>Git</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="55" max="100"></progress>
                        </div>
                        <div className="outline-dashed outline-1 outline-slate-500 hover:outline rounded-sm p-3">
                            <div className="flex justify-between items-center">
                                <FiGithub size={30} />
                                <h4>GitHub</h4>
                            </div>
                            <progress className="progress progress-primary w-48 md:w-60" value="70" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;