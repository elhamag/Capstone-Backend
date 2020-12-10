const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const LocationModel = require("../models").Location;
const EventModel = require("../models").Event;

// CREATE A NEW SONG FOR AN ARTIST
router.post("/:id/newevent", async (req, res) => {
    let location = await LocationModel.findByPk(req.params.id);
    let event = await location.createEvent(req.body);
    res.json({ location, event });
  });
  
  // GET LOCATION
  router.get("/profile/:id", async (req, res) => {
    let location = await LocationModel.findByPk(req.params.id, {
      include: [{ model: UserModel, attributes: ["id", "name"] }],
    });
    res.json({ location });
  });
  
  // GET ALL LOCATIONS
  router.get("/", async (req, res) => {
    let allLocations = await LocationModel.findAll({ include: EventModel });
    res.json({ allLocations });
  });
  
  // CREATE A NEW LOCATION
  router.post("/", async (req, res) => {
    let newLocation = await LocationModel.create(req.body);
    res.json({ newLocation });
  });
  
  // UPDATE A LOCATION
  router.put("/:id", async (req, res) => {
    let updatedLocation = await LocationModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    let location = await LocationModel.findByPk(req.params.id, {
      include: EventModel,
    });
    res.json({ location });
  });
  
  // DELETE A LOCATION
  router.delete("/:id", async (req, res) => {
    await LocationModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `Location with id ${req.params.id} was deleted`,
    });
  });
  
  module.exports = router;