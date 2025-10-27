const db = require('../config/db');
const { sendEmail } = require('../utils/email');

const saveContactMessage = async (req, resp) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {

        const query = 'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, email, subject, message];
        const result = await db.query(query, values);


        await sendEmail({ name, email, subject, message });


        return resp.status(200).json
            ({
                status: 'success',
                message: 'Saved',
                data: result.rows[0]
            });
            
    } catch (error) {
        console.error("❌ Database or Email error:", error);
        resp.status(500).json({ error: "Failed to save contact message" });
    }
};

module.exports = { saveContactMessage };
