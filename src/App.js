import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import LeftNav from "./components/LeftNav";

export default function App() {
  return (
    <main className="bg-pink-900">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
      </head>

      <body>
        {/* Navbar*/}
        <Navbar />
        <LeftNav />

        {/* Pages */}
        <div className=" w-400 mx-auto justify-end">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </body>
    </main>

  );
}
