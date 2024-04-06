import mongoose from 'mongoose';

const dbConfig = {
    connectionString: 'mongodb://localhost:27017', 
    // Đổi thông tin kết nối tới MongoDB
    dbName: 'ToDoListDB', 
    // Đổi tên cơ sở dữ liệu nếu cần
};

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(
            `${dbConfig.connectionString}/${dbConfig.dbName}`, 
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log('Connected to MongoDB');
        return mongoose.connection;
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        throw error;
    }
};

/*

Lệnh bạn đưa ra là một đoạn mã JavaScript. Hãy xem xét từng phần:
1.	const connectToMongoDB = async () => { ... }: Đây là khai báo một hàm async (hàm bất đồng bộ) có tên connectToMongoDB. Hàm này được sử dụng để kết nối đến cơ sở dữ liệu MongoDB.
2.	await mongoose.connect({dbConfig.connectionString}/{dbConfig.dbName}, { useNewUrlParser: true, useUnifiedTopology: true });: Trong hàm connectToMongoDB, đoạn mã này sử dụng thư viện Mongoose để kết nối đến cơ sở dữ liệu MongoDB. Nó sử dụng chuỗi kết nối từ biến dbConfig.connectionString và tên cơ sở dữ liệu từ biến dbConfig.dbName. Các tùy chọn { useNewUrlParser: true, useUnifiedTopology: true } được truyền vào để đảm bảo việc kết nối sử dụng các tùy chọn mới nhất.
3.	console.log('Connected to MongoDB');: Khi kết nối thành công, dòng này sẽ in ra thông báo “Connected to MongoDB” trên console.
4.	return mongoose.connection;: Hàm sẽ trả về đối tượng kết nối của MongoDB để bạn có thể sử dụng nó trong các phần khác của mã.
5.	catch (error) { ... }: Phần này xử lý lỗi nếu việc kết nối đến MongoDB gặp vấn đề. Nếu có lỗi, thông báo lỗi sẽ được in ra console và hàm sẽ ném ra lỗi để xử lý ở phần gọi hàm.
Tóm lại, đoạn mã trên có nhiệm vụ kết nối đến cơ sở dữ liệu MongoDB và trả về đối tượng kết nối. Nếu có lỗi, nó sẽ xử lý và ném ra lỗi để xử lý ở phần gọi hàm.12


*/

export { connectToMongoDB };
