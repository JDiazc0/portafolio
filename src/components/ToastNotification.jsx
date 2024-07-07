import React, { useEffect } from "react";
import "../utils/styles/ToastNotification.css";

export default function ToastNotification({
  notifications,
  removeNotification,
}) {
  useEffect(() => {
    if (notifications.length > 0) {
      const latestNotification = notifications[notifications.length - 1];
      const timerId = setTimeout(() => {
        removeNotification(latestNotification.id);
      }, 2000);

      return () => clearTimeout(timerId);
    }
  }, [notifications, removeNotification]);

  return (
    <div id="toasts">
      {notifications.map((notif) => (
        <div key={notif.id} className={`toast ${notif.type}`}>
          {notif.message}
        </div>
      ))}
    </div>
  );
}
