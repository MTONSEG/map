import { DICTIONARY } from '@/dictionaries'
import { authStore } from '@/store/auth.store'
import { Box, Button, TextField, Typography } from '@mui/material'

const SignIn = () => {
	const handleFieldChange = () => {
		authStore.setError(false)
	}

	return (
		<>
			<Box display={'grid'} gap={'2px'}>
				<TextField
					variant='outlined'
					label={DICTIONARY.key}
					name='key'
					onChange={handleFieldChange}
					error={authStore.isAuth}
				/>

				{authStore.isError && (
					<Typography
						component={'p'}
						fontSize={14}
						color='error'
						children='Invalid key'
					/>
				)}
			</Box>

			<Button
				type='submit'
				variant='contained'
				size={'large'}
				disabled={authStore.isError}
			>
				{DICTIONARY.sign_in}
			</Button>
		</>
	)
}

export default SignIn
