import '../styles/styles.css';

import MainModel from './model/model';
import MainView from './view/view';
import MainController from './controller/controller';

const model = new MainModel();
const view = new MainView();
const controller = new MainController(model, view); 