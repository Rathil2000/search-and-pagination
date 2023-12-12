const Users = require("../models/userModel")

exports.create = async (req, res) => {
    data = {
        id: req.body.id,
        name: req.body.name,
        mobile: req.body.mobile,
        verified: req.body.verified,
        email: req.body.email
    }

    const User = await Users.create(data);
    console.log(User);
    res.send(User);
}
// const { docs, pages, total } = await db.Users.paginate()
exports.find = async (req, res) => {
    try {

        const limit = 10;
        const page = (req.query.page) ? req.query.page : 1;
        let offset = (page - 1) * limit;

        let UsersData = await Users.findAndCountAll({
            limit: limit,
            offset,
        });
      if(!UsersData.rows.length)return res.status(409).json({
        success: false,
        message: "No data found",
      });
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            Users: UsersData,
          });

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}
