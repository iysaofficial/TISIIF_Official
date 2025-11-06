import React, { useState, useEffect } from "react";

interface FormState {
  selectedMaxNamaLengkap: string;
  selectedMaxProject: string;
}

const NationalOfflineComp: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    selectedMaxNamaLengkap: "",
    selectedMaxProject: ""
  });
  
  const maxNameChars = 180;

  const handleInputNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setFormState(prev => ({
        ...prev,
        selectedMaxNamaLengkap: value
      }));
    }
  };

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyMRYOJEsapaniChfGr0PUkgDA0cIoXniXnmZsd1HzLOg-bx3bhTgvzhdA9mIurLB9siw/exec";

    const form = document.forms.namedItem("regist-form");
    let buttonCounter = 0;

    if (form) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault();
        
        if (buttonCounter === 0) {
          try {
            buttonCounter++;
            const submitButton = form.querySelector('.submit-button') as HTMLButtonElement;
            
            // Disable button and show loading state
            if (submitButton) {
              submitButton.disabled = true;
              submitButton.textContent = 'SENDING...';
              submitButton.style.backgroundColor = '#6b7280';
            }
            
            await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
            });
            
            // Ambil data penting dari form
            const formData = new FormData(form);
            const name = formData.get("FULL_NAME");
            const project = formData.get("PROJECT_TITLE");
            const school = formData.get("SCHOOL_NAME");

            // Simpan ke sessionStorage
            sessionStorage.setItem("submittedData", JSON.stringify({
              name,
              project,
              school
            }));

            // Success state
            if (submitButton) {
              submitButton.textContent = 'SUCCESSFULLY SENT!';
              submitButton.style.backgroundColor = '#10b981';
            }
            
            // Redirect after 2 seconds
            setTimeout(() => {
              window.location.href = "/registration/success";
            }, 2000);
            
          } catch (error) {
            console.error("Error while sending data:", error);
            
            // Error state
            const submitButton = form.querySelector('.submit-button') as HTMLButtonElement;
            if (submitButton) {
              submitButton.textContent = 'FAILED TO SEND - TRY AGAIN';
              submitButton.style.backgroundColor = '#ef4444';
              submitButton.disabled = false;
            }
            buttonCounter = 0;
          }
        }
      };

      form.addEventListener("submit", handleSubmit);

      // Cleanup listener
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  // Character counter color logic
  const getCharCounterColor = (length: number, max: number): string => {
    if (length > max * 0.9) return '#ef4444'; // Red
    if (length > max * 0.8) return '#f59e0b'; // Orange
    return '#64748b'; // Default gray
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <HeaderSection />
      
      {/* Instruction Section */}
      <InstructionSection />

      {/* Registration Form */}
      <div className="registration-form">
        <form name="regist-form">
          
          {/* BIODATA SECTION */}
          <BiodataSection 
            selectedMaxNamaLengkap={formState.selectedMaxNamaLengkap}
            handleInputNameChange={handleInputNameChange}
            maxNameChars={maxNameChars}
            charCounterColor={getCharCounterColor(formState.selectedMaxNamaLengkap.length, maxNameChars)}
          />

          {/* DATA SEKOLAH SECTION */}
          <DataSekolahSection />

          {/* DATA PEMBIMBING SECTION */}
          <DataPembimbingSection />

          {/* DETAIL PROJECT SECTION */}
          <DetailProjectSection />

          {/* INFORMASI UMUM SECTION */}
          <InformasiUmumSection />

          {/* Submit Button */}
          <div className="submit-container">
            <button type="submit" className="submit-button">
              SUBMIT REGISTRATION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Header Component
const HeaderSection: React.FC = () => (
  <div className="header-section">
    <div className="header-content">
      <h1 className="main-title">REGISTRATION FORM</h1>
      <div className="title-underline"></div>
      <h2 className="event-title">TISIIF 2026</h2>
    </div>
  </div>
);

// Instruction Component
const InstructionSection: React.FC = () => (
  <div className="instruction-section">
    <h3 className="instruction-title">
      HELLO TISIIF 2026 PARTICIPANTS, Please consider the following information before filling out the registration form :
    </h3>
    <div className="instruction-list">
      <div className="instruction-item">
        <span className="instruction-number">1</span>
        <p className="instruction-text">
          Please fill in the required data correctly and ensure there are no writing errors. Also make sure that the data submitted is final and has not changed.
        </p>
      </div>
      <div className="instruction-item">
        <span className="instruction-number">2</span>
        <p className="instruction-text">
          After making sure the data is correct, you can click <strong>SUBMIT REGISTRATION</strong> button once. If the data has been successfully submitted, you will be moved to another page.
        </p>
      </div>
      <div className="instruction-item">
        <span className="instruction-number">3</span>
        <p className="instruction-text">
          There will be an information email that the registration has been received sent to the team leaders email address, and the file will be validated by our team. Please be patient and wait for a maximum of 3 days after the registration time, the Letter of Acceptance (LOA) will be sent to the team leaders email address.
        </p>
      </div>
    </div>
  </div>
);

// Biodata Section Component
interface BiodataSectionProps {
  selectedMaxNamaLengkap: string;
  handleInputNameChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxNameChars: number;
  charCounterColor: string;
}

const BiodataSection: React.FC<BiodataSectionProps> = ({
  selectedMaxNamaLengkap,
  handleInputNameChange,
  maxNameChars,
  charCounterColor
}) => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">BIODATA</h2>
      <div className="section-underline"></div>
    </div>
    
    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Participant Categories</label>
        <input
          type="text"
          name="PARTICIPANT_CATEGORY"
          className="input-field"
          value="Indonesian Citizen"
          readOnly
        />
      </div>
      
      <div className="field-group">
        <label className="field-label">Competition Category</label>
        <select name="COMPETITION_CATEGORY" className="select-field" required>
          <option value="">--Choose Competition Category--</option>
          <option value="Offline Competition">Offline Competition</option>
          <option value="Offline Competition + Excursion">Offline Competition + Excursion</option>
          <option value="Offline Competition + Fullpack">Offline Competition + Fullpack</option>
        </select>
      </div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Name of Leader & Member Team</label>
        <div className="field-note">
          <p>Enter the name of the team leader and team members with the team leaders name at the beginning, with the following format:</p>
          <p><strong>Note:</strong> maximum 5 members + 1 team leader</p>
          <div className="example-box">
            <div>Kamal Putra Ramadhan</div>
            <div>Ranu Ramadhan</div>
          </div>
        </div>
        <textarea
          name="FULL_NAME"
          className="textarea-field"
          placeholder="Enter Name of Leader & Member Team"
          required
          value={selectedMaxNamaLengkap}
          onChange={handleInputNameChange}
        />
        <div className="char-counter" style={{ color: charCounterColor }}>
          {selectedMaxNamaLengkap.length} / {maxNameChars} Character
        </div>
      </div>

      <div className="field-group">
        <label className="field-label">NISN / NIM of Leader & Member Team</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Enter the NISN/NIM according to the order of the names of the team leader and members, in the following format:</p>
          <div className="example-box">
            <div>231700</div>
            <div>241700</div>
          </div>
        </div>
        <textarea
          name="NISN_NIM"
          className="textarea-field"
          placeholder="Enter NISN / NIM of Team Leader & Members"
          required
        />
      </div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Leader WhatsApp Number</label>
        <div className="field-note">
          <p>Please write with phone code, example : (phone code) (your number) +62 8177091xxxx</p>
          <p><strong>Notes:</strong> Please fill in the team leaders number correctly to be added to the WhatsApp Group.</p>
        </div>
        <input
          type="number"
          name="LEADER_WHATSAPP"
          className="input-field"
          placeholder="Enter Your Leader WhatsApp Number"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Leader Email Address</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Please fill in the email correctly, LOA submissions will be sent via the team leaders email address filled in.</p>
        </div>
        <input
          type="email"
          name="LEADER_EMAIL"
          className="input-field"
          placeholder="Enter Your Leader Email Address"
          required
        />
      </div>
    </div>
  </section>
);

