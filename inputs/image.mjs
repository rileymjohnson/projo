import cv from 'opencv4nodejs'

export default class Image {
	constructor(options) {
		this.image = options.image
	}

	getFrame() {
		return cv.imread(this.image)
	}
}