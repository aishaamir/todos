import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                    <input type="text"
                        name="title"
                        placeholder='Add todo...'
                        style={{ flex: '10', margin: '5px 2px' }}
                        value={this.state.title}
                        onChange={this.onChange
                        } />
                    <input type="submit"
                        className='btn'
                        style={{ flex: '1' }}
                        value='Add' />
                </form>
            </div>
        )
    }
}

export default Addtodo
