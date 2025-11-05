"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import '@/assets/css/registration/RegistrationDetail.css'
import InternationalOfflineComp from '@/components/registration/international/InternationalOfflineComp';

const InternationalOfflinePage = () =>{
  const router = useRouter();

  useEffect(() => {
    const agreed = localStorage.getItem("agreed_international_offline");
    if (agreed !== "true") {
      // Cegah akses langsung
      alert("You must agree to the Terms & Conditions first.");
      router.push("/registration/international"); // balik ke halaman pemilihan offline/online
    }
  }, []);

  return (
    <>
      <br />
      <br />
      <InternationalOfflineComp />
    </>
  );
}

export default InternationalOfflinePage;
