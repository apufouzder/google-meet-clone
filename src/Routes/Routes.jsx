import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home"
import AskToJoin from "../pages/AskToJoin/AskToJoin"
import Meeting from "../pages/Meeting/Meeting"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/askToJoin",
        element: <AskToJoin />
    },
    {
        path: "/meeting",
        element: <Meeting />
    }
]);

export default router;