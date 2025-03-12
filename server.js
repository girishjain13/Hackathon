const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let participants = [];

app.post("/addParticipant", (req, res) => {
    const { name, email, phone, company } = req.body;
    participants.push({ name, email, phone, company });
    res.status(200).json({ message: "Participant added successfully" });
});

app.get("/getParticipants", (req, res) => {
    res.json(participants);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
