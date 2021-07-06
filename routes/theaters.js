
  
import express from "express";
import { Theaters } from "../models/theater.js";
const router = express.Router();

// 5x + 6x = x(5 +6)

router
  .route("/")
  .get(async (request, respone) => {
    // const { like } = request.query;
    // `^${request.query.title}`
    console.log("before", request.query);
    if (request.query.title) {
      request.query.title = new RegExp("^" + request.query.title, "i");
    }
    // /idly/
    console.log("after", request.query);

    // const recipe = await Theaters.find(request.query);
    const theater=await Theaters.find();
    respone.send(theater);
  })
  .post(async (request, respone) => {
    const addTheater = request.body;
    console.log(addRecipe);
    const theater = new Theaters(addTheater);

    try {
      const newTheater = await theater.save();
      respone.send(newTheater);
    } catch (err) {
      respone.status(500);
      respone.send(err);
    }
  });

router.get("/:id", async (request, respone) => {
  const { id } = request.params;
  const theater = await Theaters.findById(id);
  respone.send(theater);
});

export const theaterRouter=router;