// import React, { useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import { createMoodEntry } from "./MoodService";
// import JournalEntryForm from "../JournalEntries/JournalForm";
// import { toast, ToastContainer } from "react-toastify";
// import axios from 'axios';

// const MoodEntryForm = () => {
//   const [mood, setMood] = useState("");



//   useEffect(() => {
//     axios.get('http://localhost:8000/api/mood-entries/', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('access')}`
//       }
//     })
//     .then(response => {
//       setMoodEntries(response.data);
//     })
//     .catch(error => {
//       console.error('There was an error fetching the mood entries!', error);
//     });
//   }, []);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       toast
//         .promise(createMoodEntry({ mood }), {
//           pending: "Sending mood",
//           success: "Mood Submmited Successfully",
//           error: "Mood not sent. Please try again.",
//         })
//         .then(() => {
         
//             setMood("");
//             console.log("Mood entry submitted successfully");
//         });
//     } catch (error) {
//       console.error("Failed to submit mood entry:", error);
//     }
//   };

//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card p-4 shadow-sm">
//             <h2 className="text-center mb-4">Mood Tracker</h2>
//             <form onSubmit={handleSubmit} className="mb-4">
//               <div className="mb-3">
//                 <select
//                   value={mood}
//                   onChange={(e) => setMood(e.target.value)}
//                   className="form-select"
//                 >
//                   <option value="">Select your mood</option>
//                   <option value="Amazing">Amazing 😃</option>
//                   <option value="Good">Good 🙂</option>
//                   <option value="Meh">Meh 😐</option>
//                   <option value="Sad">Sad 😔</option>
//                   <option value="Angry">Angry 😠</option>
//                 </select>
//               </div>
//               <div className="d-grid">
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </div>
//             </form>

//             <div className="mb-4">
//               <JournalEntryForm />
//             </div>

//             <div className="text-center">
//               <Link to="/home">
//                 <button className="btn btn-secondary btn-lg">BACK HOME</button>
//               </Link>
//               <ul>
//         {moodEntries.map(entry => (
//           <li key={entry.id}>{entry.mood} on {entry.date}</li>
//         ))}
//       </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoodEntryForm;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import JournalEntryForm from "../JournalEntries/JournalForm";
import 'react-toastify/dist/ReactToastify.css';

const MoodEntryForm = () => {
  const [mood, setMood] = useState("");
  const [moodEntries, setMoodEntries] = useState([]);

  useEffect(() => {
    const fetchMoodEntries = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/mood-entries/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
          }
        });
        setMoodEntries(response.data);
      } catch (error) {
        console.error('There was an error fetching the mood entries!', error);
        toast.error('Error fetching mood entries. Please try again later.');
      }
    };

    fetchMoodEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/mood-entries/', { mood }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
      });
      toast.success("Mood Submitted Successfully");
      setMoodEntries([...moodEntries, response.data]);
      setMood("");
      console.log("Mood entry submitted successfully");
    } catch (error) {
      toast.error("Mood not sent. Please try again.");
      console.error("Failed to submit mood entry:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm">
            <h2 className="text-center mb-4">Mood Tracker</h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select your mood</option>
                  <option value="Amazing">Amazing 😃</option>
                  <option value="Good">Good 🙂</option>
                  <option value="Meh">Meh 😐</option>
                  <option value="Sad">Sad 😔</option>
                  <option value="Angry">Angry 😠</option>
                </select>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>

            <div className="mb-4">
              <JournalEntryForm />
            </div>

            <div className="text-center">
              <Link to="/home">
                <button className="btn btn-secondary btn-lg">BACK HOME</button>
              </Link>
            </div>

            <h3 className="text-center mt-4">Mood Entries</h3>
            <ul className="list-group">
              {moodEntries.map(entry => (
                <li key={entry.id} className="list-group-item">
                  {entry.mood} on {entry.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MoodEntryForm;
