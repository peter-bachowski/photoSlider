import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './modules/addBaseElements';
import formatContentArea from './modules/formatContentArea';
import loadPhotos from './modules/loadPhotos';

addBaseElements();
formatContentArea();
loadPhotos();