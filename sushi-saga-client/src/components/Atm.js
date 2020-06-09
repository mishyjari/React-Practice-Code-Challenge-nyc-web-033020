import React from 'react';

const Atm = props => {
	return (
		<div>
			<form onSubmit={props.withdraw}>
				<label for='funds'>Withdrawl amount: </label>
				<input type='number' name='funds' />
				<input type='submit' />
			</form>
		</div>
	)
}

export default Atm
