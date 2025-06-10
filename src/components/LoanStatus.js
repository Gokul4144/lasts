// components/LoanStatus.js
import { useState, useEffect } from "react";

export default function LoanStatus() {
  const [loanStatus, setLoanStatus] = useState("Loading...");
  const [amountDue, setAmountDue] = useState(0);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoanStatus("Active");
      setAmountDue(12000);
      setDueDate("2025-07-10");
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded mt-6">
      <h3 className="text-xl font-bold text-blue-700 mb-2">Loan Status</h3>
      <p><strong>Status:</strong> {loanStatus}</p>
      <p><strong>Amount Due:</strong> ₹{amountDue}</p>
      <p><strong>Due Date:</strong> {dueDate}</p>
    </div>
  );
}
