import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const NotificationCounter = ({ count }: { count: number }) => {
  return (
    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs absolute -top-2 -right-2">
      {count}
    </div>
  );
};

const NotificationPanel = ({ onClose }: { onClose: () => void }) => {
  const [panelNotifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // State to track loading
  useEffect(() => {
    // Establish a connection to the WebSocket server

    const socket = io("ws://localhost:9000"); // Replace with your WebSocket server URL

    const credentials = { username: "james@example.com", type: "seller" }; // Replace with actual credentials
    socket.emit("authenticate", credentials);

    socket.on("message", (data) => {
      console.log(data);
    });

    // Listen for incoming notifications
    socket.on("notification", (notification) => {
      setNotifications(notification);

      console.log("panelNotifications");
      console.log(panelNotifications);
    });

    // Show loader for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    // Clean up the connection when the component unmounts
    return () => {
      clearTimeout(timer);
      socket.disconnect();
    };
  }, []);

  console.log(panelNotifications);

  return (
    <div className="fixed inset-0 flex justify-center items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50">
      <div
        className={`max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto overflow-hidden`}
      >
        <div className="p-4 flex justify-between items-center h-full">
          <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            {/* Notification title and message */}
            <div>
              <p className="text-sm leading-5 font-medium text-gray-900">
                Notification
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                This is a sample notification message.
              </p>
            </div>

            {/* Loader */}
            {loading && (
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            )}

            {/* Notification messages */}
            {!loading && (
              <div className="p-4">
                {panelNotifications.map((notification, index) => (
                  <div key={index} className="mb-4">
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Close button within the panel */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const NotificationTrigger = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(6);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    console.log(isPanelOpen);
  };

  return (
    <div>
      {/* Render NotificationTrigger only when NotificationPanel is not open */}
      {!isPanelOpen && (
        <button
          onClick={togglePanel}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative z-10"
        >
          Open Notification Panel
          {notificationCount > 0 && (
            <NotificationCounter count={notificationCount} />
          )}
        </button>
      )}

      {/* Render NotificationPanel when isPanelOpen is true */}
      {isPanelOpen && (
        <NotificationPanel onClose={() => setIsPanelOpen(false)} />
      )}
    </div>
  );
};
