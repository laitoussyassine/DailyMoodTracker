import React, { useState } from 'react';
import { MdSentimentDissatisfied, MdSentimentSatisfied, MdMoodBad } from 'react-icons/md';
import { IoMdHappy } from "react-icons/io";
import Message from './Message';


const Mood = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [dispayMod, setDisplayMod] = useState(false)


    const moodOptions = [
        { mood: 'Happy', icon: <IoMdHappy size={30} />, color: 'text-yellow-500' },
        { mood: 'Satisfied', icon: <MdSentimentSatisfied size={30} />, color: 'text-green-500' },
        { mood: 'Dissatisfied', icon: <MdSentimentDissatisfied size={30} />, color: 'text-yellow-500' },
        { mood: 'Angry', icon: <MdMoodBad size={30} />, color: 'text-red-500' },
    ];

    const handleMoodSelection = (mood) => {
        setSelectedMood(mood);
    };

    const handleSubmit = () => {
        if (selectedMood) {
            // For simplicity, log the selected mood to the console
            console.log(`Selected Mood: ${selectedMood.mood}`);

            // Display confirmation message
            setConfirmationMessage(`Thank you for selecting ${selectedMood.mood}!`);
        }
        setDisplayMod(true);
    };
    return (
        <>
            {!dispayMod  ? <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold mb-4">Mood Selector</h1>

                <div className="flex space-x-4">
                    {moodOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleMoodSelection(option)}
                            className={`p-4 rounded-full hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 ${option.color} ${selectedMood === option ? 'bg-gray-200' : ''}`}
                        >
                            {option.icon}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>

            </div>

            :
                <Message confirmationMessage={confirmationMessage} />
            }
            
        </>
    )
}

export default Mood