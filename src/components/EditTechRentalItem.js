import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom'

const initialState = {
  techName: '',
  description: '',
  condition: '',
  price: ''
};

function EditTechRentalItem(props) {
  const { id } = useParams()
  const history = useHistory()
  const [tech, setTech] = useState(initialState)

  useEffect(()=>{
    axiosWithAuth()
    .get(`/tech/${id}`)
    .then((res)=>{
      setTech(res.data)
    })
  },[id])

	const onChange = (e) => {
		setTech({
      ...tech,
			[e.target.name]: e.target.value
		});
  };
  
	const changeTech = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/tech/${id}`, tech)
			.then((res) => {
				setTech(tech)			
			});
		history.push('/techlist');
  };
  
  


		return (
			<form onSubmit={changeTech}>
				<input type='text' name='techName' placeholder='Tech Equipment' value={tech.techName} onChange={onChange} />
				<input type='text' name='description' placeholder='Tech Description' value={tech.description} onChange={onChange} />
				<input type='text' name='condition' placeholder='Tech Condition' value={tech.condition} onChange={onChange} />
				<input type='text' name='price' placeholder='Tech Price' value={tech.price} onChange={onChange} />
				<button>Submit Tech</button>
			</form>
		);

}

export default EditTechRentalItem;
