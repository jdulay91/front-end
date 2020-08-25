import React from 'react';
import TechRentalCard from './TechRentalCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function TechRentalList(props) {
    
    const { techEquipments, setTechEquipment} = props;
  

   

	const getTech = () => {
		axiosWithAuth()
			.get('/tech')
			.then((res) => {
			setTechEquipment(res.data);
			})
			.catch((err) => console.log('this is the', err));
	};

	return (
		<div>
			{techEquipments.map((tech) => (
				<TechRentalCard getTech={getTech} techEquipments={techEquipments} setTechEquipment={setTechEquipment} key={tech.id} tech={tech} />
			))}

			<button onClick={getTech}>Get Available Tech Equipment</button>
		</div>
	);
}
