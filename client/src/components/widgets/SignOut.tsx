import { PATH } from '@/constants'
import { DICTIONARY } from '@/dictionaries'
import { authStore } from '@/store/auth.store'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const SignOut = () => {
	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			gap={2}
		>
			<Link to={PATH.INDEX} style={{ textAlign: 'center', color: 'grey' }}>
				{DICTIONARY.back_to_map}
			</Link>

			<Button
				type='button'
				variant='contained'
				onClick={() => authStore.signOut()}
			>
				{DICTIONARY.sign_out}
			</Button>
		</Box>
	)
}

export default SignOut
