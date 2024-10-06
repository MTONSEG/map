import { LS_KEY, PATH } from '@/constants'
import { authStore } from '@/store/auth.store'
import { IToken } from '@/types'
import { observer } from 'mobx-react-lite'
import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface PropsType {
	children?: ReactNode
}

const AuthProvider: FC<PropsType> = observer(({ children }) => {
	const navigate = useNavigate()

	useEffect(() => {
		const jsonTokens = localStorage.getItem(LS_KEY.TOKENS)

		if (!jsonTokens) {
			navigate(PATH.AUTH)
			authStore.setLoading(false)
			return
		}

		const tokens: IToken = JSON.parse(jsonTokens)

		// Проверяю токен на валидность
		authStore
			.verifyAccess(tokens.access)
			.catch(() =>
				authStore.refreshToken(tokens.refresh).catch(() => navigate(PATH.AUTH))
			)
			.finally(() => authStore.setLoading(false))
	}, [navigate])

	return children
})

export default AuthProvider
