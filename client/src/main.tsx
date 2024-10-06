import Layout from '@/components/Layout'
import Auth from '@/components/pages/Auth'
import Map from '@/components/pages/Map'
import { PATH } from '@/constants'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.scss'

const router = createBrowserRouter([
	{
		path: PATH.INDEX,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Map />
			},
			{
				path: PATH.AUTH,
				element: <Auth />
			}
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
