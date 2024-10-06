import { fetcher } from '@/services/axios.config'

export const authService = {
	signIn: (key: string) =>
		fetcher.post('/api/auth', null, {
			headers: {
				Authorization: `Bearer ${key}`
			}
		}),

	verifyAccess: (token: string) =>
		fetcher.post('/api/verify-access', null, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}),

	refreshToken: (token: string) =>
		fetcher.post('/api/refresh', null, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
}
