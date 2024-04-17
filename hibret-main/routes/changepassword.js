import express from 'express';
const bcrypt = require('bcrypt');
import payload from ('payload');
const router= express.Router();

router.post('/', async (req, res) => {
    const { userId, newpassword } = req.body;

    try {
        // Retrieve user data from Payload CMS database
        const user = await payload.find({ collection: 'users', where: { _id: userId } });
        if (!user) {
            throw new Error('User not found');
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the new password securely with the generated salt
        const hashedPassword = await bcrypt.hash(newpassword, salt);

        // Update password in the user document
        await payload.update({
            collection: 'users',
            id: userId,
            data: {
                // Assuming the password field is named "password"
                hash: hashedPassword
            }
        });

        res.send('Password changed successfully');
    } catch (error) {
        console.error("Error changing password:", error);
        throw error; // Re-throw to let the calling endpoint handle it
    }
});

export default router;