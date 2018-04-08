import MainLoop from "./mainLoop"
import Camera from "./inputs/camera"
import Window from "./outputs/window"
import testLoop from "./loops/testLoop"

let camera = new Camera({
	deviceId: 0
});
let window = new Window({
	name: "Main"
});

let mainLoop = new MainLoop({
	input: camera,
	output: window,
	loop: testLoop,
	fps: 30
})

mainLoop.start()

console.log("its still going")