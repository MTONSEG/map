import { TIME } from '../constants/index.js'

export const checkObjects = (objects) => {
	const now = Date.now()

	return objects.every((obj) => now - obj.lastUpdated > TIME.DIE)
}
