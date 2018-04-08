export default class MainLoop {
	constructor(options) {
		this.input = options.input
		this.output = options.output
		this.loop = options.loop
		this.fps = options.fps

		this.going = false
	}

	start() {
		this.going = true
		this._initiateLoop()
	}

	async _initiateLoop() {
		this.loopInterval = setInterval(() => {
			if (this.going) {
				var frame = this.input.getFrame();
				frame = this.loop(frame);
				this.output.show(frame);
			} else {
				clearInterval(this.loopInterval)
			}
		}, 1000 / this.fps)
	}

	stop() {
		this.going = false
	}

	pause(seconds) {
		this.stop();
		setTimeout(function() {
			this.start()
		}, seconds * 1000);
	}
}