import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import logo from './show.jpg'
import FaPlus from 'react-icons/lib/fa/plus'
import FaMinus from 'react-icons/lib/fa/minus'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
		this.randomBetween = this.randomBetween.bind(this)
	}

	componentWillMount() {
		this.style = {
			right: this.randomBetween(0, window.innerWidth - 150, 'px'),
			top: this.randomBetween(0, window.innerHeight - 150, 'px'),
			transform: `rotate(${this.randomBetween(0, 0, 'deg')})`
		}
	}

	randomBetween(x, y, s) {
		return x + Math.ceil(Math.random() * (y-x)) + s
	}

	componentDidUpdate() {
		var textArea
		if(this.state.editing) {
			textArea = this._newText
			textArea.focus()
			textArea.select()
		}

	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.children !== nextProps.children || this.state !== nextState
		)
	}

	edit() {
		this.setState({
			editing: true
		})
	}

	remove() {
		this.props.onRemove(this.props.index)
	}

	save(e) {
		e.preventDefault()
		this.props.onChange(this._newText.value, this.props.index)
		this.setState({
			editing: false
		})
	}

	renderForm() {
		return (
			<div className="note" style={this.style}>
				<form onSubmit={this.save}>
					<textarea ref={input => this._newText = input}
							  defaultValue={this.props.children}/>
					<button id="save"><FaFloppyO /></button>
				</form>
			</div>
		)
	}

	renderDisplay() {
		return (
			<div className="note">
        <div class="shopping-cart">
 

 <div class="title">
   {this.props.children[0]}
  </div>
  <div class="item">


  <div class="buttons">
      <span class="delete-btn"><button onClick={this.remove} id="remove"><FaTrash /></button></span>
      <span class="like-btn">   <button onClick={this.edit} id="edit"><FaPencil /></button></span>
   
					
    </div>
    <div class="image"><img src={logo} width='50' height='50'></img></div>
 <div class="description"><span> {this.props.children[1]}</span></div>
 
    <div class="quantity">       
<input id="number" type="number" min="0" placeholder="0"></input>

       </div>
 
    <div class="total-price">{this.props.children[2]}</div>
      </div>
      </div>

      
      </div>

		)
	}
	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}

}

export default Note





