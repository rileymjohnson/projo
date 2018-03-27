const cv = require('opencv4nodejs');

const devicePort = 0;
const wCap = new cv.VideoCapture(devicePort);

while (true) {
	const frame = wCap.read();
	cv.imshow('a window name', frame);
	cv.waitKey(1);
}