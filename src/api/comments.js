import axios from "axios";

// Axios 인스턴스 생성
export const commentApi = axios.create({
  baseURL: "http://localhost:5000/comments"
});

// 서버에서 댓글 불러오는 함수
export const fetchComments = async () => {
  const { data } = await commentApi.get("/");
  return data;
};

// 서버에 새 댓글 생성하는 함수
export const postComment = async (comment) => {
  const { data } = await commentApi.post("/", {
    ...comment,
    userId: "s77772005", //임시로 ID 넣어놈.
    createdAt: new Date().toISOString()
  });

  return data;
};

// 서버에서 댓글을 삭제하는 함수
export const deleteComment = async (id) => {
  await commentApi.delete(`/${id}`);

  return id;
};

// 서버에서 댓글 수정하는 함수
export const updateComment = async ({ id, text }) => {
  const { data } = await commentApi.patch(`/${id}`, {
    text,
    createdAt: new Date().toISOString()
  });
};
