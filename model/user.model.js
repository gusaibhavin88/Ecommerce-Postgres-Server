const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.JSONB, // Assuming you want to store public_id and url as JSON
    },
    role: {
      type: DataTypes.STRING,
    },
    resetPasswordToken: DataTypes.STRING,
    resetPasswordExpire: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  users.beforeCreate(async (user, options) => {
    if (user.changed("password")) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;
    }
  });

  // This is for login functionality
  users.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  return users;
};
