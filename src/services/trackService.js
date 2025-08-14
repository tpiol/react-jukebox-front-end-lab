const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;


const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err)
    }
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

const update = async (formData, trackId) => {
    try {
        const res = await fetch(`${BASE_URL}/${trackId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

export {
    index,
    create,
    update,
};
