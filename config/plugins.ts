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
});
