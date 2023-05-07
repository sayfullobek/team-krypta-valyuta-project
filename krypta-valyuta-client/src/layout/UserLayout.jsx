import {NotFoundPages} from "../pages/NotFoundPages";
import {Outlet} from 'react-router-dom'

export const UserLayout = () => {
    const token = localStorage.getItem("token")
    return (
        <div>
            <Outlet/>
        </div>
    )
}