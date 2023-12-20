module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define("orders", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    shippingInfo: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    orderItems: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    paymentInfo: {
      type: DataTypes.JSONB,
      allowNull: true,
    },

    paidAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    itemsPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    taxPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    shippingPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Processing",
    },
    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  return orders;
};
