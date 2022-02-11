import {UserController, GetUsers, GetUser} from "../../../controllers/user.controller"
import express, { Router, Request, Response} from "express";

const router: Router = express.Router();

router.get("/users", async(_req: Request, res: Response) =>{
  const userData: GetUsers = await UserController.getUsers(_req);
  res.header("X-version","1");
  res.header("X-sender","user");
  res.header("X-destination","enrouting");
  res.send(userData);
})

router.get("/users/:userId", async(_req: Request, res: Response) =>{
  const userData: GetUser = await UserController.getUser(_req);
  res.header("X-version","1");
  res.header("X-sender","user");
  res.header("X-destination","enrouting");
  res.send(userData);
})

router.get("/user/email/:email", async(_req: Request, res: Response) =>{
  const userData: GetUser = await UserController.getUserByEmail(_req);
  res.header("X-version","1");
  res.header("X-sender","user");
  res.header("X-destination","enrouting");
  res.send(userData);
})


router.post("/user", async(_req: Request, res: Response) => {
  const verify = await UserController.saveUser(_req);
  const response = JSON.parse(JSON.stringify(verify));
  res.header("X-version","1");
  res.header("X-sender","user");
  res.header("X-destination","enrouting");
  res.status(200).send(response);
});

router.put("/user/update", async(_req: Request, res: Response) => {
  const verify = await UserController.updateUser(_req);
  const response = JSON.parse(JSON.stringify(verify));
  res.header("X-version","1");
  res.header("X-sender","user");
  res.header("X-destination","enrouting");
  res.status(200).send(response);
});


router.delete("/admin/user/:userId", async(_req: Request, res: Response) => {
  const verify = await UserController.deleteUser(_req);
  res.header("X-version","1");
  res.header("X-sender","user");
  res.header("X-destination","enrouting");
  if(verify)
  {
    res.status(200).send({status:"Deleted"});
  }
  else
  {
    res.status(200).send({status:"No user to be deleted"});
  }
});

export default router;
