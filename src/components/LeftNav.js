import { BiHomeAlt, BiGridAlt,BiMessageDetail, BiUser,BiWorld  } from 'react-icons/bi'
import { BsFillCircleFill } from 'react-icons/bs'



export default function LeftNav() {

    return (
        <>

            <div className="absolute w-16 left-8 h-screen">
                <div className="flex flex-col w-16 fixed justify-between items-center h-full">
                    <a href="#about">
                        <BiHomeAlt className="icon hover: bg-black-700" color="white" size="20px" />
                    </a>

                    <div className="flex flex-col gap-8 mt-20">
                        <a href="#about">
                            <BiUser className="icon icon-current icon-white-700" color="white" size="20px"/>
                        </a>
                        <a href="#projects">
                            <BiGridAlt className="icon hover:bg-white-700" color="white" size="20px"/>
                        </a>
                        <a href="#skills">
                            <BsFillCircleFill className="icon hover:bg-white-700" color="white" size="20px"/>
                        </a>
                        <a href="#contact">
                            <BiMessageDetail className="icon hover:bg-white-700" color="white" size="20px" />
                        </a>
                    </div>

                    <a
                        href="www.google.com"
                        target="blank"
                        rel="noreferrer"
                        className="mt-20">
                        <BiWorld className=" hover:bg-white-700 icon" color="white" size="20px"/>
                    </a>
                </div>
            </div>

        </>
    )

}