const authenticateUser = (req, res) => {
    console.log("Request params:", req.body);
    console.log(
        `Username & password in env`,
        process.env.USERNAME,
        process.env.PASSWORD
    );
    let { username, password } = req.body;
    let isAuthenticatedUser =
        username === process.env.USERNAME && password === process.env.PASSWORD;
    return isAuthenticatedUser
        ? res.status(200).send({ message: "Authenticated User!" })
        : res.status(401).send({ message: "Invalid User!!" });
};

module.exports = { authenticateUser };
