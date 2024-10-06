import { v4 } from 'uuid'
import { getRandomInRange } from './getRandomInRange.js'
import { OBJECT, POSITIONS } from '../constants/index.js'

export const initObjects = (objects) => {
	const { LAT_MAX, LAT_MIN, LONG_MAX, LONG_MIN } = POSITIONS

	for (let i = 0; i < OBJECT.COUNT; i++) {
		const startLat = getRandomInRange(LAT_MIN, LAT_MAX)
		const startLong = getRandomInRange(LONG_MIN, LONG_MAX)
		const endLat = getRandomInRange(LAT_MIN, LAT_MAX)
		const endLong = getRandomInRange(LONG_MIN, LAT_MAX)

		objects.push({
			id: v4(),
			name: `object-${i + 1}`,
			lat: startLat,
			long: startLong,
			direction:
				Math.atan2(endLat - startLat, endLong - startLong) * (180 / Math.PI),
			endLat,
			endLong,
			lastUpdated: Date.now()
		})
	}
}
