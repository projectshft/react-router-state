import { Link } from 'react-router-dom'
import React from 'react'

class PlayerEdit extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      number: '',
      position: ''
    }

    this.handleSubmitPlayerClick = this.handleSubmitPlayerClick.bind(this)
  }

  componentDidMount () {
    const findPlayerByNumber = (number) => {
      return this.props.players.filter((player) => {
        return player.number === number
      });
    };

    const currentPlayer = findPlayerByNumber(this.props.playerId)[0];

    this.setState({
      name: currentPlayer.name,
      number: currentPlayer.number,
      position: currentPlayer.position
    })
  }

  handleSubmitPlayerClick () {
    const newPlayer = {
      name: this.state.name,
      number: this.state.number,
      position: this.state.position
    };

    this.props.updatePlayer(newPlayer)
    this.props.history.push('/roster')
  }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' value={this.state.name} className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Number</label>
        <input type='text' value={this.state.number} className='form-control'onChange={event =>
          this.setState({ number: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Position</label>
        <input type='text' value={this.state.position} className='form-control'onChange={event =>
          this.setState({ position: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitPlayerClick}>Submit</button>
        </form>

        <Link to='/roster'>Roster</Link>
      </div>
    )
  }
}

export default PlayerEdit
