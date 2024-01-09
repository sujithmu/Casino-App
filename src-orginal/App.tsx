import Router from './router';
import Logo from '../src/assets/logo.svg';
import  Casino from '../src/assets/casino2-bg.jpg';
import { AuthProvider } from './state/auth-context';

function App() {
  const sectionStyle = {
    width: "100%",
    height: "100%",
    // backgroundImage: "url(" + Casino + ")"
  };
  return (
    <>
    <div style={sectionStyle}>
        <div className='ui one column center aligned page grid'></div>
          <div className='column twelve wide'>
            <img src={Logo} alt='comeon-logo'/>
        </div>
        <div className='main container'>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </div>      
    </div>
    </>
  )
}

export default App
