import { useState } from 'react';
import CategoryList from '../category-list';
import GameList from './game-list';
import Header from './header';

const Home = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');

  const selectedCategoryHandler = (categoryId: number) => {
    setCategoryId(categoryId);
  };

  const searchTextHandler = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <div className='casino'>
      <Header onSearchText={searchTextHandler} />
      <div className='ui grid stackable'>
        <div className='twelve wide column' id='game-column'>
          <h3 className='ui dividing header'>Games</h3>
          <GameList categoryId={categoryId} searchText={searchText} />
        </div>
        <div className='four wide column' id='category-column'>
          <h3 className='ui dividing header'>Categories</h3>
          <CategoryList onSelectedCategory={selectedCategoryHandler} />
        </div>
      </div>
    </div>
  );
};

export default Home;
