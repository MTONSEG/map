import Loading from '@/components/ui/Loading'
import SignIn from '@/components/widgets/SignIn'
import SignOut from '@/components/widgets/SignOut'
import { PATH } from '@/constants'
import { DICTIONARY } from '@/dictionaries'
import { authStore } from '@/store/auth.store'
import { Box, Grid2, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Auth = observer(() => {
	const navigate = useNavigate()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.target as HTMLFormElement
		const key = form.key.value

		authStore
			.signIn(key)
			.then(() => {
				navigate(PATH.INDEX, { replace: true })
			})
			.catch(() =>
				toast.error(DICTIONARY.the_key_is_not_defined, {
					toastId: 'toast-error'
				})
			)
	}

	if (authStore.isLoading) return <Loading />

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			flex={'1 1 auto'}
		>
			<Grid2
				component={'form'}
				display={'grid'}
				gap={'15px'}
				padding={'30px'}
				boxShadow={'0 0 10px lightgrey'}
				borderRadius={'10px'}
				width={'500px'}
				onSubmit={handleSubmit}
			>
				<Typography component={'h1'} fontSize={22} textAlign={'center'}>
					{authStore.isAuth
						? DICTIONARY.you_are_logged_in
						: DICTIONARY.enter_authorization_key}
				</Typography>

				{authStore.isAuth ? <SignOut /> : <SignIn />}
			</Grid2>
		</Box>
	)
})

export default Auth
