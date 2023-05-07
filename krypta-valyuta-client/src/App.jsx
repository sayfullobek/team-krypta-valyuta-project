import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Register} from "./pages/auth/Register";
import {UserPanel} from "./pages/user/UserPanel";
import {UserLayout} from "./layout/UserLayout";
import {NotFoundPages} from "./pages/NotFoundPages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<UserLayout/>}>
                        <Route index element={<UserPanel/>}/>
                    </Route>
                    <Route path={"/auth/register"} element={<Register/>}/>
                    <Route path={"*"} element={<NotFoundPages/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