// Data Sekolah Section Component
const DataSekolahSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">SCHOOL DATA</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Name of School/University</label>
        <div className="field-note">
          <p><strong>Notes:</strong> If the members are not in the same institution, enter the name of the school with the format in the order of the name of the team leader and team members from each school, with the following format:</p>
          <div className="example-box">
            <div>Bina Senior High School</div>
            <div>Happy Senior High School</div>
          </div>
        </div>
        <textarea
          name="SCHOOL_NAME"
          className="textarea-field"
          placeholder="Enter School Name of Leader & Member Team"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Nomor Pokok Sekolah Nasional (NPSN)</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Enter your NPSN if you are still in school, in the order of the names of the team leader and members, in the following format:</p>
          <div className="example-box">
            <div>1201301</div>
            <div>1302402</div>
          </div>
        </div>
        <textarea
          name="NPSN"
          className="textarea-field"
          placeholder="Enter Your Nomor Pokok Sekolah Nasional (NPSN)"
        />
      </div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Educational Level</label>
        <select name="EDUCATIONAL_LEVEL" className="select-field" required>
          <option value="">--Choose Your Educational Level--</option>
          <option value="Elementary">Elementary</option>
          <option value="Secondary">Secondary</option>
          <option value="University">University</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label">Province</label>
        <input
          type="text"
          name="PROVINCE"
          className="input-field"
          placeholder="Enter Your Province"
          required
        />
      </div>
    </div>
  </section>
);

