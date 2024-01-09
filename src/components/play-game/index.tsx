import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

declare global {
  interface Window {
    comeon: {
      game: {
        launch: (code: string) => void;
      };
    };
  }
}

const PlayGame = () => {
  const navigate = useNavigate();
  const { code } = useParams();

  useEffect(() => {
    if (code && window.comeon && window.comeon.game) {
      window.comeon.game.launch(code);
    }
  }, [code]);

  return (
    <div className='ui grid stackable'>
      <div className='three wide column'>
        <div className='ui secondary button' onClick={() => navigate(-1)}>
          <i className='left chevron icon'></i>Back
        </div>
      </div>
      <div className='twelve wide column'>
        <div id='game-launch'></div>
      </div>
    </div>
  );
};

export default PlayGame;
