const authenticateUser = (req, res) => {
    console.log("Request params:", req.body);

    let { username, password } = req.body;
    let isAuthenticatedUser =
        username === "Jothinayagan" && password === "123456";
    return isAuthenticatedUser
        ? res.status(200).send({message:"Authenticated User!"})
        : res.status(401).send({ message: "Invalid User!!" });
};

module.exports = { authenticateUser };
