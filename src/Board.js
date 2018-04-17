import React, { Component } from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
				notes: [
				{
					id: 33,
					Title: "product 1",
					brand: "brand 1",
					Price: "$100",
					Url: "./show.jpg"
				},
				{
				id: 34,
					Title: "product 2",
					brand: "brand 2",
					Price: "$200",
					Url: "./show.jpg"
				},
				{
					id: 35,
					Title: "product 3",
					brand: "brand 3",
					Price: "$500",
					Url: "./show.jpg"
				}
			]
		}
		this.eachNote = this.eachNote.bind(this)
		this.add = this.add.bind(this)
		this.eachNote = this.eachNote.bind(this)
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	// componentWillMount() {
	// 	var self = this
	// 	if(this.props.count) {
	// 		fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
	// 			.then(response => response.json())
	// 			.then(json => json[0]
	// 							.split('. ')
	// 							.forEach(sentence => self.add(sentence.substring(0, 25))))

	
	// 	}
	// }

	add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes,
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

	remove(id) {
		console.log('removing item at', id)
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id !== id)
		}))
	}

	eachNote(note, i) {
		return (
			<Note key={note.id}
				  index={note.id}
				  onChange={this.update}
				  onRemove={this.remove}>
				  {note.Title}
				  {note.brand}
				   {note.Price}
				  {note.Url}
		    </Note>
		)
	}

	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
				<button onClick={this.add.bind(null, "New Note")}
						id="add">
					<FaPlus />
				</button>
			</div>
		)
	}
}

export default Board