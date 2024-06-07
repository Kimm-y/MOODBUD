import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [moodEntries, setMoodEntries] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const fetchData = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      toast.error("User is not authenticated. Please log in.");
      return;
    }

    try {
      const profileResponse = await axios.get(
        "http://127.0.0.1:8000/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(profileResponse.data);
      console.log("Profile data fetched successfully:", profileResponse.data);
    } catch (error) {
      console.error("There was an error fetching the profile data!", error);
      toast.error("Error fetching profile data. Please try again later.");
    }

    try {
      const moodEntriesResponse = await axios.get(
        "http://127.0.0.1:8000/api/mood-entries/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMoodEntries(moodEntriesResponse.data);
      console.log(
        "Mood entries fetched successfully:",
        moodEntriesResponse.data
      );
    } catch (error) {
      console.error("There was an error fetching the mood entries!", error);
      toast.error("Error fetching mood entries. Please try again later.");
    }

    try {
      const journalEntriesResponse = await axios.get(
        "http://127.0.0.1:8000/api/journal-entries/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setJournalEntries(journalEntriesResponse.data);
      console.log(
        "Journal entries fetched successfully:",
        journalEntriesResponse.data
      );
    } catch (error) {
      console.error("There was an error fetching the journal entries!", error);
      toast.error("Error fetching journal entries. Please try again later.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        fetchData();
      })();
    }
  }, []);

  return (
    <div className="container my-5 w-100 p-3 h-100 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle">
      <div className="card p-4 shadow-sm w-100 p-3 h-100 ">
        <h2 className="text-center mb-4">Profile</h2>
        <h3 className="text-center mb-4">
          {profile.user ? profile.user.username : ""}
        </h3>
        <p>
          <strong>Bio:</strong> {profile.bio}
        </p>
        <p>
          <strong>Birth Date:</strong> {profile.birth_date}
        </p>

        <h3 className="text-center mt-4">Mood Entries</h3>
        <ul className="list-group mb-4">
          {moodEntries.map((entry) => (
            <li key={entry.id} className="list-group-item">
              {entry.mood} on {entry.created_at}
            </li>
          ))}
        </ul>

        <h3 className="text-center mt-4">Journal Entries</h3>
        <ul className="list-group">
          {journalEntries.map((entry) => (
            <li key={entry.id} className="list-group-item">
              {entry.entry} on {entry.created_at}
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
