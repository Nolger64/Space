import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.HomeContainer}>
      <div className={style.HomeContent}>
        <div className={style.HomeContentLeft}>
          <h3 className={style.HomeContenSubtittle}>so, you want to travel to</h3>
          <h1 className={style.HomeContenTittle}>space</h1>
          <p className={style.HomeContentPar}>
            Let's face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kinf of the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={style.HomeContentRigth}>
          <button className={style.HomeContentRigthBtn}>Explore</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
