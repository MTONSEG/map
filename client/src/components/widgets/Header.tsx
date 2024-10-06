import { PATH } from '@/constants'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()

	const handleProfileClick = () => {
		navigate(PATH.AUTH)
	}

	return (
		<AppBar position='fixed' color='default'>
			<Toolbar>
				<IconButton
					size='small'
					aria-label='menu'
					edge='end'
					sx={{ marginLeft: 'auto' }}
					onClick={handleProfileClick}
				>
					<AccountCircleIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header
