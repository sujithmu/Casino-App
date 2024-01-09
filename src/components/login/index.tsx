import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import { LoginResponse } from '../../types/intex';
import { AuthContext } from '../../state/auth-context';
import useLoginForm from '../../hooks/useLoginForm';

const Login = () => {
  const { data, loading, error, post } = usePost<LoginResponse>('login');
  const { formData, formErrors, handleInputChange, handleSubmit } =
    useLoginForm(post);

  const navigate = useNavigate();
  const { setPlayer } = useContext(AuthContext);

  useEffect(() => {
    if (data?.status === 'success') {
      setPlayer({ ...data.player, username: formData.username });
      navigate('/game-list');
    }
  }, [data, navigate, setPlayer, formData.username]);

  return (
    <div
      className='ui grid centered'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ position: 'relative' }}>
        {error && (
          <div
            className='ui negative message'
            style={{ maxHeight: '100px', marginBottom: 10 }}
          >
            <p>{error.message}</p>
          </div>
        )}
      </div>

      <form className='ui form'>
        <div className={`field ${formErrors.username ? 'error' : ''}`}>
          <div className='ui icon input'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              autoComplete='username'
              value={formData.username}
              onChange={handleInputChange}
            />
            <i className='user icon'></i>
          </div>
        </div>
        <div className={`field ${formErrors.password ? 'error' : ''}`}>
          <div className='ui icon input'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='current-password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <i className='lock icon'></i>
          </div>
        </div>

        <button
          className='ui primary button'
          type='submit'
          value='Login'
          onClick={handleSubmit}
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
