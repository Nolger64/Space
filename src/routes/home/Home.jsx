import style from "./Home.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <div className={style.HomeContent}>
        <div className={style.HomeContentLeft}>
          <h3 className={style.HomeContenSubtittle}>
            so, you want to travel to
          </h3>
          <h1 className={style.HomeContenTittle}>space</h1>
          <p className={style.HomeContentPar}>
            Let's face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kinf of the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={style.HomeContentRigth}>
          <Link to={"/destination"}>
            <motion.button
              className={style.HomeContentRigthBtn}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ cursor: "pointer" }}
            >
              Explore
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
