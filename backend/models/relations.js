const Address = require('./addressModel');
const Cart = require('./cartModel');
const Coupon = require('./couponModel');
const Category = require('./categoryModel');
const Member = require('./memberModel');
const Order = require('./orderModel');
const OrderItem = require('./orderItemModel');
const Payment = require('./paymentModel');
const Product = require('./productModel');
const Review = require('./reviewModel');

Address.belongsTo(Member, { foreignKey: 'member_id' });

Cart.belongsTo(Member, { foreignKey: 'member_id' });
Cart.belongsTo(Product, { foreignKey: 'product_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });

Member.hasMany(Address, { foreignKey: 'member_id' });
Member.hasMany(Cart, { foreignKey: 'member_id' });
Member.hasMany(Order, { foreignKey: 'member_id' });
Member.hasMany(Review, { foreignKey: 'member_id' });

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

Order.belongsTo(Member, { foreignKey: 'member_id' });
Order.belongsTo(Address, { foreignKey: 'address_id' });
Order.hasMany(OrderItem, { foreignKey: 'order_id' });

Payment.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(Cart, { foreignKey: 'product_id' });
Product.hasMany(Order, { foreignKey: 'product_id' });
Product.hasMany(Review, { foreignKey: 'product_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Review.belongsTo(Member, { foreignKey: 'member_id' });
Review.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
    Address,
    Cart,
    Coupon,
    Category,
    Member,
    Order,
    OrderItem,
    Payment,
    Product,
    Review,
};