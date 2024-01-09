import { useNavigate } from 'react-router-dom';
import { GameListResponse } from '../../types/index';

const GameItem: React.FC<GameListResponse> = ({
  name,
  code,
  description,
  icons
}) => {
  const navigate = useNavigate();

  return (
    <div className='game item'>
      <div className='ui small image'>
        <img src={icons} alt='game-icon' />
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