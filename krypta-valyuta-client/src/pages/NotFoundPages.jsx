import {Link} from "react-router-dom";

export const NotFoundPages = () => {
    const token = localStorage.getItem("token")
    return (
        <div>
            404
            <Link to={"/"}>
                orqaga
            </Link>
        </div>
    )
}