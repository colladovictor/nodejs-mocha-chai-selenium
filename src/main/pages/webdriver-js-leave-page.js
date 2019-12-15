require("babel-core").transform("code", options);
import { By as by } from 'selenium-webdriver';
process.env["NODE_CONFIG_DIR"] = __dirname + "./resources/config/";
import config from 'config';
import BasePage from './../base/base-page';

export default class WebDriverJsLeavePage extends BasePage {
	constructor( driver ) {
		super( driver, by.css( '#leavepage' ), `${config.get( 'demoURL' )}/leave` );
	}

	async navHome() {
		await this.driver.findElement( by.css( '#homelink' ) ).click();
		return this.driver.switchTo().alert().then( function( alert ) {
			return alert.accept();
		} );
	}
}