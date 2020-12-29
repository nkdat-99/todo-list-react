import React, { useState , useEffect } from 'react';
import './user.css';

function User() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [listUser, setItems] = useState([]);

    useEffect(() => {
      fetch("https://localhost:8443/api/account/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
            return <div>Loading...</div>;
    } else {
      return (
        <div className="user">
            <div className="title">List User</div>
            <div className="list-action">
                <button>Thêm</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>
                            Mã ID
                        </td>
                        <td>
                            Tên người dùng
                        </td>
                        <td>
                            Tài khoản
                        </td>
                        <td>
                            Quyền
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map(item => (
                        <tr key={item.id}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name} 
                            </td>
                            <td>
                                {item.username}
                            </td>
                            <td>
                                {item.rule} 
                            </td>
                            <td>
                                <button>Sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
    }
}

export default User;
