
import { AddCustomer } from "./util/dbConnect.js"
import { EmailSender } from "./util/sesSender.js"


const testBody = { Sender: 'yashlade@gmail.com' }


export const handler = async (event, context, callback) => {
    const body = JSON.parse(event.Records[0].body)
    try {

        EmailSender;
        AddCustomer(body)


        return {
            status: 200,
            message: "sucessfully sent notification email"
        }

    } catch (error) {
        console.log(error)
        return error
    }



}



