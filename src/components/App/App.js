import React from 'react'
import { Wrapper, Header, Nav } from './App.styles'
import { About, Home } from '../../pages'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App({ globalStyle: GlobalStyles }) {
    return (
        <>
            <GlobalStyles />
            <Router>
                <Wrapper>
                    <Header>
                        <Nav>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                        </Nav>
                    </Header>

                    <Switch>
                        <Route path='/about'>
                            <About />
                        </Route>

                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </>
    )
}
export default App
