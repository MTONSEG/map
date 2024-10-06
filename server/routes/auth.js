import { Router } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const router = Router()
const UNIQUE_KEY = process.env.UNIQUE_KEY

const generateTokens = (key) => {
	const access = jwt.sign({ key }, process.env.SECRET_ACCESS_KEY, {
		expiresIn: '15m'
	})
	const refresh = jwt.sign({ key }, process.env.SECRET_REFRESH_KEY, {
		expiresIn: '30d'
	})
	return { access, refresh }
}

router.post('/api/auth', (req, res) => {
	const authHeader = req.headers['authorization']
	const key = authHeader && authHeader.split(' ')[1]

	if (!key) {
		return res
			.status(401)
			.json({ message: 'Authorization header is missing or invalid' })
	}

	if (key !== UNIQUE_KEY) {
		return res.status(403).json({ message: 'Invalid key' })
	}

	res.json(generateTokens(key))
})

router.post('/api/verify-access', (req, res) => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (!token) {
		return res.sendStatus(401) // Unauthorized
	}

	jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err) => {
		if (err) {
			return res.sendStatus(403) // Forbidden
		}

		res.json({ message: 'Access token is valid' })
	})
})

router.post('/api/refresh', (req, res) => {
	const authHeader = req.headers['authorization']
	const refreshToken = authHeader && authHeader.split(' ')[1]

	if (!refreshToken) {
		return res.sendStatus(401) // Unauthorized
	}

	jwt.verify(refreshToken, process.env.SECRET_REFRESH_KEY, (err, user) => {
		if (err) {
			return res.sendStatus(403) // Forbidden
		}
		const tokens = generateTokens(user.key)
		res.json(tokens)
	})
})

export default router
