import express, {Request, Response } from 'express';
import usersController from '../../controllers/users.controller';
const router = express.Router();

//GET All
router.get('', usersController.getAll)

//GET By ID
router.get('/:id', usersController.getUsersById)

//POST
router.post('', usersController.createUsers)


//PUT
router.put('/:id', usersController.updateUsers)

//DELETE
router.delete('/:id', usersController.deteleUsers)

export default router;