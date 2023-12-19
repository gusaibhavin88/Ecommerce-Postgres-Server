// Define the reviews model
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define("reviews", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.UUID,
      references: {
        model: "products",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return reviews;
};
