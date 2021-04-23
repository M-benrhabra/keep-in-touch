const jwt = require('jsonwebtoken');

const verifiy = (req, res, next) => {
    const token = req.header('key-token');
    if (!token) return res.status(401).send('access denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('invalid token');
    }
}

module.exports = { verifiy }