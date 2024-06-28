import { HeaderOnly } from "../components/Layout/Layout"
import Following from "../Pages/Following/Following"
import Home from "../Pages/Home/Home"
import Search from "../Pages/Search/Search"
import Upload from "../Pages/Upload/Upload"
import Profile from "../Pages/Profile/Profile"

const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/follow', Component: Following},
    { path: '/:nickname', Component: Profile},
    { path: '/upload', Component: Upload, layout: HeaderOnly},
    { path: '/search', Component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }