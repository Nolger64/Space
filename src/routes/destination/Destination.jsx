import style from "./Destination.module.css"; //Importando estilos
import MoonImg from "../../assets/destination/image-moon.png"; //Importando imagen de la luna
import MarsImg from "../../assets/destination/image-mars.png"; //Importando imagen de marte
import EuropaImg from "../../assets/destination/image-europa.png"; //Importando imagen de europa
import TitanImg from "../../assets/destination/image-titan.png"; //Importando imagen de titan
import data from "../../data/data.json"; //Importando data de los destinos
import { useState } from "react"; //Importando useState

const Destination = () => {
  const [select, setSelect] = useState(0); //Estado para seleccionar el destino
  const img = [MoonImg, MarsImg, EuropaImg, TitanImg]; //Array de imagenes
  return (
    <div className={style.DestinationContainer}>
      <div className={style.DestinationContent}>
        <h1 className={style.TittlePick}>
          <p className={style.SubtittlePick}>01</p> pick your destination
        </h1>
        <div className={style.PickContainer}>
          <div className={style.DestinationContentLeft}>
            <img className={style.ImgPick} src={img[select]} />
          </div>
          <div className={style.DestinationContentRigth}>
            <nav className={style.NavPick}>
              <button className={style.BtnPick}>Moon</button>
              <button className={style.BtnPick}>Mars</button>
              <button className={style.BtnPick}>Europa</button>
              <button className={style.BtnPick}>Titan</button>
            </nav>
            <div>
              <h1>{data.destinations[select].name}</h1>
              <h3>{data.destinations[select].description}</h3>
            </div>
            <hr />
            <div>
              <div>
                <p>avg. Distance</p>
                <h3>{data.destinations[select].distance}</h3>
              </div>
              <div>
                <p>Est. travel time</p>
                <h3>{data.destinations[select].travel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
