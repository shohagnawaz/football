import { useEffect, useState } from 'react';
import './Football.css';
import Player from '../Player/Player';

const Football = () => {
    const [players, setPlayers] = useState([]);
    const [addPlayer, setAddPlayer] = useState([]);
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[]);
    const handleAddToPlayer = (player) => {
        const newAddPlayer = [...addPlayer, player]
        setAddPlayer(newAddPlayer);
    }

    return (
        <div className='football-container'>
            <div className='player-container'>
                {
                    players.map(player => <Player
                        key = {player.id}
                        player = {player}
                        handleAddToPlayer = {handleAddToPlayer}
                    ></Player>)
                }
            </div>
            <div className='review-container'>
                <h4>Review Summary</h4>
                <p>Selected Player: {addPlayer.length}</p>
            </div>        
        </div>
    );
};

export default Football;