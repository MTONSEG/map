import { useConnectToObjects } from '@/hooks/useConnectToObjects'
import { Box } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'

const Map = observer(() => {
	const objects = useConnectToObjects()

	return (
		<Box display={'flex'} position={'relative'} flex={'1 1 auto'}>
			<MapContainer
				center={[50.4501, 30.5234]}
				zoom={5}
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				{objects.map(
					(obj) =>
						!obj.isLost && (
							<Marker key={obj.id} position={[obj.lat, obj.long]}>
								<Tooltip>{obj.name}</Tooltip>
							</Marker>
						)
				)}
			</MapContainer>
		</Box>
	)
})

export default Map
