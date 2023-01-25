import style from "./Crew.module.css"; // importo el css
import data from "../../data/data.json"; // importo el json con los datos
import { useState } from "react"; // importo el useState
import imgDouglas from "../../assets/crew/image-douglas-hurley.png"; // importo las imagenes de douglas
import imgMark from "../../assets/crew/image-mark-shuttleworth.png"; // importo las imagenes de mark
import imgVictor from "../../assets/crew/image-victor-glover.png"; // importo las imagenes de victor
import imgAnousheh from "../../assets/crew/image-anousheh-ansari.png"; // importo las imagenes de anousheh

const Crew = () => {
  const [select, setSelect] = useState(0); // creo el estado para seleccionar el miembro del equipo
  const img = [imgDouglas, imgMark, imgVictor, imgAnousheh]; // creo un array con las imagenes
  return (
    <div className={style.CrewContainer}>
      <div className={style.Crew}>
        <h1 className={style.TittleCrew}>
          <p className={style.SubTittleCrew}>02 </p>meet your crew
        </h1>
        <div className={style.CrewInfoContainer}>
          <div className={style.CrewLeftContainer}>
            <div className={style.InfoCrewContainer}>
              <h2 className={style.RolCrew}>{data.crew[select].role}</h2>
              <h1 className={style.NameCrew}>{data.crew[select].name}</h1>
              <h3 className={style.BioCrew}>{data.crew[select].bio}</h3>
            </div>
            <div className={style.CrewBtnContainer}>
              <button className={style.CrewBtnSelected}></button>
              <button className={style.CrewBtn}></button>
              <button className={style.CrewBtn}></button>
              <button className={style.CrewBtn}></button>
            </div>
          </div>
          <div className={style.CrewRigthContainer}>
            <img src={img[select]} className={style.CrewImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crew;
