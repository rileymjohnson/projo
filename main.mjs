import MainLoop from "./mainLoop"
import Camera from "./inputs/camera"
import Image from "./inputs/image"
import Window from "./outputs/window"

import testLoop from "./loops/testLoop"
import removeShadow from "./loops/removeShadow/index"

let camera = new Camera({
	deviceId: 0
});

let image = new Image({
	image: "./data/shadow.jpg"
})

let window = new Window({
	name: "Main"
});

let mainLoop = new MainLoop({
	input: image,
	output: window,
	loop: removeShadow,
	fps: 30
})

mainLoop.start()
