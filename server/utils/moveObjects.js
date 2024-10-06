import { OBJECT, POSITIONS } from '../constants/index.js'

export const moveObjects = (objects) => {
	const { LAT_MAX, LAT_MIN, LONG_MAX, LONG_MIN } = POSITIONS

	objects.forEach((obj) => {
		const reachedTarget =
			Math.abs(obj.lat - obj.endLat) < 0.0001 &&
			Math.abs(obj.long - obj.endLong) < 0.0001

		if (!reachedTarget) {
			const directionRad = (obj.direction * Math.PI) / 180

			const newLat = obj.lat + OBJECT.SPEED * Math.cos(directionRad)
			const newLong = obj.long + OBJECT.SPEED * Math.sin(directionRad)

			if (
				newLat >= LAT_MIN &&
				newLat <= LAT_MAX &&
				newLong >= LONG_MIN &&
				newLong <= LONG_MAX
			) {
				obj.lat = newLat
				obj.long = newLong
				obj.lastUpdated = Date.now()
			}
		}
	})
}
