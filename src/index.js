import ReactDOM from 'react-dom';
import Provider from './contaxt/provider';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    

   <Provider>
       <App />
    </Provider>

   
, document.getElementById('root'));
