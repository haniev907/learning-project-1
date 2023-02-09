import React from "react";

const CommentUser = () => {
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);

  const handleClick = () => {
    if (name.trim() && comment.trim() !== "") {
      const newData = {
        _id: Math.random(),
        newComment: comment,
        commentUser: name,
      };
      setComments((x) => [...x, newData]);
      setName("");
      setComment("");
    } else {
      alert("Поле комментарий не должен быть пустым");
    }
  };

  const handleDelete = (id) => {
    setComments(comments.filter((x) => x._id !== id));
  };
  return (
    <div className="container">
      <h2>Новый комментарий</h2>
      <div className="card mb-2">
        <input
          className="form-control"
          placeholder="Введите ваше имя"
          type="text"
          name="name"
          style={{ textTransform: "uppercase" }}
          id=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="card mb-3 mt-2">
        <textarea
          style={{ height: "100px" }}
          className="form-control"
          type="text"
          placeholder="Введите ваше комментарие..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-sm btn-primary" onClick={handleClick}>
          Опубликовать
        </button>
      </div>
      <div className="bg-light card-body mt-4 mb-3">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-start ">
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${(
                  Math.random() + 1
                )
                  .toString(36)
                  .substring(7)}.svg`}
                className="rounded-circle shadow-1-strong me-3"
                alt="avatar"
                width="65"
                height="65"
              />
              <div className="flex-grow-1 flex-shrink-1">
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    {comments.map((x) => (
                      <p key={x._id} className="mb-1 ">
                        {x.commentUser}
                      </p>
                    ))}

                    {/* <span className="small">//Published Time</span> */}
                    <button className="btn btn-sm text-primary d-flex align-items-center">
                      <i
                        className="bi bi-x-lg"
                        onClick={() => handleDelete(comments.id)}
                      ></i>
                    </button>
                  </div>
                  {comments.map((x) => (
                    <>
                      <p key={x._id} className="small mt-0">
                        {x.newComment}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentUser;
