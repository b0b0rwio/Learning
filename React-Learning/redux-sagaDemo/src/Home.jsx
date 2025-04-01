import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from './Slice';

function Home() {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.userInfo);

    useEffect(() => {
        dispatch(fetchRequest());
    }, []);

    //console.log(users);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="row justify-content-center m-3 gap-4">
      {users&&users.map(
              (user,index)=>{return(
              <div key={user.id}className="card mb-3" style={{width: "18rem"}}>
                  <div className="card-body">
                      <h5 className="card-title">{user.fullname.toUpperCase()}</h5>   
                      <p className="card-text">{user.username}</p>
                      <p className="card-text">{user.email}</p>
                  </div>
              </div>
          )}
          )
      }
</div>
    );
}

export default Home;