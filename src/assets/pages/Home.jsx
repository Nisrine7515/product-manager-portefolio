import Footer from "../components/Footer";
import Skills from "../components/Skills";
import MyProjects from "../components/MyProjects";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="about-me">
        <h1 className="aboiut-me-description">
          <span>
            I'm Nisrine and i'm studying software engineering and product
            managment with a background in psychology and public arts policy.
            What drives me in this field is the ability to turn ideas into real,
            tangible solutions while maintaining full autonomy in the process.
          </span>{" "}
          <span>
            Coming from disciplines that blend creativity and human
            understanding, I wanted to strengthen my technical foundation, to
            build products that are not only functional but also meaningful.
          </span>{" "}
          <span>
            I’ve been looking to develop hard skills that will benefit me
            throughout my life, both personally and professionally.
          </span>{" "}
          <span>
            I hope the atmosphere of my portfolio also conveys my passion for
            literature and history.
          </span>{" "}
          <span>
            I believe that software engineering and product managment is an art,
            one through which we can tell countless stories.
          </span>
        </h1>
        <div className="home-buttons">
          <div>
            <Skills />
          </div>
          <div>
            <MyProjects />
          </div>
        </div>
      </div>

      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
