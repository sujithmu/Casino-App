import { useMemo } from 'react';
import useFetch from '../../hooks/useFecth';
import { GameListResponse } from '../../types/intex';
import GameItem from './game-item';
import Loader from '../loader';
import NoDataFound from '../no-data-found';
import ErrorPage from '../../error-boundary/error-page';

type GameListProps = {
  categoryId: number;
  searchText: string;
};

const GameList: React.FC<GameListProps> = ({ categoryId, searchText }) => {
  const { data, loading, error } = useFetch<GameListResponse[]>('games');

  const gameList = useMemo(() => {
    if (data) {
      const clonedData = [...data];

      return clonedData.filter(
        (cData) =>
          cData.categoryIds.includes(categoryId) &&
          cData.name.toLowerCase().includes(searchText.trim().toLowerCase())
      );
    }
    return [];
  }, [data, categoryId, searchText]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  return (
    <div className='ui relaxed divided game items links'>
      {gameList.length ? (
        gameList.map((game) => <GameItem key={game.code} {...game} />)
      ) : (
        <NoDataFound infoText='No games found' />
      )}
    </div>
  );
};

export default GameList;
