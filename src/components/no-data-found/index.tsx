const NoDataFound = ({ infoText }: { infoText: string }) => (
  <div className='ui icon message'>
    <div className='content'>
      <div className='header' style={{ textAlign: 'center' }}>
        <i className='info circle icon' style={{ color: 'gray' }}></i>{' '}
        {infoText}
      </div>
    </div>
  </div>
);

export default NoDataFound;
