import "./Your_Arena_Page.css";
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Your_Arena_Page() {
  const [company1 ,setCompany1] = useState("")
  const [company2 ,setCompany2] = useState("")
  const [company3 ,setCompany3] = useState("")
  const [company4 ,setCompany4] = useState("")
  const [company5 ,setCompany5] = useState("")
  const [MyCompany ,setMyCompany] = useState("")
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    console.log(company1 ,company2 ,company2 ,company3 ,company4 ,company5);
    e.preventDefault();
    await axios.post("http://localhost:8000/api/arena", {
      my_company_name:MyCompany,
      company_name1:company1,
      company_name2:company2,
      company_name3:company3,
      company_name4:company4,
      company_name5:company5,
    });
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
    <form onSubmit={submit}>
      <input
      onChange={(e) => setCompany1(e.target.value)}
      type="text" />1
      <input
      onChange={(e) => setCompany2(e.target.value)}
      type="text" />2
      <input
      onChange={(e) => setCompany3(e.target.value)}
      type="text" />3
      <input
      onChange={(e) => setCompany4(e.target.value)}
      type="text" />4
      <input
      onChange={(e) => setCompany5(e.target.value)}
      type="text" />5
      <input
      onChange={(e) => setMyCompany(e.target.value)}
      type="text" /> YOUR
      <button type="submit">SEND</button>
    </form>
    </>
  );
}

export default Your_Arena_Page;
