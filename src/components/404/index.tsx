const NotFound = () => {
  return (
    <div className='ui container'>
      <div
        className='ui middle aligned center aligned grid'
        style={{ height: 'calc(100vh - 168px)' }}
      >
        <div className='column'>
          <h2 className='ui teal header'>
            <div className='content'>
              <i className='exclamation triangle icon'></i> 404
            </div>
          </h2>
          <h2 className='ui teal header'>
            <div className='content'>Page not found</div>
          </h2>
          <div className='ui text message '>
            <strong>We haven't found what you've been looking for</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
