import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import Loader from '../loader';

const LogOut = ({ username }: { username: string }) => {
  const { data, loading, post } = usePost<{ status: string }>('logout');
  const navigate = useNavigate();

  const logoutHandler = () => {
    post({ username });
  };

  useEffect(() => {
    if (data?.status === 'success') {
      navigate('/');
    }
  }, [data, navigate]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className='logout ui left floated secondary button'
      onClick={logoutHandler}
    >
      <i className='left chevron icon'></i>Log Out
    </div>
  );
};

export default LogOut;
