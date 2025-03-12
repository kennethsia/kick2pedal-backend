export default ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: [
          "firstName",
          "middleName",
          "lastName",
          "nickname",
          "dateOfBirth",
          "birthGender",
          "parentFullName",
          "contactNumber",
          "plateNumber",
          "teamName",
          "riderType",
          "foreignCountry",
        ],
      },
    },
  },
  email: {
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: env("SMTP_FROM", "no-reply@cms.kick2pedal.net"),
        defaultReplyTo: env("SMTP_REPLY_TO", "no-reply@cms.kick2pedal.net"),
      },
    },
  },
});