// Data Pembimbing Section Component
const DataPembimbingSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">SUPERVISOR DATA</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Name of Teacher/Supervisor</label>
        <textarea
          name="SUPERVISOR_NAME"
          className="textarea-field"
          placeholder="Enter Your Teacher/Supervisor Name"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Teacher/Supervisor WhatsApp Number</label>
        <div className="field-note">
          <p>Please write with phone code, example : (phone code) (your number) +62 8177091xxxx</p>
        </div>
        <input
          type="number"
          name="SUPERVISOR_WHATSAPP_NUMBER"
          className="input-field"
          placeholder="Enter Your Teacher/Supervisor WhatsApp Number"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Teacher/Supervisor Email Address</label>
        <input
          type="email"
          name="SUPERVISOR_EMAIL"
          className="input-field"
          placeholder="Enter Your Teacher/Supervisor Email Address"
          required
        />
      </div>
    </div>
  </section>
);

// Detail Project Section Component
const DetailProjectSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">DETAIL PROJECT</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Project Title</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Please fill in the title data CORRECTLY, the data entered cannot be changed!</p>
        </div>
        <textarea
          name="PROJECT_TITLE"
          className="textarea-field"
          placeholder="Enter Your Project Title"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Project Categories</label>
        <select name="PROJECT_CATEGORIES" className="select-field" required>
          <option value="">--Choose Project Categories--</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics, Energy & Engineering">Physics, Energy & Engineering</option>
          <option value="Life Science">Life Science</option>
          <option value="Environment">Environment</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Social Science">Social Science</option>
          <option value="Health & Medicine, Biocencors Technology">Health & Medicine, Biocencors Technology</option>
          <option value="Agriculture & Food Science">Agriculture & Food Science</option>
          <option value="Robotics & AI">Robotics & AI</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label">Does the project title have ever participated in an invention and innovation competition before?</label>
        <select name="YES_NO" className="select-field" required>
          <option value="">--Choose--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label">If the project title have ever participated in other invention and innovation competition, please write down the name of competition</label>
        <input
          name="JUDUL_PERNAH_BERPATISIPASI"
          className="input-field"
          placeholder="Enter Competition Name"
          required
        />
      </div>
      
    </div>
  </section>
);

// Informasi Umum Section Component
const InformasiUmumSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">GENERAL INFORMATION</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Complete address</label>
        <div className="field-note">
          <p>Please write the complete address (Street Name, House Number, RT & RW, District, Regency, City, Province, Postal Code)</p>
        </div>
        <textarea
          name="COMPLETE_ADDRESS"
          className="textarea-field"
          placeholder="Enter Your Complete Address"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">TISIIF 2026 Competition Information Resources</label>
        <select name="INFORMATION_RESOURCES" className="select-field" required>
          <option value="">--Choose Information Resources--</option>
          <option value="IYSA Instagram">IYSA Instagram</option>
          <option value="TISIIF Instagram">TISIIF Instagram</option>
          <option value="Supervisor/School">Supervisor/School</option>
          <option value="IYSA FaceBook">IYSA FaceBook</option>
          <option value="IYSA Linkedin">IYSA Linkedin</option>
          <option value="IYSA Website">IYSA Website</option>
          <option value="TISIIF Website">TISIIF Website</option>
          <option value="IYSA Email">IYSA Email</option>
          <option value="TISIIF Email">TISIIF Email</option>
          <option value="Previous Event">Previous Event</option>
          <option value="Etc">Etc</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label">
          If you received free registration from a previous event or school visit, please attach documentary proof.
        </label>
        <input
          type="url"
          name="FILE"
          className="input-field"
          placeholder="Upload The Link Of The Drive File"
        />
      </div>
    </div>
  </section>
);

export default NationalOfflineComp;