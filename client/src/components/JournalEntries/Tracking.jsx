
import React from 'react';
import JournalEntryForm from './JournalEntryForm';
import { createJournalEntry } from '../services/journalService';

const MoodTrackingPage = () => {
    const handleJournalEntrySubmit = async (entry) => {
        try {
            await createJournalEntry(entry);
            console.log('Journal entry submitted successfully');
        } catch (error) {
            console.error('Failed to submit journal entry', error);
        }
    };

    return (
        <div>
            <h2>Journal Your Mood</h2>
            <JournalEntryForm onSubmit={handleJournalEntrySubmit} />
        </div>
    );
};

export default MoodTrackingPage;
