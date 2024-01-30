import { connect, disconnect } from "mongoose";
import { configDotenv } from "dotenv";
import { SenderModel } from "./SenderModel.js";


configDotenv()

export async function AddCustomer(body) {

    connect(process.env.MongoUrl)
    const res = await SenderModel.create({ Sender: body.Sender, date: Date.now() })
    disconnect()
    console.log(res)
    return res

}