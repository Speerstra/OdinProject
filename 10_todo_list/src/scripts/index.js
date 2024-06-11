import '../styles/styles.css';

import MainModel from './model/mainModel';
import MainView from './view/mainView';
import MainController from './controller/mainController';

const model = new MainModel();
const view = new MainView();
const controller = new MainController(model, view); 