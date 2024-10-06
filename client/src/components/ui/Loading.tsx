import { authStore } from '@/store/auth.store'
import { Backdrop, CircularProgress } from '@mui/material'


const Loading = () => {
	return (
		<Backdrop
			sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
			open={authStore.isAuth}
		>
			<CircularProgress color='inherit' />
		</Backdrop>
	)
}

export default Loading
