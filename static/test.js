import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './component/test.css';

class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			username : '', 
			umur : null,
			errMessage : ''
		};
	}
	mySubmit = (event) => {
		event.preventDefault();
		let usia = this.state.umur;
		if(!Number(usia)){
			alert('age must be integer')
		}
	}
	myHandler = (event) => {
		let key = event.target.name;
		let val = event.target.value;
		let err = ''
		if(key === 'umur' && val != ''){
			if(!Number(val)){
				err = <strong style={{backgroundColor:'red'}}>ur age must be int</strong>
			}
		}
		this.setState({errMessage:err})
		this.setState({ [key] : val })
	}
	render(){
		const styling = {
			color : 'blue',
			letterSpacing : '5px'
		};
		let identitas = '';
		if(this.state.username && this.state.umur){
			identitas = <h1 style={styling}>hello {this.state.username} kamu berusia {this.state.umur}?</h1>
		}else{
			identitas = ''
		}
		return(
			<form onSubmit={this.mySubmit}>
				{identitas}
				<p>username</p>
				<input type='text' onChange={this.myHandler} name='username'/>
				<p>age</p>
				<input type='text' onChange={this.myHandler} name='umur'/>
				{this.state.errMessage}<br/>
				<button type='submit'>Input</button>
			</form>
		)
	}
}
export default Form;