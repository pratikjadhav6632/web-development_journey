import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //     fetch("https://api.github.com/users/pratikjadhav6632")
  //     .then(response=>response.json())
  //     .then(data=>{
  //         console.log(data)
  //         setData(data)
  //     })
  // },[])
  return (
    <>
      <div className="bg-gray-700 mt-5 mb-5 py-20">
        <div className="text-3xl text-white flex justify-center items-center gap-5 mt-2 mb-3">
          <img
            src={data.avatar_url}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link to="https://github.com/pratikjadhav6632">
            <h1>{data.login}</h1>
          </Link>
        </div>
        <div className="flex justify-center text-center text-white text-2xl">
          {data.bio}
        </div>
        <div className="  flex gap-4 justify-center mt-3 text-white">
          <h1>Public Repo:{data.public_repos}</h1>
          <h1> followers:{data.followers}</h1>
          <h1>following:{data.following}</h1>
        </div>
      </div>
    </>
  );
}
export default Github;

export const GithubLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/pratikjadhav6632");
  return response.json();
};
