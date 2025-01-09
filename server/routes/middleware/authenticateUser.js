// middleware/authenticateUser.js
const authenticateUser = (req, res, next) => {
    if (req.session && req.session.userId) {
        next(); // User is authenticated
    } else {
        res.status(401).json({ message: 'Please log in to access this resource.' });
    }
};

module.exports = authenticateUser;
