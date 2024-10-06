import { objectStore } from '@/store/objects.store'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

export const useConnectToObjects = () => {
	useEffect(() => {
		const socket = io(import.meta.env.VITE_HOST)

		socket.on('initialObjects', (initialObjects) => {
			objectStore.setObjects(initialObjects)
		})

		socket.on('updateObjects', (updatedObjects) => {
			objectStore.setObjects(updatedObjects)
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	return objectStore.objects
}
