import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Player from './Player';
import PlayerNew from './PlayerNew';
import PlayerEdit from './PlayerEdit';
import FullRoster from './FullRoster';

const Roster = ({players, addPlayer, updatePlayer}) => (
  <Switch>
    <Route path='/roster/new' render={(routerProps) => (
      <PlayerNew history={routerProps.history} players={players} addPlayer={addPlayer} />
    )}/>

    <Route path='/roster/:number/edit' render={(routerProps) => (
      <PlayerEdit history={routerProps.history} playerId={parseInt(routerProps.match.params.number, 10)} players={players} updatePlayer={updatePlayer} />
    )}/>

    <Route path='/roster/:number' render={(routerProps) => (
      <Player playerId={parseInt(routerProps.match.params.number, 10)} players={players} />
    )}/>


    <Route path='/roster' render={() => (
      <FullRoster players={players} />
    )}/>
  </Switch>
)

export default Roster
