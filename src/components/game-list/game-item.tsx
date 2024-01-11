import { useNavigate } from 'react-router-dom';
import { GameListResponse } from '../../types/intex';

const GameItem: React.FC<GameListResponse> = ({
  name,
  code,
  description,
  icon,
}) => {
  const navigate = useNavigate();

  return (
    <div className='gameList'>
      <div className='ui image'>
        <img src={icon} alt='game-icon' />
      </div>
      <div className='content'>
        <div className='header'>
          <b className='name'>{name}</b>
        </div>
        <div className='description'>{description}</div>
        <div className='extra'>
          <div
            className='play ui right floated secondary button'
            onClick={() => navigate(`/game-list/${code}`)}
          >
            Play
            <i className='right chevron icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;