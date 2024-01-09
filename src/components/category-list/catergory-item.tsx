type CategoryItemProps = {
  categoryName: string;
  isSelected: boolean;
  onSelect: () => void;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  categoryName,
  isSelected,
  onSelect,
}) => (
  <div
    className={`category item ${isSelected ? 'selected' : ''}`}
    onClick={onSelect}
  >
    <div className='content'>
      <span className='header'>{categoryName}</span>
    </div>
  </div>
);

export default CategoryItem;
