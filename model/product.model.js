module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: {
          args: 4,
          msg: "Stock should not exceed 4 characters",
        },
      },
    },
    numOfReviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return products;
};
