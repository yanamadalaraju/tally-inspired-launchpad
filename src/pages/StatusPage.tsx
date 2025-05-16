// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const StatusPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const params = new URLSearchParams(location.search);
//   const status = params.get("status");
//   const txnid = params.get("txnid");
//   const amt = params.get("amt");
//   const mode = params.get("mode");
//   const error = params.get("error");
//   const created_at = params.get("created_at");

//   return (
//     <div className="h-screen flex items-center justify-center flex-col">
//       <div className="w-11/12 md:w-1/2 shadow rounded-md py-5 px-4 flex flex-col gap-y-4 bg-white">
//         <h1 className="text-4xl text-center text-green-600">Status: {status}</h1>
//         <p><strong>Transaction ID:</strong> {txnid}</p>
//         <p><strong>Amount:</strong> ₹{amt}</p>
//         <p><strong>Payment Mode:</strong> {mode}</p>
//         <p><strong>Error:</strong> {decodeURIComponent(error || '')}</p>
//         <p><strong>Created At:</strong> {decodeURIComponent(created_at || '')}</p>
//         <button onClick={() => navigate(-1)} className="px-12 py-2 bg-black text-white">
//           Back
//         </button>
//       </div>
//     </div>
//   )
// }

// export default StatusPage;

import ExistingCustomerNav from '@/components/ExistingCustomerNav';
import React from 'react'
import { Footer } from 'react-day-picker';
import { useLocation, useNavigate } from 'react-router-dom'

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
    <div className="min-h-screen bg-gray-50">
  {/* Fixed Nav */}
  <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
    <ExistingCustomerNav />
  </div>
    <div className="h-screen flex items-center justify-center flex-col ">
      <div className="w-11/12 md:w-1/2 shadow rounded-md py-5 px-4 flex flex-col gap-y-4 bg-white">
        <h1 className={`text-4xl text-center ${status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
          Payment {status}
        </h1>
        {status === 'Success' && (
          <div className="text-center mb-4">
            <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="mt-2 text-lg font-medium text-gray-900">Payment Successful!</p>
          </div>
        )}
        {status === 'Failed' && (
          <div className="text-center mb-4">
            <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="mt-2 text-lg font-medium text-gray-900">Payment Failed</p>
          </div>
        )}
        
        <div className="space-y-2">
          <p><strong>Transaction ID:</strong> {txnid}</p>
          <p><strong>Amount:</strong> ₹{amt}</p>
          <p><strong>Payment Mode:</strong> {mode}</p>
          {error && <p><strong>Error:</strong> {decodeURIComponent(error)}</p>}
          <p><strong>Date & Time:</strong> {decodeURIComponent(created_at || '')}</p>
        </div>

        <button 
          onClick={() => navigate('/')} 
          className="px-12 py-2 bg-black text-white hover:bg-gray-800 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
    
    </div>
    
  )
}

export default StatusPage;