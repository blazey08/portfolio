import placeholder from "../images/placeholder.jpeg"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto px-20 py-10 md:flex-row flex-col item-center ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                    {/* Header */}
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Yu Hui.
                        <br className="hidden lg:inline block" />
                        Leader. Engineer. Learner.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Blah blah blah, I'll think about this and insert a smart comment hoho.
                    </p>

                    {/* Links to other pages */}
                    <div className="flex gap-4 justify-items-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-lavendar-600 rounded text-lg"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-lavendar-600 rounded text-lg"
                        >
                            Past Works
                        </a>
                    </div>

                    {/* Profile Picture */}
                    <div className="col-end-auto">
                        <img
                            className="object-cover object-centre rounded"
                            alt="hero"
                            src={placeholder} />
                    </div>
                </div>
            </div>

        </section>
    )

}