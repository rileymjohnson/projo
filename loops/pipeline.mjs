export default function(...loops) {
	return function(...frames) {
		loops.forEach((loop) => {
			frame = loop(frame)
		})
		return frame
	}
}