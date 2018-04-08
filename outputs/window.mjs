import cv from 'opencv4nodejs'

export default class Window {
	constructor(options) {
		this.name = options.name;
	}

	show(frame) {
		cv.imshow(this.name, frame);
		cv.waitKey(1);
	}
}