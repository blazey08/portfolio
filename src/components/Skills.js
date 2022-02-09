import { skills } from "../data"

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb2-20">
                    <span class="material-icons">
                        language
                    </span>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here are some of the programming languages that I have used previously, as well as some that I have been trying to learn. 
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {
                        skills.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <span class="material-icons">
                                        check_circle_outline
                                    </span>

                                    <span className="title-font font-medium text-white">
                                        {skill.skill}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    
    );
}