import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3, TbBrandFirebase, TbBrandJavascript, TbBrandMongodb, TbBrandTailwind } from 'react-icons/tb'
import { RiBootstrapLine } from 'react-icons/ri'
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { motion } from "framer-motion"
import { CardAnimation } from '../utilities/Animation';

const Skills = () => {
    return (
        <motion.div id='skill' className='bg-slate-900 text-base-content'
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={{ once: false, amount: 1, }}
            transition={{ staggerChildren: 0.5 }}
        >
            <div className="max-w-screen-lg llg:min-h-[91vh] mx-auto py-10 px-6">
                <h3 className="text-3xl text-center mb-8">Skills</h3>
                <div className="grid place-items-center w-full h-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5">
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3" title='I have 3 years+ experiece'
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <AiOutlineHtml5 size={30} />
                                <h4>HTML</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="90" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3" title='I have 3 years+ experiece'
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <TbBrandCss3 size={30} />
                                <h4>CSS</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="80" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <RiBootstrapLine size={30} />
                                <h4>Bootstrap</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="65" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <TbBrandTailwind size={30} />
                                <h4>Tailwind CSS</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="75" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3" title='I have 3 years+ experiece'
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <TbBrandJavascript size={30} />
                                <h4>JS</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="70" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <FaReact size={30} />
                                <h4>REACT</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="80" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <TbBrandFirebase size={30} />
                                <h4>Firebase</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="85" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <SiExpress size={30} />
                                <h4>Express</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="90" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <FaNodeJs size={30} />
                                <h4>Node js</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="45" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3"
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <TbBrandMongodb size={30} />
                                <h4>Mongobd</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="57" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3" title='I have a years+ experiece'
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <BsGit size={30} />
                                <h4>Git</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="55" max="100"></progress>
                        </motion.div>
                        <motion.div className="outline-dashed outline-1 outline-slate-500 transition hover:outline rounded-sm p-3" title='I have a years+ experiece'
                            variants={CardAnimation}
                        >
                            <div className="flex justify-between items-center">
                                <FiGithub size={30} />
                                <h4>GitHub</h4>
                            </div>
                            <progress className="progress progress-primary w-40 sm:w-64 md:w-48 lg:w-72" value="70" max="100"></progress>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default Skills;