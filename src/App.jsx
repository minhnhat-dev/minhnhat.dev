import React, { useState, Suspense } from "react"
import Topbar from "./components/topbar/Topbar"
import Menu from "./components/menu/Menu"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const CV = React.lazy(() => import("./pages/CV/CV"))

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Suspense fallback={<p>Loading....</p>}>
            <Router>
                <div className="app">
                    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/cv" component={CV} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </Suspense>
    )
}

export default App
