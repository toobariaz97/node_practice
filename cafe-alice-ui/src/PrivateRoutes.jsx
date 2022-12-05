import React, { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { me } from ".t/Apis";
// import useLocationTitle from "./Hooks/useLocationTitle";
// import { userState } from "./Recoil";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

export default function PrivateRoutes({ children, title }) {
  useEffect(()=>{
    
      document.body.classList.toggle('fixed-navbar');
  },[]);
  // useLocationTitle(title);
  // const navigate = useNavigate();
  // const [user, setUser] = useRecoilState(userState);
  // const [loading, setLoading] = useState(false);

  // const { mutate, isLoading } = useMutation(() => me(), {
  //   retry: false,
  //   onSuccess: (res) => {
  //     console.log("res.dataL: ", res.data);
  //     setUser(res?.data?.admin);
  //     setLoading(false);
  //   },
  //   onError: (err) => {
  //     navigate("/", { replace: true });
  //     localStorage.clear();
  //     setLoading(false);
  //   },
  // });

  // useEffect(() => {
  //   setLoading(true);
  //   if (!user?._id) {
  //     mutate();
  //   } else {
  //     setLoading(false);
  //     if (window.location.pathname === "/")
  //       navigate("/dashboard", { replace: true });
  //   }
  // }, [user?._id]);

  // if (isLoading || loading)
  //   return (
  //     <div
  //       style={{
  //         height: "100vh",
  //         width: "100vw",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         background: "#000",
  //         marginTop: -56,
  //       }}
  //     >
  //       <img src="images/logo.png" alt="logo" />
  //     </div>
  //   );

  return (
  <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="app-content user-management content">
    <div className="content-wrapper">

      <div className="content-body">
      {children}

      </div>
      </div>
      </div>
  </>
 
  );
}
