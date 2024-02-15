// const OrderModel = require("../../models/order");
// const ProductModel = require("../../models/product");
// const transporter = require("../../../libs/mail");
// const_ = require("lodash");
// const ejs = require("ejs");
// const path = require("path");


// exports.order = async (req, res) => {
//   const body = req.body;
//   const totalPrice = body.items.reduce((total, item)=>total+item.price*item.qty, 0);
  
//   const idsPrd = body.items.map((item)=>item.prd_id);
//   const products = await ProductModel.findById({_id: {$in: idsPrd}});
//   let items = [];
//   for(let product of products){
//     const cart = _.find(body.items, {prd_id: product._id.toString()});
//     if(cart){
//       cart.name = product.name;
//       items.push(cart);
//     }
//   }
//   const html = await ejs.renderFile(path.join(req.app.get("views"), "mail.ejs"), {
//     fullName: body.fullName,
//     phone: body.phone,
//     address: body.address,
//     totalPrice,
//     items,
//   });

//   await transporter.sendMail({
//     from: '"Trung Store" <tranquoctrung08@gmail.com>',
//     to: body.email,
//     subject: "Xác nhận đơn hàng",
//     html,
//   })
//   //Create order
//   const order = {
//     fullName: body.fullName,
//     phone: body.phone,
//     email: body.email,
//     address: body.address,
//     totalPrice,
//     items: body.items,
//   };
//   await OrderModel(order).save();
//   res.status(201).json({
//     status: "success",
//     message: "Created order successfully",
//   });
// };





const OrderModel = require("../../models/order");
exports.order = async (req, res) => {
  const body = req.body;
  const totalPrice = body.items.reduce((total, item)=>total+item.price*item.qty, 0);
  //Create order
  const order = {
    fullName: body.fullName,
    phone: body.phone,
    email: body.email,
    address: body.address,
    totalPrice,
    items: body.items,
  };
  await OrderModel(order).save();
  res.status(201).json({
    status: "success",
    message: "Created order successfully",
  });
};



