const db = require("../../config/database");

const Products = db.products;

exports.createProductService = async (data) => {
  console.log(data);
  const createProduct = await Products.create(data);
  console.log(createProduct);
  return createProduct;
};

exports.isProductExistService = async (name) => {
  const isExist = await Products.findOne({
    where: {
      name: name,
    },
  });
  return isExist;
};
