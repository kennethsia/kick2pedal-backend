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
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"),
      },
      settings: {
        defaultFrom: "no-reply@cms.kick2pedal.net",
        defaultReplyTo: "no-reply@cms.kick2pedal.net",
      },
    },
  },
});
