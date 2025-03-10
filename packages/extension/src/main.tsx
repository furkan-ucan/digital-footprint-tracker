import React from 'react';
import ReactDOM from 'react-dom/client';
import { TrackerType } from '@digital-footprint-tracker/common';

function ExtensionPopup() {
  const [trackers, setTrackers] = React.useState<
    {
      type: TrackerType;
      count: number;
    }[]
  >([]);

  React.useEffect(() => {
    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === 'TRACKERS_DETECTED') {
        setTrackers(message.data);
      }
    });
  }, []);

  return (
    <div className="w-96 p-4">
      <h1 className="text-xl font-bold mb-4">Digital Footprint Tracker</h1>
      <div className="space-y-2">
        {trackers.map((tracker, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{tracker.type}</span>
            <span className="font-bold">{tracker.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ExtensionPopup />
    </React.StrictMode>
  );
}
