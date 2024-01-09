import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { CategoryResponse } from '../../types';
import Loader from '../loader';
import NoDataFound from '../no-data-found';
import ErrorPage from '../../error-boundary/error-page';
import CategoryItem from './category';

type CategoryListProps = {
  onSelectedCategory: (id: number) => void;
};

const CategoryList: React.FC<CategoryListProps> = ({ onSelectedCategory }) => {
  const { data, loading, error } = useFetch<CategoryResponse[]>('categories');
  const [selectedId, setSelectedId] = useState<number>(0);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  if (!data?.length) {
    return <NoDataFound infoText='No categories found' />;
  }

  return (
    <div className='ui selection animated list category items'>
      {data.map(({ id, name }) => (
        <CategoryItem
          key={id}
          categoryName={name}
          isSelected={id === selectedId}
          onSelect={() => {
            setSelectedId(id);
            onSelectedCategory(id);
          }}
        />
      ))}
    </div>
  );
};

export default CategoryList;
