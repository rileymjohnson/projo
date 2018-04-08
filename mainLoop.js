class MainLoop {
	constructor(options) {
		this.input = options.input
		this.output = options.output
		this.loop = options.loop
		this.fps = options.fps

		this.going = false
	}

	start() {
		this.going = true
		this.initiateLoop()
	}

	async initiateLoop() {
		this.loopInterval = setInterval(function() {
			if (this.going) {
				var frame = this.input.getFrame();
				frame = this.loop(frame);
				output.show(frame);
			} else {
				clearInterval(this.loopInterval)
			}
		}, 1000 / fps)
	}

	stop() {
		this.going = false
	}

	pause (seconds) {
		this.stop();
		setTimeout(function() {
			this.start()
		}, seconds * 1000);
	}
}