"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import '@/assets/css/registration/RegistrationDetail.css'
import NationalOnlineComp from '@/components/registration/national/NationalOnlineComp';

const NationalOnlinePage = () => {
  const router = useRouter();

  useEffect(() => {
    const agreed = localStorage.getItem("agreed_national_online");
    if (agreed !== "true") {
      alert("You must agree to the Terms & Conditions first.");
      router.push("/registration/national"); // kembali ke halaman pilihan offline/online
    }
  }, [router]);

  return (
    <>
      <br />
      <br />
      <NationalOnlineComp />
    </>
  );
};

export default NationalOnlinePage;
