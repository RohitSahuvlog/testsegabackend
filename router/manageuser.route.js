const Router = require("express")
const managerouter = Router()
const { manageschema } = require("../modules/manageuser.module")
managerouter.get("/get", async (req, res) => {
    const { userID } = req.body
    const managedata = await manageschema.find()
    res.send(managedata)

})

managerouter.post("/post", async (req, res) => {
    var data = req.body
    try {
        const manageuser = new manageschema(req.body)
        await manageuser.save()
        const managedata = await manageschema.find()
        res.send(managedata)
    }
    catch (error) {
        console.log(error)

        res.send({ message: "some went wrong for create manage data " })
    }



})


module.exports = {
    managerouter
}