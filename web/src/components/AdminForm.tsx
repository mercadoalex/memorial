import React, { useState } from 'react';

const AdminForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [yearOfBirth, setYearOfBirth] = useState('');
    const [yearOfDeath, setYearOfDeath] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = { firstName, lastName, yearOfBirth, yearOfDeath, description };

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle successful submission
                console.log('Data submitted successfully');
            } else {
                // Handle errors
                console.error('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Year of Birth"
                value={yearOfBirth}
                onChange={(e) => setYearOfBirth(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Year of Death"
                value={yearOfDeath}
                onChange={(e) => setYearOfDeath(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdminForm;