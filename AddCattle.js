import React from 'react';
import './styles.css'; // Ensure the CSS file is in the correct location

const AddCattle = () => {
    return (
        <div className="container">
            <h1>Add Cattle Details</h1>
            <form action="#" method="POST" encType="multipart/form-data">
                {/* Upload Cattle Photo */}
                <div className="form-group">
                    <label htmlFor="photo">Cattle Photo:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" required />
                </div>

                {/* Cattle Name */}
                <div className="form-group">
                    <label htmlFor="name">Cattle Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter cattle name" required />
                </div>

                {/* Cattle Breed */}
                <div className="form-group">
                    <label htmlFor="breed">Cattle Breed:</label>
                    <input type="text" id="breed" name="breed" placeholder="Enter cattle breed" required />
                </div>

                {/* Cattle Age */}
                <div className="form-group">
                    <label htmlFor="age">Cattle Age (in years):</label>
                    <input type="number" id="age" name="age" min="0" placeholder="Enter cattle age" required />
                </div>

                {/* Health Details */}
                <div className="form-group">
                    <label htmlFor="health">Health Details:</label>
                    <textarea id="health" name="health" rows="4" placeholder="Enter health details" required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit">Add Cattle</button>
            </form>
        </div>
    );
};

export default AddCattle;
