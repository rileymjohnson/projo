import cv from 'opencv4nodejs'

export default class Camera {
	constructor(options) {
		this.deviceId = options.deviceId;
		this.camera = new cv.VideoCapture(this.deviceId);
	}

	getFrame() {
		return this.camera.read();
	}
}