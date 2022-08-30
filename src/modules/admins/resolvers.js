const adminModel = require("./model");
const { UserInputError } = require("apollo-server");
const { sign } = require("../../utils/jwt");

module.exports = {
  Query: {
    admins: async (_, __) => {
      try {
        return await adminModel.getAdmins();
      } catch (err) {
        throw new Error(err.message);
      }
    },

    login: async (_, { username, password }) => {
      let errors = {};

      try {
        if (username.trim() === "")
          errors.username = "username kiritilishi shart";
        if (password === "") errors.password = "password kiritilishi shart";

        const admin = (await adminModel.getAdmins()).find(
          (e) => e.admin_name == username
        );

        if (Object.keys(errors).length > 0) {
          throw new UserInputError("Siz adminlik huquqiga ega emassiz", {
            errors,
          });
        }

        if (!admin) {
          errors.username = "Siz adminlik huquqiga ega emassiz";
          throw new UserInputError("Siz adminlik huquqiga ega emassiz", {
            errors,
          });
        }

        if (admin.admin_password !== password) {
          errors.password = "password noto`g`ri";
          throw new UserInputError("password noto`g`ri", { errors });
        }

        const acces_token = sign({ username });

        admin.acces_token = acces_token;

        return {
          ...admin,
          acces_token,
        };
      } catch (err) {
        throw err;
      }
    },
  },
  Admin: {
    id: (g) => g.admin_id,
    username: (g) => g.admin_name,
    password: (g) => g.admin_password,
  },
};
