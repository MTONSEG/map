import { LS_KEY } from '@/constants'
import { authService } from '@/services/auth.service'
import { makeAutoObservable } from 'mobx'

class AuthStore {
	isLoading: boolean = true
	isError: boolean = false
	isAuth: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(isAuth: boolean): void {
		this.isAuth = isAuth
	}

	setLoading(isLoading: boolean): void {
		this.isLoading = isLoading
	}

	setError(isError: boolean): void {
		this.isError = isError
	}

	signOut(): void {
		this.isAuth = false
		localStorage.removeItem(LS_KEY.TOKENS)
	}

	async signIn(key: string): Promise<void> {
		try {
			const res = await authService.signIn(key)

			this.isAuth = true
			localStorage.setItem(LS_KEY.TOKENS, JSON.stringify(res.data))
		} catch (error) {
			this.isError = true

			console.error(error)
			throw new Error('Invalid key')
		}
	}

	async verifyAccess(accessToken: string): Promise<void> {
		try {
			await authService.verifyAccess(accessToken).then(() => {
				this.isAuth = true
			})

			this.isAuth = true
		} catch (error) {
			console.error(error)
			throw new Error('Invalid access token')
		}
	}

	async refreshToken(refreshToken: string): Promise<void> {
		try {
			const res = await authService.refreshToken(refreshToken)

			this.isAuth = true
			localStorage.setItem(LS_KEY.TOKENS, JSON.stringify(res.data))
		} catch (error) {
			this.isAuth = false

			console.error(error)
			throw new Error('Invalid refresh token')
		}
	}
}

export const authStore = new AuthStore()
