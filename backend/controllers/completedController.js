import Task from '../models/taskModel.js'; 
// nhập model “Task” từ tệp taskModel.js 

export const getCompleted = async (req, res) => {
// xử lý yêu cầu liên quan đến việc lấy danh sách các task đã hoàn thành. 
  try {
    const userID = req.params.userID;
    // Dòng này lấy giá trị của tham số userID từ yêu cầu gửi đến. 

    const completedTasks = await Task.find({ isCompleted: true, user_id: userID }).sort({ dueDate: 1 }); 
    // Tìm các nhiệm vụ có isCompleted là true Kết quả được xếp theo dueDate tăng dần.

    res.status(200).json(completedTasks); 
    // trả về danh sách các task đã hoàn thành dưới dạng JSON khi xử lý yêu cầu thành công. 
  } catch (error) {
    res.status(500).json({ error: 'Lỗi trong quá trình truy vấn dữ liệu' });
  }
};
