import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './component/index.css';
function Database(){
	const [getMessage, setGetMessage] = useState({})

	useEffect(()=>{
		axios.get('http://127.0.0.1:5000/flask').then(response => {
			console.log('SUCCESS', response)
			setGetMessage(response)
		}).catch(error => {
			console.log(error)
		})

	}, [])
	// for example show API
	let y = 0;
	let list = [1,2,3,4,5,6]
	let id, nama, calls, alamat, status, acaraid = '';
	for(let x in getMessage.data){
		id = <td>{getMessage.data[x].id}</td>
		nama = <td>{getMessage.data[x].nama}</td>
		calls = <td>{getMessage.data[x].noHp}</td>
		alamat = <td>{getMessage.data[x].alamat}</td>
		status = <td>{getMessage.data[x].status}</td>
		acaraid = <td>{getMessage.data[x].idacara}</td>
	}
	return(
		<div>
			{getMessage.status === 200?
				<table id='guest'>
					<tr>
						<th>ID</th>
						<th>Nama</th>
						<th>Calls</th>
						<th>Alamat</th>
						<th>Status</th>
						<th>Idacara</th>
					</tr>
					<tr>
						{id}
						{nama}
						{calls}
						{alamat}
						{status}
						{acaraid}
					</tr>
				</table>
				:
				<h3>Loading</h3>
			}
		</div>
	)
}

export default Database;