import style from "./Crew.module.css"; // importo el css
import data from "../../data/data.json"; // importo el json con los datos
import { useState, useEffect } from "react"; // importo el useState y useEffect
import { motion } from "framer-motion"; // importo el motion de framer
import imgDouglas from "../../assets/crew/image-douglas-hurley.png"; // importo las imagenes de douglas
import imgMark from "../../assets/crew/image-mark-shuttleworth.png"; // importo las imagenes de mark
import imgVictor from "../../assets/crew/image-victor-glover.png"; // importo las imagenes de victor
import imgAnousheh from "../../assets/crew/image-anousheh-ansari.png"; // importo las imagenes de anousheh
import { useScreen } from "../../hooks/useScreen"; // importo el hook para saber el ancho de la pantalla

const Crew = () => {
  const [select, setSelect] = useState(0); // creo el estado para seleccionar el miembro del equipo
  const img = [imgDouglas, imgMark, imgVictor, imgAnousheh]; // creo un array con las imagenes
  const changeCrew = (index) => () => setSelect(index); // creo una funcion para cambiar el estado
  const width = useScreen().width; // creo una variable para saber el ancho de la pantalla
  const [imgCrew, setImgCrew] = useState(img[select]); // creo una variable para saber que imagen mostrar

  const ImgCrew = () => {
    return (
      <motion.img
        className={style.CrewImg}
        src={img[select]}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    );
  }; // creo el componente para mostrar la imagen
  const DescriptionCrew = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={style.InfoCrewContainer}
        transition={{ duration: 1 }}
      >
        <h2 className={style.RolCrew}>{data.crew[select].role}</h2>
        <h1 className={style.NameCrew}>{data.crew[select].name}</h1>
        <h3 className={style.BioCrew}>{data.crew[select].bio}</h3>
      </motion.div>
    );
  }; // creo el componente para mostrar la descripcion
  return (
    <div className={style.CrewContainer}>
      <div className={style.Crew}>
        <h1 className={style.TittleCrew}>
          <p className={style.SubTittleCrew}>02 </p>meet your crew
        </h1>
        {width > 500 ? (
          <div className={style.CrewInfoContainer}>
            <div className={style.CrewLeftContainer}>
              <DescriptionCrew />
              <div className={style.CrewBtnContainer}>
                <button
                  onClick={changeCrew(0)}
                  className={
                    select == 0 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
                <button
                  onClick={changeCrew(1)}
                  className={
                    select == 1 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
                <button
                  onClick={changeCrew(2)}
                  className={
                    select == 2 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
                <button
                  onClick={changeCrew(3)}
                  className={
                    select == 3 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
              </div>
            </div>
            <div className={style.CrewRigthContainer}>
              <ImgCrew />
            </div>
          </div>
        ) : (
          <div>
            <div className={style.CrewRigthContainer}>
              <ImgCrew />
            </div>
            <div className={style.CrewLeftContainer}>
              <div className={style.CrewBtnContainer}>
                <button
                  onClick={changeCrew(0)}
                  className={
                    select == 0 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
                <button
                  onClick={changeCrew(1)}
                  className={
                    select == 1 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
                <button
                  onClick={changeCrew(2)}
                  className={
                    select == 2 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
                <button
                  onClick={changeCrew(3)}
                  className={
                    select == 3 ? style.CrewBtnSelected : style.CrewBtn
                  }
                ></button>
              </div>
              <div className={style.InfoCrewContainer}>
                <DescriptionCrew />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Crew;
