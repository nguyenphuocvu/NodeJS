import express, {Request, Response, NextFunction} from 'express'
import usersService from '../services/users.service'

const getAll = async (req: Request, res: Response) =>{
    const result = await usersService.getAll ()
    console.log ('result', result)
    res.status(200).json(result)
}

const getUsersById = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const {id} = req.params
        const user = await usersService.getUsersById(id)
        res.status(200).json(user);

    } catch (error) {
        next(error)
    }
    
}

const createUsers = async (req: Request, res: Response) =>{
    const data = req.body
    const user = await usersService.createUsers (data)
    res.status(201).json({
        message: 'Create User',
        user: user
    });
}

const updateUsers = async (req: Request, res: Response) =>{
    const {id} = req.params
    const data = req.body
    const user = await usersService.updateUsers(id, data)

    res.status(200).json({ 
    message: `Update Users by ID ${id}`,
    user: user
  });
}

const deteleUsers = async (req: Request, res: Response) =>{
    const {id} = req.params
    const user = await usersService.deteleUsers(id)
  res.status(200).json({ 
    message: `Delete Users by ID ${id}`,
    user: user
    });
}

export default {
    getAll, 
    getUsersById,
    createUsers,
    updateUsers,
    deteleUsers
}