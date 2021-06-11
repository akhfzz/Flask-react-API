import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './component/index.css';
import axios from 'axios';
import Database from './showAll'

function Navigate(){
	return(
		<div>
			<ul>
				<li><a href='#'>Profil</a></li>
				<li><a href='#'>Beranda</a></li>
				<li><a href='#'>Contact</a></li>
				<li><a href='#'>Logout</a></li>
			</ul>
			<Database/>
		</div>
	);
}
ReactDOM.render(<Navigate/>, document.getElementById('demo'));
	