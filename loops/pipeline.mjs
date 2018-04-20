export default function(...loops) {
	return function(frame) {
		loops.forEach((loop) => {
			frame = loop(frame)
			console.log("frame", frame)
		})
		return frame
	}
}