import homePageModel from "../models/homePageModel";

let handleHelloWorld = async (req, res) => {
    return res.render("homepage.ejs",{
        user: req.user
    });
};

let showUsers = async (req, res) => {
    homePageModel.showUsers();
};



module.exports = {
    handleHelloWorld: handleHelloWorld,
    showUsers: showUsers
};
