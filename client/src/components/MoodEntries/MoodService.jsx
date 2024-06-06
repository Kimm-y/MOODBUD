import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const createMoodEntry = async (moodEntry) => {
    try {
        const response = await axios.post(`${API_URL}mood-entries/`, moodEntry);
        return response.data;
    } catch (error) {
        console.error('Failed to create mood entry:', error);
        throw error;
    }
};



//  similar functions for fetching, updating, and deleting mood entries to be added
