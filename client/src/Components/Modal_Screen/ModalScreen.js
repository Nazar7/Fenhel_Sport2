import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component, useState, useEffect} from 'react';
import state from '../../redux/state';
import s from './ModalScreen_Style.scss';
import Size_Example from './SizeExample';
import 'react-router-modal/css/react-router-modal.css';
import { Redirect} from 'react-router-dom';
import { Modal } from 'react-bootstrap';



const ModalScreen = (props) => {

	
	// console.log(props)
	console.log(props.show)
	if (props.name == "sport-clothe") {

		return (
			<>
				{props.show ?
					<Modal className='modal__background'
						{...props}
						size="xl"
					>
						<Modal.Title className="popap__title">РОЗМІРНА СІТКА</Modal.Title>
						<Size_Example
							img={state.sportClothes.sportTshirtMen.img}
							size={state.sportClothes.sportTshirtMen.sizeChart}
							clothes={state.sportClothes.sportTshirtMen.colorChart}
						/>
						<Size_Example
							img={state.sportClothes.sportTshirtPoloMen.img}
							size={state.sportClothes.sportTshirtPoloMen.sizeChart}
							clothes={state.sportClothes.sportTshirtPoloMen.colorChart}
						/>
						<span className='close__btn' variant="secondary" onClick={props.onHide} aria-hidden="true">&times;</span>
					</Modal>
					: <Redirect to={"/" + props.name} />}
			</>

		)
	}
	return (
		<>
			{props.show ?
				<Modal
					{...props}
					size="xl"
				>
					<Modal.Title className="popap__title">РОЗМІРНА СІТКА</Modal.Title>

					<Size_Example
						img={state.sportClothes.sportTshirtMen.img}
						size={state.sportClothes.sportTshirtMen.sizeChart}
						clothes={state.sportClothes.sportTshirtMen.colorChart}
					/>
					<Size_Example
						img={state.sportClothes.sportTshirtPoloMen.img}
						size={state.sportClothes.sportTshirtPoloMen.sizeChart}
						clothes={state.sportClothes.sportTshirtPoloMen.colorChart}
					/>
					<Size_Example
						img={state.sportClothes.sportTshirtWoman.img}
						size={state.sportClothes.sportTshirtWoman.sizeChart}
						clothes={state.sportClothes.sportTshirtWoman.colorChart}
					/>
					<Size_Example
						img={state.sportClothes.sportTshirtPoloWoman.img}
						size={state.sportClothes.sportTshirtPoloWoman.sizeChart}
						clothes={state.sportClothes.sportTshirtPoloWoman.colorChart}
					/>
					<Size_Example
						img={state.sportClothes.hoodietMen.img}
						size={state.sportClothes.hoodietMen.sizeChart}
						clothes={state.sportClothes.hoodietMen.colorChart}
					/>
						<span className='close__btn' variant="secondary" onClick={props.onHide} aria-hidden="true">&times;</span>
				</Modal>
				: <Redirect to={"/" + props.name} />}
		</>
	)
}

export default ModalScreen;