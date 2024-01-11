import Router from './router';
import { AuthProvider } from './state/auth-context';
import Logo from './assets/logo.svg';

function App() {
  return (
    <>
      <div className='ui one column center aligned page grid' style={{backgroundColor: "#be5252"}}>
        <div className='column twelve wide'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
      <div className='main container'>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
