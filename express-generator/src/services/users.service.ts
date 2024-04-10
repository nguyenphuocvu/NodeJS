import fs from 'node:fs'
import User from '../models/users.model'
import createError from 'http-errors'

type IUser = {
    id?: number, 
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    }
// let user : IUser [] = JSON.parse(data)

const getAll = async () =>{
    const result = await User.find()
    return result
}

const getUsersById = async ( id: string )=> {
    const result = await User.findById(id)
    if (!result) {
        throw createError (404, 'User not found')
    }
   return result
}

const createUsers = async (data: IUser) => {
    const result = await User.create(data)
    return result
}

const updateUsers = async (id: string, data: IUser) => {
    const user = await User.findByIdAndUpdate(id, data, {
        new: true
    })

    return user
}

const deteleUsers = async (id: string) => {
    const user = await User.findByIdAndDelete(id)

    return user
}


export default {
    getAll,
    getUsersById,
    createUsers,
    updateUsers,
    deteleUsers
}