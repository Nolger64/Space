import data from "../../data/data.json"; // import data from json file
import { useState } from "react"; // import useState hook
import { motion } from "framer-motion"; // import motion from framer-motion
import style from "./Technology.module.css"; // import styles
import ImgTechnology1 from "../../assets/technology/image-launch-vehicle-landscape.jpg"; // import image
import ImgTechnology1Port from "../../assets/technology/image-launch-vehicle-portrait.jpg"; // import image
import ImgTechnology2 from "../../assets/technology/image-space-capsule-landscape.jpg"; // import image
import ImgTechnology2Port from "../../assets/technology/image-space-capsule-portrait.jpg"; // import image
import imgTechnology3 from "../../assets/technology/image-spaceport-landscape.jpg"; // import image
import imgTechnology3Port from "../../assets/technology/image-spaceport-portrait.jpg"; // import image

const Technology = () => {
  const [selected, setSelected] = useState(0); // useState hook for selected technology
  const imgTechnology = [ImgTechnology1, ImgTechnology2, imgTechnology3]; // array of images
  const imgTechnologyPort = [
    ImgTechnology1Port,
    ImgTechnology2Port,
    imgTechnology3Port,
  ]; // array of images portrait

const changeTech = (index) => () => setSelected(index); // function to change the state

  const DescriprionTechnology = () => {
    return (
        <>
            <h3 className={style.TechLeyenda}>The terminology__</h3>
            <h1 className={style.TechTittleDes}>{data.technology[selected].name}</h1>
            <p className={style.TechDes}>{data.technology[selected].description}</p>
        </>
    )
  };
  const ImgTechnologyrender = () => {
    return (
        <>
            <img src={imgTechnologyPort[selected]} className={style.TechImg} />
        </>
    )
  };
  return (
    <div className={style.ContainerTechnolgy}>
      <div className={style.Technolgy}>
        <div className="">
          <h1 className={style.TechnolgyTittle}><p className={style.TechnolgySubtittle}>03</p>space launch 101</h1>
        </div>
        <div className={style.ContainerTechnolgyDes}>
          <div className={style.TechnolgyDesContainer}>
            <div className={style.TechnolgyBtnContainer}>
              <button onClick={changeTech(0)} className={selected == 0 ? style.TechnologyBtnSelected : style.TechnologyBtn}>1</button>
              <button onClick={changeTech(1)} className={selected == 1 ? style.TechnologyBtnSelected : style.TechnologyBtn}>2</button>
              <button onClick={changeTech(2)} className={selected == 2 ? style.TechnologyBtnSelected : style.TechnologyBtn}>3</button>
            </div>
            <div>
              <DescriprionTechnology />
            </div>
          </div>
          <div className={style.TechnolgyDesContainer} >
            <ImgTechnologyrender />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
