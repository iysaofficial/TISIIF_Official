"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import '@/assets/css/registration/RegistrationDetail.css'
import NationalOfflineComp from '@/components/registration/national/NationalOfflineComp';

const NationalOfflinePage = () => {
  const router = useRouter();

  useEffect(() => {
    const agreed = localStorage.getItem("agreed_national_offline");
    if (agreed !== "true") {
      alert("You must agree to the Terms & Conditions first.");
      router.push("/registration/national"); // kembali ke halaman online/offline selection
    }
  }, [router]);

  return (
    <>
      <br />
      <br />
      <NationalOfflineComp />
    </>
  );
};

export default NationalOfflinePage;
