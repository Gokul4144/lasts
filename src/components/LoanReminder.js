// components/LoanReminder.js
import { useState, useEffect } from "react";

export default function LoanReminder() {
  const [daysLeft, setDaysLeft] = useState(null);
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    const due = new Date("2025-07-10");
    const today = new Date();
    const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff);

    if (diff <= 7 && diff > 0) {
      setReminder("🔔 Your loan payment is due soon. Please pay on time.");
    } else if (diff <= 0) {
      setReminder("⚠️ Your loan payment is overdue.");
    } else {
      setReminder("✅ You are on track. No payment due soon.");
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 shadow rounded mt-4">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">Loan Reminder</h3>
      <p><strong>Days Left:</strong> {daysLeft}</p>
      <p>{reminder}</p>
    </div>
  );
}
