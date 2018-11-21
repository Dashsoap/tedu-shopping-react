import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRegistered } from '@fortawesome/free-solid-svg-icons';

export default () => {
	library.add(faSearch);
	library.add(faRegistered);
};
