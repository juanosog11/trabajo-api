import bcrypt from "bcryptjs";


export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
}


export const desencryptPassword = async (password,receivedPassword) => {
    return await bcrypt.compareSync(password,receivedPassword)
}



