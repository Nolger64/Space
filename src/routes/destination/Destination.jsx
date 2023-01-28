import style from "./Destination.module.css"; //Importando estilos
import MoonImg from "../../assets/destination/image-moon.png"; //Importando imagen de la luna
import MarsImg from "../../assets/destination/image-mars.png"; //Importando imagen de marte
import EuropaImg from "../../assets/destination/image-europa.png"; //Importando imagen de europa
import TitanImg from "../../assets/destination/image-titan.png"; //Importando imagen de titan
import data from "../../data/data.json"; //Importando data de los destinos
import { useState, useEffect } from "react"; //Importando useState y el useEffect
import { motion, useMotionValue, useTransform, animate } from "framer-motion"; //Importando animaciones

const Destination = () => {
  const [select, setSelect] = useState(0); //Estado para seleccionar el destino
  const img = [MoonImg, MarsImg, EuropaImg, TitanImg]; //Array de imagenes
  const [isActive, setIsActive] = useState(select); //Vaiable para comprobar si esta activo un destino

  //Funcion para contar
  const count = useMotionValue(1);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 384400, { duration: 3 });

    return animation.stop;
  }, []);
  //Funcion para seleccionar el destino
  const SelectDestination = (index) => () => {
    setSelect(index);
    setIsActive(index);
  };
  const DescriptionPlanet = () => {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={style.DestinationContentRigthText}
        >
          <h1 className={style.DestinationTittle}>
            {data.destinations[select].name}
          </h1>
          <h3 className={style.DestinationDescription}>
            {data.destinations[select].description}
          </h3>
        </motion.div>
        <hr className={style.DestinationHr} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={style.DestinationTravel}
        >
          <div className={style.DestinationDistance}>
            <p>avg. Distance</p>
            <h3>{data.destinations[select].distance}</h3>
          </div>
          <div className={style.DestinationEst}>
            <p>Est. travel time</p>
            <h3>{data.destinations[select].travel}</h3>
          </div>
        </motion.div>
      </>
    );
  };
  const ImgPlanet = () => {
    return (
      <motion.img
        className={style.ImgPick}
        src={img[select]}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    );
  };

  return (
    <div className={style.DestinationContainer}>
      <div className={style.DestinationContent}>
        <h1 className={style.TittlePick}>
          <p className={style.SubtittlePick}>01</p> pick your destination
        </h1>
        <div className={style.PickContainer}>
          <div className={style.DestinationContentLeft}>
            <ImgPlanet />
          </div>
          <div className={style.DestinationContentRigth}>
            <nav className={style.NavPick}>
              <button
                id="0"
                className={isActive == 0 ? style.BtnPickSelect : style.BtnPick}
                onClick={SelectDestination(0)}
              >
                Moon
              </button>
              <button
                id="1"
                className={isActive == 1 ? style.BtnPickSelect : style.BtnPick}
                onClick={SelectDestination(1)}
              >
                Mars
              </button>
              <button
                id="2"
                className={isActive == 2 ? style.BtnPickSelect : style.BtnPick}
                onClick={SelectDestination(2)}
              >
                Europa
              </button>
              <button
                id="3"
                className={isActive == 3 ? style.BtnPickSelect : style.BtnPick}
                onClick={SelectDestination(3)}
              >
                Titan
              </button>
            </nav>
            <DescriptionPlanet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
