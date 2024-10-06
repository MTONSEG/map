import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import authRoutes from './routes/auth.js'
import { checkObjects } from './utils/checkObjects.js'
import { initObjects } from './utils/initObjects.js'
import { moveObjects } from './utils/moveObjects.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(authRoutes)

const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: '*'
	}
})

const objects = []

initObjects(objects)

const updateObjects = () => {
	moveObjects(objects)

	if (checkObjects(objects)) {
		objects.length = 0
		initObjects(objects)
	}

	io.emit('updateObjects', objects)
}

setInterval(updateObjects, 3000)

io.on('connection', (socket) => {
	console.log('Client connected')

	socket.emit('initialObjects', objects)

	socket.on('disconnect', () => {
		console.log('Client disconnected')
	})
})

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
