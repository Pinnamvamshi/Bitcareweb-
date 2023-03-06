import React, {useState, useRef, useEffect} from "react";
import CheckboxGroup from "./CheckBox";
import "./patientinfo.css";
import SignaturePad from 'react-signature-canvas';

const PatientInfo = () => {

    const options = [
        {label: "Cardiac pacemaker, defibrillator, or other implanted electronic/metallicdevice", value: "option1"},
        {label: "Any diseases which may be stimulated by light or heat (such as Herpes Simplex)", value: "option2"},
        {label: "Impaired immune system (such as HIV) or use of immunosuppressive medications ", value: "option3"},
        {label: "Hepatitis or liver disease", value: "option4"},
        {label: "History of bleeding coagulopathies, or use of anticoagulants (blood thinning medications) ", value: "option5"},
        {label: "High or low blood pressure (with medications)", value: "option6"},
        {label: "Epilepsy", value: "option7"},
        {label: "Hormonal disorders or endocrine disorders (such as polycystic ovary syndrome or diabetes), unless under control", value: "option8"},
        {label: "Suffering from Keloid scars or impaired wound healing", value: "option9"},
        {label: "Vitiligo or tendency to hypopigmentation", value: "option10"},
        {label: "Current or history of cancer, any cancer drug therapy (such as Ducabaxine, Fluorouracil, Methotrexate, etc.), pre-cancerous lesions or  problematic moles", value: "option11"},
        {label: "History of local or recurrent skin infection", value: "option12"},
        {label: "History of local or recurrent skin infection", value: "option13"},
        {label: "Any active skin disease or inflammation (such as Herpes, Psoriasis, Eczema, rash) the treatment area", value: "option14"},
        {label: "Metal implants in the treatment area", value: "option15"},
        {label: "Undiagnosed lesions in the treatment area", value: "option15"},
        {label: "History or current tattoo or permanent makeup or nevi present in the treatment area", value: "option17"},
        {label: "Any synthetic filler procedures (i.e. silicon) in the treatment area. Please n ote that some of the fillers are “heat resistant”. In these cases, treatments may start two weeks after the filler procedure", value: "option18"},
        {label: "Deep chemical peel / laser peel in the past 6 months", value: "option19"},
        {label: "Use of Accutane (Isotretinoin, Roaccutane) within the past 3-6 months ", value: "option20"},
        {label: "Childbirth in the past 6 months or nursing in the past 3 months", value: "option21"},
        {label: "Sunburns, exposure to sun or artificial tanning during the past 3-4 weeks prior to treatment ", value: "option22"},
        {label: "Use of photosensitive medication or herbs within 2 weeks prior to treatment (such as Isotretinoin, tetracycline, or St. John's Wort.)", value: "option23"},
        {label: "Tretinoin — Retin A in the last 2 weeks ", value: "option24"},
        {label: "Meso-threads in the last 2-3 weeks", value: "option25"},
        {label: "Chemical peel or natural fillers in the past 2 weeks ", value: "option26"},
        {label: "Chemical peel or natural fillers in the past 2 weeks ", value: "option27"},
        
    ]
    

    const [show,setShow] = useState(false)
    let sigPad = useRef({});
    let data = '';
    
    function clear() {
      sigPad.current.clear();
    }

    var [date,setDate] = useState(new Date());
  
    useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
    });

    function handleChange(selected) {
        console.log(selected);
    }

    

    return (
        <div class="text_ft">
        <div className="bg_consent9">
            <div className="header9">
                <h1 className="consent9_header9">Informed consent form for treatment with V-IPL Handpiece</h1>
                
            </div>
            <div className="consent9_container">
            <div>
                <div className="consent9_text">Patient Information</div>
                <div className="options">
                    <div className="firstinput">
                        <label>First and Last Name:</label>
                        <label className="age">Age:</label>
                        <label className="age">Phone/Mobile:</label>
                    </div>
                    <div className="inputbox">
                        <input className="maininput" type="text" placeholder="Name"  />
                        <input className="maininput" type="text" placeholder="Age" />
                        <input className="maininput" type="text" placeholder="Phone" />
                    </div>
                </div>
                    
                </div>

                


                <div>
                <div className="consent9_text">Health Questionaires:</div>
                    <div className="text">Have you today or in the past experienced any of the following: </div>


                    <div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Active/Chronic conditions:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            <p style={{
                                                        marginTop: 40,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            specify
                            </p>
                            <input 
                                    style={{width: "150%",
                                        padding: 20,
                                        borderRadius: 0,
                                        border: 1,
                                        borderColor: "#EAEBE7",
                                        backgroundColor: "#f2f2f2",
                                        marginTop: 35
                                    }}
                                    type="text"  
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Surgeries/ Hospitalization:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            <p style={{
                                                        marginTop: 40,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            specify
                            </p>
                            <input 
                                    style={{width: "150%",
                                        padding: 20,
                                        borderRadius: 0,
                                        border: 1,
                                        borderColor: "#EAEBE7",
                                        backgroundColor: "#f2f2f2",
                                        marginTop: 35
                                    }}
                                    type="text"  
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Medication Care:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40, marginLeft: 30}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            <p style={{
                                                        marginTop: 40,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            specify
                            </p>
                            <input 
                                    style={{width: "150%",
                                        padding: 20,
                                        borderRadius: 0,
                                        border: 1,
                                        borderColor: "#EAEBE7",
                                        backgroundColor: "#f2f2f2",
                                        marginTop: 35
                                    }}
                                    type="text"  
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Sensitivity Medication:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            <p style={{
                                                        marginTop: 40,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            specify
                            </p>
                            <input 
                                    style={{width: "150%",
                                        padding: 20,
                                        borderRadius: 0,
                                        border: 1,
                                        borderColor: "#EAEBE7",
                                        backgroundColor: "#f2f2f2",
                                        marginTop: 35
                                    }}
                                    type="text"  
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Allergy:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            <p style={{
                                                        marginTop: 40,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            specify
                            </p>
                            <input 
                                    style={{width: "150%",
                                        padding: 20,
                                        borderRadius: 0,
                                        border: 1,
                                        borderColor: "#EAEBE7",
                                        backgroundColor: "#f2f2f2",
                                        marginTop: 35
                                    }}
                                    type="text"  
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Pregnancy:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            <p style={{
                                                        marginTop: 40,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            specify
                            </p>
                            <input 
                                    style={{width: "150%",
                                        padding: 20,
                                        borderRadius: 0,
                                        border: 1,
                                        borderColor: "#EAEBE7",
                                        backgroundColor: "#f2f2f2",
                                        marginTop: 35
                                    }}
                                    type="text"  
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 30}}>
                            <div className="text1">Undergo of 18:</div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 20,
                                                        fontSize: 14,
                                                    }}>
                                                            Yes
                                                    </p>
                                                
                            </div>
                            <div className="checkbox-points">
                                                <input
                                                type="checkbox"
                                                onChange={handleChange}
                                                style={{marginTop: 40,}}
                                                />

                                                    <p style={{
                                                        marginTop: 35,
                                                        marginRight: 720,
                                                        fontSize: 14,
                                                    }}>
                                                            No
                                                    </p>
                                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="consent9_text">Exclusion Criteria from treatment(Contraindications):</div>
                    <div className="fonts">Tick any of the boxes that apply to you: </div>
                    <CheckboxGroup options={options} onChange={handleChange} />
                </div>
                <div className="fonts">Contraindications should be thoroughly evaluated and confirmed at each patient’s visit.</div>
                <div className="fonts">   1.	I  <input className="underline-input" /> duly authorize <input className="underline-input" />	and other specially trained associate technicians of this facility, to perform treatments using the V-STHandpiece. <br></br>
                        2.	I am hereby undertaking the responsibility of the treatment outcome. <br></br>
                        3.	I hereby commit to inform any change in my medical and health condition.<br></br>
                        4.	I do not suffer from Herpes/1 suffer from Herpes and I agree to initiate preventive treatment with antiviral medications, though I am aware that preventive treatment does not ensure total prevention of Herpes appearance during the treatment.<br></br>
                        5.	I understand the procedure is purely elective and that studies indicate that results vary with each individual according to skin condition and physiological attributes as well as the medical condition of the client.<br></br>
                        6.	I understand that a commitment to a series of treatments is required to achieve optimal results and I am aware that the treatment may be performed by different Viora’s personnel.<br></br>
                        7.	I consent that Viora's clinical department may discontinue the treatment course at any time without prior notice.<br></br>
                        8.	I consent to photographs for the purpose of monitoring response to treatment and for use in medical education research of Viora and the local distributor as long as my anonymity is maintained and my privacy protected.<br></br>
                        9.	I hereby declare that I was informed regarding the following:<br></br>
                        <div style={{marginLeft: 30}}>
                            9.1	The versatile treatments available with Viora’s light based systems are based on a principle called selective photo thermolysis. The light emitted and absorbed by targeted chromophores (light sensitive molecules) encourages a specific biological process to achieve the desired clinical result.<br></br>
                            9.2	I have been advised regarding possible risks and side effects of the treatment which may include slight pain, erythema, edema, superficial burn, blister, rash, color changes (fry per or hypo pigmentation), bruising, paradoxical unwanted hair growth. All side effects are transient and mild, however in the event of adverse side effects the treating personnel must be informed and a phvsician consult may be necessary.<br></br>
                            9.3	I am aware that exposure to sun 3-4 weeks prior and after treatment are contraindicated to the treatment and may promote side effects. I was advised to use SPF 30 in between treatments.<br></br>
                            9.4	I was advised about the use of protective goggles and I agree to wear them throughout the duration of the treatment.<br></br>
                        </div>
                </div>
                <div className="fonts">My questions regarding this procedure have been answered to my satisfaction. I accept all risks of treatment and agree to provide aftercare as directed by this facility.</div>

        <div>
        <div className="options">
                        <div className="firstinput">
                            <label>Client's Name:</label>
                            <label className="age1" for="date">Date: </label>
                            <label className="age1">Signature:</label>
                            {/* <input type="text" /> */}
                        </div>
                        <div className="inputbox">
                            {/* <label>Age:</label> */}
                            <input className="maininput1" type="text" placeholder="Name" /> 
                            <input id="target" value={date.toLocaleDateString()} />
                            <div className="bg_consentform9"> 
                                <SignaturePad
                                    ref={sigPad}
                                    penColor="black"
                                />
                                <div className="sign-btns">
                                    <button  id="clear_btn" onClick={clear}> Clear</button>
                                    <button id="save_btn"> Save & Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
             
        </div>

        <div style={{marginTop: 100}}>
                    <div className="consent9_text">For patients under the age of 18:</div>
                    <div className="options">
                        <div className="firstinput">
                            <label>Guardian Name: </label>
                            <label className="age1">Relation to patient:</label>
                            <label className="age1" for="date">Date: </label>
                            <label className="age1">Signature:</label>
                            {/* <input type="text" /> */}
                        </div>
                        <div className="inputbox">
                            {/* <label>Age:</label> */}
                            <input className="maininput1" type="text"  placeholder="Name"/> 
                            <input className="maininput1" type="text"  placeholder="Relation"/> 
                            <input id="target" value={date.toLocaleDateString()} />
                            <div className="bg_consentform9"> 
                                <SignaturePad
                                    ref={sigPad}
                                    penColor="black"
                                />
                                <div className="sign-btns">
                                    <button  id="clear_btn" onClick={clear}> Clear</button>
                                    <button id="save_btn"> Save & Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
        </div>

        <div style={{marginTop: 100}}>
                    <div className="consent9_text">Treating personnel Declaration:</div>
                    <div className="options">
                        <div className="firstinput">
                            <label>Treating personnel’s Name:</label>
                            <label className="age1" for="date">Date: </label>
                            <label className="age1">Signature:</label>
                            {/* <input type="text" /> */}
                        </div>
                        <div className="inputbox">
                            {/* <label>Age:</label> */}
                            <input className="maininput1" type="text"  placeholder="Name"/> 
                            <input id="target" value={date.toLocaleDateString()} />
                            <div className="bg_consentform9"> 
                                <SignaturePad
                                    ref={sigPad}
                                    penColor="black"
                                />
                                <div className="sign-btns">
                                    <button  id="clear_btn" onClick={clear}> Clear</button>
                                    <button id="save_btn"> Save & Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                 
        </div>

        <div className="fontsend">This consent was accepted by me, after I explained to the client all of the above and I confirm that all of my explanations were understood by her/him.</div>

        </div>
        </div>
    </div>
);
}


export default PatientInfo;