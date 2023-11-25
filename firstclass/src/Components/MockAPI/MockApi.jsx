import React, { useEffect, useState } from "react";

const MockAPI = () => {
  const [data, setData] = useState([]);
  const [inputData, setinputData] = useState({
    userName: "",
    userEmail: "",
  });
  useEffect(() => {
    const file = "https://655ac9756981238d054dba31.mockapi.io/userData";
    fetch(file)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  }, []);

  const handlerData = (e) => {};

  // const postData = async () => {
  //   try{
  //       await fetch(
  //           `https://655ac9756981238d054dba31.mockapi.io/userData/`,
  //           {
  //             method: "Post",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //   }
  // };

  const deleteItem = async (id) => {
    try {
      await fetch(
        `https://655ac9756981238d054dba31.mockapi.io/userData/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setData((data) => data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mx-10">
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={() => handlerData()}
        />
        <input
          type="text"
          id="username"
          placeholder="useremail"
          onChange={() => handlerData()}
        />
        <input
          type="text"
          id="username"
          placeholder="userid"
          onChange={() => handlerData()}
        />

        {/* <button onClick={() => postData()}>add</button> */}

        <table className="border-2 border-cyan-600">
          <thead>
            <tr className="border-2 border-cyan-600">
              <th>id</th>
              <th>avatar</th>
              <th>username</th>
              <th>userphone</th>
            </tr>
          </thead>
          <tbody className="border-2 border-cyan-600">
            {data.map((item) => {
              return (
                <tr className="border-2 border-cyan-600">
                  <td className="border-2 border-cyan-600">{item.id}</td>
                  <td>
                    <img
                      src={item.avatar}
                      className="border-2 border-cyan-600"
                    ></img>
                  </td>
                  <td className="border-2 border-cyan-600">{item.userName}</td>
                  <td>{item.userEmail}</td>
                  <td className="border-2 border-cyan-600">
                    <button onClick={() => deleteItem(item.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MockAPI;
