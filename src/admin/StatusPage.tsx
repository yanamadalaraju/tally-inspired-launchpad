
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar';
import ExistingCustomerNav from '@/components/ExistingCustomerNav';

const StatusPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const status = params.get("status");
  const txnid = params.get("txnid");
  const amt = params.get("amt");
  const mode = params.get("mode");
  const error = params.get("error");
  const created_at = params.get("created_at");

  return (
    
    <div className="h-screen flex items-center justify-center flex-col mt-20">
      <div className="w-11/12 md:w-1/2 shadow rounded-md py-5 px-4 flex flex-col gap-y-4 bg-white">
        <h1 className="text-4xl text-center text-green-600">Status: {status}</h1>
        <p><strong>Transaction ID:</strong> {txnid}</p>
        <p><strong>Amount:</strong> ₹{amt}</p>
        <p><strong>Payment Mode:</strong> {mode}</p>
        <p><strong>Error:</strong> {decodeURIComponent(error || '')}</p>
        <p><strong>Created At:</strong> {decodeURIComponent(created_at || '')}</p>
        <button onClick={() => navigate(-1)} className="px-12 py-2 bg-black text-white">
          Back
        </button>
      </div>
    </div>
    
  )
}

export default StatusPage;