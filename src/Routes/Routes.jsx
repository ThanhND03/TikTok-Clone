import { HeaderOnly } from "../components/Layout/Layout"
import Following from "../Pages/Following/Following"
import Home from "../Pages/Home/Home"
import Search from "../Pages/Search/Search"
import Upload from "../Pages/Upload/Upload"
import Profile from "../Pages/Profile/Profile"

import routesConfig from '~src/config/routes'

const publicRoutes = [
    { path: routesConfig.home, Component: Home },
    { path: routesConfig.following, Component: Following},
    { path: routesConfig.profile, Component: Profile},
    { path: routesConfig.upload, Component: Upload, layout: HeaderOnly},
    { path: routesConfig.search, Component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }