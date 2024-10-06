import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './providers/AuthProvider'
import Header from '@/components/widgets/Header'

interface PropsType {
	children?: ReactNode
}

const Layout: FC<PropsType> = () => {
	return (
		<AuthProvider>
			<Box
				display={'flex'}
				flexDirection={'column'}
				position={'relative'}
				height={'100vh'}
				sx={{ paddingTop: { xs: '56px', sm: '64px' } }}
			>
				<Header />

				<Outlet />

				<ToastContainer
					position='top-center'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
				/>
			</Box>
		</AuthProvider>
	)
}

export default Layout
