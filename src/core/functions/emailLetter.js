import emailjs from "emailjs-com";
import { MY_SERVICE_ID, MY_TEMPLATE_ID, MY_USER_ID } from "../utilis/constants";

export const sendEmail = (playerName, playerScore) => {
    const templateParams = {
        playerName: playerName,
        playerScore: playerScore,
    };

    emailjs
      .send(
        MY_SERVICE_ID, 
        MY_TEMPLATE_ID,  
        templateParams,     
        MY_USER_ID     
    )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
}