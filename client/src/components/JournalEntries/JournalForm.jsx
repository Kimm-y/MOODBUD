// import React, { useState } from "react";
// import { createJournalEntry } from "./JournalService";
// import { toast, ToastContainer } from "react-toastify";

// const JournalEntryForm = () => {
//   const [journalEntry, setJournalEntry] = useState("");

//   const handleJournalSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       toast
//         .promise(createJournalEntry(journalEntry), {
//           pending: "Sending journal",
//           success:
//             "Journal Submmited Successfully",
//           error: "Journal not sent. Please try again.",
//         })
//         .then(() => {
//           setJournalEntry("");
//           console.log("Journal entry submitted successfully");
//         });
//     } catch (error) {
//       console.error("Failed to submit journal entry", error);
//     }
//   };

//   return (
//     <>
//     <ToastContainer/>
//       <form onSubmit={handleJournalSubmit}>
//         <div className="mb-3">
//           <textarea
//             value={journalEntry}
//             onChange={(e) => setJournalEntry(e.target.value)}
//             placeholder="Write your journal entry here..."
//             className="form-control"
//             rows="10"
//           ></textarea>
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit Journal Entry
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default JournalEntryForm;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JournalEntryForm = () => {
  const [journalEntry, setJournalEntry] = useState("");

  const handleJournalSubmit = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post('http://127.0.0.1:8000/api/journal-entries/', { entry: journalEntry }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        }),
        {
          pending: "Sending journal...",
          success: "Journal Submitted Successfully",
          error: "Journal not sent. Please try again.",
        }
      );
      setJournalEntry("");
      console.log("Journal entry submitted successfully");
    } catch (error) {
      console.error("Failed to submit journal entry", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleJournalSubmit}>
        <div className="mb-3">
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Write your journal entry here..."
            className="form-control"
            rows="10"
          ></textarea>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit Journal Entry
          </button>
        </div>
      </form>
    </>
  );
};

export default JournalEntryForm;
