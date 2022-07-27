import React, { useEffect } from 'react';

export default function AppLoading() {
  useEffect(() => {
    const sideBarNode = document.getElementById('sideBar');
    if (!sideBarNode) {
      return;
    }

    sideBarNode.style.visibility = 'hidden';

    return () => {
      sideBarNode.style.visibility = 'visible';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-primary-light-400 flex justify-center items-center" style={{ zIndex: 999 }}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
