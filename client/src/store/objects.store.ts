import type { IClientObject, IServerObject } from '@/types'
import { makeAutoObservable } from 'mobx'

class ObjectStore {
	objects: IClientObject[] = []
	lostTime: number = 3000

	constructor() {
		makeAutoObservable(this)
	}

	setObjects(objects: IServerObject[]): void {
		const now = Date.now()

		this.objects = objects.map((object) => {
			const isLost = now - object.lastUpdated > this.lostTime
			return { ...object, isLost }
		})
	}
}

export const objectStore = new ObjectStore()
