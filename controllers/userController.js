import { Client } from "../domain/models"

export const registerUser = () => {
    const data = [
        {clientId:1, name: "jhon", lastname: "doe"}
    ]
    return new Client(data[0])
}
