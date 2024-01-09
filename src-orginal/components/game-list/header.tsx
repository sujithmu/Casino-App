import { ChangeEvent, useContext, useState } from 'react';
import { UserAuthContext } from '../../state/auth-context';
import Logout from '../logout';
import PlayerInfo from './gambler-info';

type HeaderProps = {
  onSearchText: (text: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearchText }) => {
  const [searchText, setSearchText] = useState<string>('');
  const {
    gambler: { name, avatar, event, username },
  } = useContext(UserAuthContext);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchText(input);
    onSearchText(input);
  };

  return (
    <div className='ui stackable grid centered'>
      <div className='twelve wide column'>
        <PlayerInfo name={name} avatar={avatar} event={event} />
        <Logout username={username} />
      </div>
      <div className='four wide column'>
        <div className='search ui small icon input '>
          <input
            type='text'
            placeholder='Search Game'
            value={searchText}
            onChange={changeHandler}
          />
          <i className='search icon'></i>
        </div>
      </div>
    </div>
  );
};

export default Header;