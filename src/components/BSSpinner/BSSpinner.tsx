import React from 'react';

const BSSpinner: React.FC<any> = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default BSSpinner;