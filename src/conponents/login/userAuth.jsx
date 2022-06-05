import React from 'react';
import Log from './log';


var userIsRegistered = true;


export default function UserAuth() {
    
  return (
    <>
        <div className="container">
            <Log isRegistered={userIsRegistered}/>
        </div>
    </>
  );
}
