const Query = async () => {
    const res = await fetch("https://flyair.onrender.com/services");
    const data = await res.json();
    return data;
};

export default Query;