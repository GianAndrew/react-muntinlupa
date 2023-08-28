import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = () => {
	return (
		<>
			<div className='overflow-hidden w-full bg-gray-950'>
				<div className='max-w-screen-2xl mx-auto flex space-x-0 lg:space-x-4 justify-center flex-col items-center lg:flex-row p-4'>
					<MapContainer preferCanvas center={[14.402197, 121.027776]} zoom={13} maxZoom={18} scrollWheelZoom={false}>
						<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
					</MapContainer>

					<div className='w-full lg:w-1/3 flex flex-col justify-center text-center items-center lg:text-start lg:items-start py-4 px-4 mb-4 '>
						<h1 className='text-4xl font-medium text-orange-500'>
							<span className='text-white'>About</span> Muntinlupa City
						</h1>

						<p className='text-white mt-2'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate officia accusantium fugit quis. Suscipit tempore, repudiandae quis veniam neque incidunt id molestias, dolore
							provident facere sapiente deserunt iste aperiam voluptate recusandae et, corporis ad blanditiis in dolores atque est delectus omnis quae! Similique corrupti quo maiores, voluptatem quae
							dolor ad!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MapComponent;
