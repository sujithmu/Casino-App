import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import gameUrl from '../../lib/helper/gameUrl';

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
  const selectedGameURL = gameUrl(code);

  useEffect(() => {
    if (code && window.comeon && window.comeon.game) {
      window.comeon.game.launch(code);
    }
  }, [code]);

  return (
    <div className='ui grid stackable'>
      <div className='twelve wide column'>
        <div className='ui secondary button' onClick={() => navigate(-1)}>
          <i className='left chevron icon'></i>Back
        </div>
          <iframe
              src={selectedGameURL}
              className="w-full h-full" style={{height: "100%", width: "100%"}}
            >
          </iframe>
      </div>
    </div>
  );
};

export default PlayGame;
