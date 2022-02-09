import {AiFillHome} from 'react-icons/ai'

export default function Navbar() {
    return (
        <>
        <div
            className="h-16 px-24 flex justify-end items-center overflow-hidden bg-pink-900"
            id="home">
            <a className="mr-auto mt-2 hover:text-white" href="#home">
                Yu Hui
            </a>
            <h1>
                Navbar is here
            </h1>


        </div>
        </>
    );
}