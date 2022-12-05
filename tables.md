tables

model 1-admin---> firstName,lastName,email,password
API:

1. login
   /login

2. forget password
   /verfy-email
   /verify-code
   /password-reset

3. accounts
   /edit-profile
   /change-password

model 2-products---> image,category,title,price,description, addedOn ,status

4)products
/create-product
/update-products
/get-products-details
/is-available

model 3-reviews---> userName,rating,comment,addedOn
/get-reviews
/delete-review
/get-user-profile

model 4-order--->order_date,product_name, amount_paid,order_status(inprocess,cancelled,delivered,received)


/received-order(get order where status is received)
/search-order

/inprocess-orders(get order where status equals process)
/update-category

/delivered-order (get orders where status equals to deliver)

/cancelled-order (get orders where status equals to cancelled)

model 5-order-details-->order_date,product_id,order_status,order_id,payment_method,user_name, user_email,user_phone,card_num,user_address,total_amount
/order-details
/accept
/reject
/assign-rider

model 6-payment--> oredr_id,order_date,total_amount,payment_method
/paymnet-details

model 7-users--> username,address,card,password,email
/get-users
/get-user/details
/block-user

model 8-feedback-->username,email,date,subject,message

/get-feedback
/delete-feedback

model 9-category----> add_category



SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))


sub query 
SELECT orders.*, IFNULL((SELECT SUM(order_details.total_amount) FROM order_details WHERE order_details.order_id = orders.id),0) as total_price FROM orders,order_details


Select * FROM users WHERE id = (SELECT user_id FROM orders WHERE users.id = orders.user_id)

Select *,(SELECT COUNT(customer_id) FROM orders WHERE users.id = orders.customer_id) as order_count FROM users 

HAVING id = 1; 
