import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './components/Main'

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
