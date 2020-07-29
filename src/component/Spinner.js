import React from "react";

const Spinner = () => {
    const displayNone = { display: 'block!important'}
    
  return (
      <div id="divSpinner" style={displayNone}>
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
      </div>
  )
}

export default Spinner;