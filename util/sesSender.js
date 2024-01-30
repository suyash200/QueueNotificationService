import AWS from 'aws-sdk'
import { configDotenv } from "dotenv";


configDotenv()



export const EmailSender = new AWS.SES({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.Acces_id,
        secretAccessKey: process.env.Secrey_Key
    },


}).sendEmail({
    Source: 'suyashlade@gmail.com',
    Destination: {
        ToAddresses: ['yashlade@gmail.com']
    },
    Message: {
        Subject: {
            Data: "test Email",
            Charset: "UTF-8"
        },
        Body: {
            Text: {
                Charset: "UTF-8",
                Data: 'HELLOW WORLD'
            },

        }
    }

}, (err, data) => {
    if (err) {
       return err
    } else {
      return data.MessageId
    }
})








