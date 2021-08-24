import { createElement } from 'react'
import { render } from 'react-dom'

import App from './components/App'

const rootNode = document.getElementById('root')
const el = createElement(App)

if (rootNode) {
    render(el, rootNode)
}
