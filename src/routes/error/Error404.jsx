import style from "./Error404.module.css";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className={style.ContainerError}>
            <h1 className={style.ErrorTittle}>404</h1>
            <h2>Page not found</h2>
            <p>It looks like you entered a wrong url. </p>
            <Link to='/' className={style.ErrorBtn}>Ir A inicio ➡️</Link>
        </div>
    )
}
export default (Error404)