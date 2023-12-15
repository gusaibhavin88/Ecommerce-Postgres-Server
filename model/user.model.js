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
  return users;
};
