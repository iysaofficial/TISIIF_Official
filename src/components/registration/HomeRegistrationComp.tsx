import Link from "next/link"

const HomeRegistrationComp = () =>{
    return(
        <>
        <section className="registration-section">
            <div className="registration-container">
            <div className="registration-header">
                <h2 className="registration-title">REGISTRATION FORM</h2>
                <h3 className="registration-subtitle">Choose Categories Participant for Registration TISIIF 2026</h3>
            </div>
            </div>
            <div className="registration-links">
            {/* <Link href="/" className="registration-link">
                Under Maintenance
            </Link>
            <Link href="/" className="registration-link">
                Under Maintenance
            </Link> */}
            <Link href="/registration/international" className="registration-link">
                International Participants
            </Link>
            <Link href="/registration/national" className="registration-link">
                National Participants ( Indonesia & Thailand )
            </Link>
            </div>
        </section>
        </>
    )
}

export default HomeRegistrationComp