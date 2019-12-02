const http = require('http');
import axios from 'axios';
const querystring = require("querystring");
var env = "test";
import Common from '../../Common';
import { ipcRenderer } from 'electron';
var upnp = require('node-upnp-utils');
import store from '../store';

var upnp = require('node-upnp-utils');
var common = {
	searching: false,

	log(...args) {
		console.log(Date.now() + " | " + args.join('==='));
	},

	stop() {
		return new Promise((resolve, reject) => {
			upnp.stopDiscovery(() => {
				resolve()
			});
		}).catch(e => {
			reject();
		})
	},

	discovery(mac) {
		// if (this.searching) {
		// 	common.log("Searching.....");
		// 	reject('searching');
		// }
		// this.searching = true;
		if (common.timeout) {
			clearTimeout(common.timeout);
			common.timeout = null;
		}
		return this.stop().then(res => {
			return new Promise((resolve, reject) => {
				common.log("Start to discovery poc miner.....");

				try {
					upnp.startDiscovery({
						st: 'poc:minner',
						mx: 3
					});
				} catch (e) {
					console.log("throw", e);
					throw e;
				}

				common.timeout = setTimeout(() => {
					upnp.stopDiscovery(() => {
						common.log('stopDiscovery');
						// this.searching = false;
						var device_list = upnp.getActiveDeviceList();
						if (mac) {
							mac = mac.toLowerCase();
							device_list = device_list.filter(item => {
								let serialNumber = item.device.serialNumber.toLowerCase();
								return serialNumber.indexOf(mac) > -1;
							});
						}

						common.log(device_list.length + ' devices (services) were found.');
						resolve(device_list);
					});
				}, 3000);

				if (!common.addEventBinded) {
					common.addEventBinded = true;
					upnp.on('added', (device) => {
						common.log("Discovery device:", JSON.stringify(device));
					});
				}
			})
		}).catch(e => {
			// this.searching = false;
			return Promise.reject('search poc miner catch...', e);
		})
	},
};

export default common;