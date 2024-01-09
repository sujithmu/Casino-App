interface ErrorPageProps {
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <div
      className='ui middle aligned center aligned grid'
      style={{ height: 'calc(100vh - 100px)', backgroundColor: '#f8f9fa' }}
    >
      <div className='column' style={{ maxWidth: 450 }}>
        <h2 className='ui red header'>
          <div className='content'>Oops!</div>
        </h2>
        <h3 className='ui grey header'>
          <div className='content'>Something went wrong...</div>
        </h3>
        <p
          className='ui grey text'
          style={{ marginTop: '1em', textAlign: 'center' }}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
