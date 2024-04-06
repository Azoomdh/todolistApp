import express from 'express';
//  nhập thư viện Express vào mã của bạn. Express là một framework phổ biến cho Node.js, giúp bạn xây dựng ứng dụng web và API một cách dễ dàng. Bằng cách nhập Express, bạn có thể sử dụng các tính năng của nó để tạo và quản lý các route, middleware, và xử lý các yêu cầu từ client.

import { getCompleted } from '../controllers/completedController.js';
//  nhập một hàm hoặc module từ tệp completedController.js. Trong trường hợp này, bạn đang nhập hàm getCompleted từ tệp controller. Hàm này có thể được sử dụng để xử lý các yêu cầu liên quan đến việc lấy danh sách các task đã hoàn thành (completed).


const completedRoutes = express.Router();
// tạo một đối tượng Router trong Express. Router cho phép bạn định nghĩa các route và xử lý các yêu cầu HTTP (ví dụ: GET, POST) cho các đường dẫn cụ thể. Trong trường hợp này, bạn đang tạo một router cho các route liên quan đến việc lấy danh sách các task đã hoàn thành.


completedRoutes.get('/getCompleted/:userID', getCompleted); // Xác định route GET /completed để gọi hàm getCompleted
//  định nghĩa một route cho phương thức GET. Khi có yêu cầu đến đường dẫn /getCompleted/:userID, Express sẽ gọi hàm getCompleted để xử lý yêu cầu. Tham số :userID là một tham số động, có thể thay đổi tùy thuộc vào yêu cầu từ client.

export default completedRoutes;
//  xuất đối tượng completedRoutes để có thể sử dụng trong các tệp khác của ứng dụng của bạn.