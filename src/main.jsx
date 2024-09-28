import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import {Store} from "./redux/Store.jsx"
const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(
  <Provider store = {Store}>
    <App/>
  </Provider>
)
 export default createRoot;