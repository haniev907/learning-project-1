import React from "react";

const Comments = () => {
  const comments = [];

  document.getElementById("comment-added").onclick = function (event) {
    event.preventDefault();
    const input = document.getElementById("input");
    const body = document.getElementById("textarea");

    const comment = {
      name: input.value,
      commentName: body.value,
      time: Date.now(),
    };
    comments.push(comment);
    input.value = "";
    body.value = "";
    saveComment();
  };
  const saveComment = () => {
    localStorage.setItem("comments", JSON.stringify(comments));
  };
  const showComments = () => {
    const commentField = document.getElementById("pudlTime");
    let out = "";
    comments.forEach(
      (x) => (out += <span className="small">{timeConverter(x.time)}</span>)
    );
    commentField.innerHTML = out;
  };
  const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const minutes = a.getMinutes();
    const seconds = a.getSeconds();

    const time =
      date + "" + month + "" + year + "" + hour + "" + minutes + "" + seconds;
    return time;
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
          id="input"
        />
      </div>
      <div className="card mb-3 mt-2">
        <textarea
          style={{ height: "100px" }}
          className="form-control"
          type="text"
          id="textarea"
          placeholder="Введите ваше комментарие..."
        />
      </div>
      <div className="d-flex justify-content-end">
        <button id="comment-added" className="btn btn-sm btn-primary">
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
                    <p id="pudlTime" className="mb-1 ">
                      //User Name
                    </p>
                    <button className="btn btn-sm text-primary d-flex align-items-center">
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>

                  <p id="commet" className="small mt-0">
                    {"text"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
