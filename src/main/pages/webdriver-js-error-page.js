import { By as by } from 'selenium-webdriver';
process.env["NODE_CONFIG_DIR"] = __dirname + "./resources/config/";
import config from 'config';
import BasePage from './../base/base-page';

export default class WebDriverJsErrorPage extends BasePage {
	constructor( driver, visit = false ) {
		super( driver, by.css( '#errorpage' ), `${config.get( 'demoURL' )}/error` );
	}
}
