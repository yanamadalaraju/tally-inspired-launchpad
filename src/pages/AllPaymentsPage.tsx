// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AdminNavbar from "@/admin/AdminNavbar";

// interface Payment {
//   id: number;
//   name: string;
//   email: string;
//   mobile: string;
//   payment_method: string;
//   txnid: string;
//   amt: number;
//   payment_status: string;
// }

// const AllPaymentsPage: React.FC = () => {
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage, setEntriesPerPage] = useState(5);

//   useEffect(() => {
//     axios
//       .get<Payment[]>("http://localhost:4000/all-payments")
//       .then((res) => setPayments(res.data))
//       .catch((err) => console.error("Error fetching payments:", err));
//   }, []);

//   const filteredPayments = payments.filter(
//     (pay) =>
//       pay.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pay.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pay.txnid.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLast = currentPage * entriesPerPage;
//   const indexOfFirst = indexOfLast - entriesPerPage;
//   const currentPayments = filteredPayments.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredPayments.length / entriesPerPage);

//   return (
//     <div className="min-h-screen bg-gray-50">
//         <AdminNavbar />
//     <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh", marginTop:"20px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
//         All Payment Transactions
//       </h2>

//       {/* Controls Row */}
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap" }}>
//         {/* Show Entries */}
//         <div style={{ marginBottom: "0.5rem" }}>
//           <label>
//             Show entries:&nbsp;
//             <select
//               value={entriesPerPage}
//               onChange={(e) => {
//                 setEntriesPerPage(parseInt(e.target.value));
//                 setCurrentPage(1);
//               }}
//               style={{
//                 padding: "5px 10px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={20}>20</option>
//               <option value={50}>50</option>
//             </select>
//           </label>
//         </div>

//         {/* Search */}
//         <div>
//           <input
//             type="text"
//             placeholder="Search by Name, Email or Txn ID"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             style={{
//               padding: "8px 12px",
//               width: "250px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div style={{ overflowX: "auto" }}>
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             backgroundColor: "#fff",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             borderRadius: "8px",
//             overflow: "hidden",
//           }}
//         >
//           <thead style={{ backgroundColor: "#4a90e2", color: "#fff" }}>
//             <tr>
//               <th style={thStyle}>ID</th>
//               <th style={thStyle}>Name</th>
//               <th style={thStyle}>Email</th>
//               <th style={thStyle}>Mobile</th>
//               <th style={thStyle}>Method</th>
//               <th style={thStyle}>Txn ID</th>
//               <th style={thStyle}>Amount</th>
//               <th style={thStyle}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentPayments.map((pay) => (
                
//               <tr key={pay.id} style={{ textAlign: "center" }}>
//                 <td style={tdStyle}>{pay.id}</td>
//                 <td style={tdStyle}>{pay.name}</td>
//                 <td style={tdStyle}>{pay.email}</td>
//                 <td style={tdStyle}>{pay.mobile}</td>
//                 <td style={tdStyle}>{pay.payment_method}</td>
//                 <td style={tdStyle}>{pay.txnid}</td>
//                 <td style={tdStyle}>₹{pay.amt}</td>
//                 <td
//                   style={{
//                     ...tdStyle,
//                     color: pay.payment_status === "Success" ? "green" : "red",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {pay.payment_status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination aligned left */}
//       <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-start" }}>
//         <div>
//           {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
//             <button
//               key={num}
//               onClick={() => setCurrentPage(num)}
//               style={{
//                 marginRight: "5px",
//                 padding: "8px 12px",
//                 backgroundColor: currentPage === num ? "#4a90e2" : "#fff",
//                 color: currentPage === num ? "#fff" : "#000",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               {num}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// // Style objects
// const thStyle: React.CSSProperties = {
//   padding: "12px",
//   fontWeight: "bold",
//   fontSize: "14px",
//   borderBottom: "1px solid #ccc",
// };

// const tdStyle: React.CSSProperties = {
//   padding: "10px",
//   fontSize: "13px",
//   borderBottom: "1px solid #eee",
// };

// export default AllPaymentsPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "@/admin/AdminNavbar";

interface Payment {
  id: number;
  name: string;
  email: string;
  mobile: string;
  payment_method: string;
  txnid: string;
  amt: number;
  payment_status: string;
  company: string;   // ✅ New field
  message: string; 
}

const AllPaymentsPage: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  useEffect(() => {
    axios
      .get<Payment[]>("http://localhost:4000/all-payments")
      .then((res) => setPayments(res.data))
      .catch((err) => console.error("Error fetching payments:", err));
  }, []);

  const filteredPayments = payments.filter(
    (pay) =>
      pay.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pay.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pay.txnid.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentPayments = filteredPayments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPayments.length / entriesPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          marginTop: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
          All Payment Transactions
        </h2>

        {/* Controls Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* Show Entries */}
          <div style={{ marginBottom: "0.5rem" }}>
            <label>
              Show entries:&nbsp;
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                style={{
                  padding: "5px 10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </label>
          </div>

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search by Name, Email or Txn ID"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                padding: "8px 12px",
                width: "250px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <thead style={{ backgroundColor: "#4a90e2", color: "#fff" }}>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Mobile</th>
                <th style={thStyle}>Company</th> {/* ✅ */}
                <th style={thStyle}>Message</th> {/* ✅ */}
                <th style={thStyle}>Method</th>
                <th style={thStyle}>Txn ID</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentPayments.map((pay, index) => (
                <tr key={pay.id} style={{ textAlign: "center" }}>
                  <td style={tdStyle}>{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                  <td style={tdStyle}>{pay.name}</td>
                  <td style={tdStyle}>{pay.email}</td>
                  <td style={tdStyle}>{pay.mobile}</td>
                  <td style={tdStyle}>{pay.company}</td> {/* ✅ */}
                  <td style={tdStyle}>{pay.message}</td> {/* ✅ */}
                  <td style={tdStyle}>{pay.payment_method}</td>
                  <td style={tdStyle}>{pay.txnid}</td>
                  <td style={tdStyle}>₹{pay.amt}</td>
                  <td
                    style={{
                      ...tdStyle,
                      color: pay.payment_status === "Success" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {pay.payment_status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination aligned left */}
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-start" }}>
          <div>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                style={{
                  marginRight: "5px",
                  padding: "8px 12px",
                  backgroundColor: currentPage === num ? "#4a90e2" : "#fff",
                  color: currentPage === num ? "#fff" : "#000",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Style objects
const thStyle: React.CSSProperties = {
  padding: "12px",
  fontWeight: "bold",
  fontSize: "14px",
  borderBottom: "1px solid #ccc",
};

const tdStyle: React.CSSProperties = {
  padding: "10px",
  fontSize: "13px",
  borderBottom: "1px solid #eee",
};

export default AllPaymentsPage;
