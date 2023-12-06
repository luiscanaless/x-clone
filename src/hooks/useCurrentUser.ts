import { User } from "@prisma/client"
import axios from "axios"


export const useCurrentUser = async (): Promise<User> => {

    const { data: currentUser } = await axios('http://localhost:3000/api/current')

    return currentUser
}
