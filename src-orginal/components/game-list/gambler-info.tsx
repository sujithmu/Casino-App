import { LoggedInUser } from "../../types/index";

const PlayerInfo: React.FC<LoggedInUser> = ({ name, avatar, event }) => (
  <div className='ui list'>
    <div className='player item'>
      <img className='ui avatar image' src={avatar} alt='avatar' />
      <div className='content'>
        <div className='header'>
          <b className='name'>{name}</b>
        </div>
        <div className='description event'>{event}</div>
      </div>
    </div>
  </div>
);

export default PlayerInfo;