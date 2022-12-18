import './util.js';

import {createThumbnails} from './thumbnails.js';
import {setUserFormSubmit, closeUploadFileForm} from './form.js';
import {getData} from './api.js';
import './pictures.js';
import {showError, showSuccess} from './alerts.js';


getData(createThumbnails);

setUserFormSubmit(() => {
  closeUploadFileForm();
  showSuccess();
}, () => {
  closeUploadFileForm(null, false);
  showError();
});
