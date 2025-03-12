export default {
  async afterCreate(event: any) {
    const { result } = event;

    try {
      // Get the full registration data with populated relations
      const registration = (await strapi.entityService.findOne(
        "api::registration.registration",
        result.id,
        {
          populate: {
            user: true,
            event: true,
          },
        }
      )) as any;

      console.log(registration);

      // Send confirmation email
      // await strapi.plugins["email"].services.email.send({
      //   to: registration.user.email,
      //   subject: `Registration Confirmation - ${registration.event.title}`,
      //   html: `
      //     <h1>Registration Confirmation</h1>
      //     <p>Dear ${registration.user.firstName},</p>
      //     <p>Thank you for registering for ${registration.event.title}.</p>
      //     <p>Registration Details:</p>
      //     <ul>
      //       <li>Event: ${registration.event.title}</li>
      //       <li>Amount: ${registration.amount}</li>
      //     </ul>
      //     <p>You can view your registration status in your <a href="https://kick2pedal.net/dashboard">member portal</a></p>
      //     <p>We will review your registration and update you once it's confirmed.</p>
      //     <p>Best regards,<br>Kick2Pedal Team</p>
      //   `,
      // });
      await strapi.plugins["email"].services.email.send({
        to: registration.user.email,
        // from: "no-reply@cms.kick2pedal.net", //e.g. single sender verification in SendGrid
        // cc: "valid email address",
        // bcc: "valid email address",
        // replyTo: "valid email address",
        subject: "The Strapi Email plugin worked successfully",
        text: "Hello world!",
        html: "Hello world!",
      });
    } catch (error) {
      console.error("Error sending registration confirmation email:", error);
    }
  },
};
