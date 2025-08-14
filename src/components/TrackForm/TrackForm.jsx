import { useState } from "react";

const TrackForm = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        artist: ""
    });

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.title]: evt.target.value });
    };

    return (
        <div>
            <form>
                <label htmlFor="title"> Title</label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="artist">Artist</label>
                <input
                    id="artist"
                    name="artist"
                    value={formData.age}
                    onChange={handleChange}
                    required />
                <button type="submit">add new track</button>
            </form>
        </div>
    )
}

export default TrackForm;