import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Routes/Routes'
// BrowserRouter as Router -> Đổi tên thành Router

import { DefaultLayout } from './components/Layout/Layout'
 
const App = () => {
    return (
      <Router>
        <div className='app'>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.Component;
                let Layout = DefaultLayout
                
                if (route.layout) {
                  Layout = route.layout
                } else if (route.layout === null) {
                  Layout = Fragment
                }

                return <Route key={index} path={route.path} element={ 
                    <Layout>
                      <Page />
                    </Layout> 
                  } 
                />
              })}
            </Routes>
        </div>
      </Router>
    )
}

export default App
