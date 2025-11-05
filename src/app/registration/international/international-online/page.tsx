"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import '@/assets/css/registration/RegistrationDetail.css'
import InternationalOnlineComp from '@/components/registration/international/InternationalOnlineComp';

const InternationalOnlinePage = () => {
  const router = useRouter();

  useEffect(() => {
    const agreed = localStorage.getItem("agreed_international_online");

    if (agreed !== "true") {
      alert("You must agree to the Terms & Conditions first.");
      router.push("/registration/international");
    }
  }, []);

  return (
    <>
      <br />
      <br />
      <InternationalOnlineComp />
    </>
  );
}

export default InternationalOnlinePage;
