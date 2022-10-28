import { motion } from "framer-motion";
import Deepak from "../assets/deepak.jpeg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";

function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, nsition: { duration: 1 } }}
        animate={{ opacity: 1, nsition: { duration: 1 } }}
        exit={{ opacity: 0, nsition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <img
          src={Deepak}
          className="rounded-circle mx-auto d-block"
          height="250px"
          style={{ marginTop: "70px" }}
        />

        <div
          className="text-center addFont mt-3 heading-color"
          style={{ fontWeight: "600", fontSize: "30px" }}
        >
          Deepak Kumar
        </div>
        <div
          className="text-center addFont sub-heading-color"
          style={{ fontWeight: "100", fontSize: "20px", marginTop: "-6px" }}
        >
          Full Stack Developer
        </div>

        <div className="box mt-2">
          <div className="d-flex justify-content-evenly">
            <div
              className="mouse-pointer"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/deepakmp444")
              }
            >
              <img src={Linkedin} alt="LinkedIn" />
            </div>
            <div
              className="mouse-pointer"
              onClick={() => openInNewTab("https://github.com/deepakmp444")}
            >
              <img src={Github} alt="Github" />
            </div>
            <div
              className="mouse-pointer"
              onClick={() => openInNewTab("https://twitter.com/deepakmp444")}
            >
              <img src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
