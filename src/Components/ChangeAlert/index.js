import React from 'react'
import withStorageListener from './withStorageListener'

function ChangeAlert({show, toggleShow}) {
  if (show) {
    return (
      <div>
        <p>There was a change in To Do's</p>
        <button onClick={() => toggleShow(false)} >Reload the information</button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};