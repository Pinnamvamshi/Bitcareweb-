import React, {useRef, useState, useEffect} from "react";
import "./consentForm.css";
import CheckboxGroup from "./CheckBox";
import SignaturePad from 'react-signature-canvas';


function Consent2()
{
  const options = [
    { label: 'I voluntarily elect to undergo this treatment, having had the nature and purpose of Laser Hair Removal, alongwith the risks and hazards involved, fully explained to me by "BUSINESS     NAME".', value: 'option1' },
    { label: 'I have been advised that Laser Hair Removal treatment can have certain side effects which may include, but is notlimited to burning, blistering, flaking of the skin or swelling on the surface of the treated skin areas. I understandthat in these cases, it is recommended that the area should heal first prior to undergoing another treatment.', value: 'option2' },
    { label: 'I understand I may experience discomfort during the treatment and that this is a normal occurrence.', value: 'option3' },
    { label: 'I understand there is the possibility of darkening or lightening of the skin during the healing process. I havebeen advised that this is usually temporary but on rare occasions, it can be permanent.', value: 'option4' },
    { label: 'Because exposure to the eye with lasers can lead to temporary or permanent eye damage,I agree to wear theprovided eye protection during the treatment period and will not remove it unless allowed by the Technician.', value: 'option5' },
    { label: 'I have read and understood the post-treatment home care instructions and understand how important it is tofollow all instructions given to me for post-treatment care. In the event I may have additional questions orconcerns regarding my treatment or post-treatment care, I will consult "BUSINESS NAME" immediately.', value: 'option6' },
    { label: 'I have been advised that although rare, scarring may occur if the post treatment care instructions are notcomplied with.', value: 'option7' },
    { label: 'I understand that I will need to undergo several treatments in order to obtain my desired results, as advised bymy Esthetician.', value: 'option8' },
    { label: 'I confirm I have not had any waxing treatments to the area/s to be treated within the last 7 days.', value: 'option9' },
    { label: 'I agree to not have any prolonged sun exposure or any form of tanning (including self-tanners, spray tans, andtanning beds) for two weeks before and two weeks after each of my scheduled appointments. I understand thatfailure to avoid sun exposure or tanning can result in adverse reactions, such as hyper/hypopigmentation and/orburning of the exposed areas.', value: 'option10' },
    { label: 'The following conditions are recognized as contraindications for Laser Hair Removal treatment and must bedisclosed prior to treatment', subtext: ["Pregnancy/Breastfeeding \n Photo-sensitivity disorders", "Active Herpes", "Active Shingles", "Bacterial infections", "Use of antibiotics in the last 10 days", "Use of photo/sun sensitivity medication in the last 10 days", "Recent use of Anticoagulants", "Sunburn", "Keloid scarring", "Psoriasis", "Bleeding disorders", "Severe reactions to Histamines", "Any recent chemical peel/laser resurfacing procedure", "Vitiligo", "Open wounds/lesionsEpilepsy", "Use of Accutane in the past 6months", "Recent use of retinols, glycolic acids, alpha-hydroxy acids (within the last 7 days)", "Waxing of the area to be treated within the past 7 days"], value: 'option11' },
    { label: 'I confirm that I am not currently under the influence of any alcohol or drugs.', value: 'option12' },
    { label: 'I understand that a topical numbing product may be applied prior to Laser Hair Removal, to minimize anydiscomfort during treatment.', value: 'option13' },
    { label: 'The information I have provided about my medical history is accurate to the best of my knowledge, including allknown allergies and/or prescription drugs/products I am currently ingesting or using topically', value: 'option14' },
  ];

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
  
 
  
    
    return(
      <div className="container">        
        <h2>Client Consent Form</h2>
          <h3> Laser Hair Removal</h3>
                
          <div>
            <div className="text">Laser hair removal involves the use of a non-invasive laser device which targets hair follicles to reduce/remove facial andbody hair. This treatment works on hairs that are in the active stage of growth and so, it does not work on dormant hairs.Several sessions are usually required and a hair removal session may vary, depending on the individual's amount of hair,density or color. Laser hair removal is not completely permanent and revisits may be needed for maintenance</div>
          </div>

          <h3>Please read and initial the following statements:</h3>

          <CheckboxGroup options={options}  onChange={handleChange} />

          <div>
            <div className="confirmation">
                <input
                    type="checkbox"
                    onChange={handleChange}
                />
              <div className="confirmtext">I hereby give my informed consent to proceed with Laser Hair Removal.I have read and fully understand this agreement andall information detailed above.</div>
            </div>
            <div className="text">I understand the procedure being performed today and accept all possible risks. I have had all contraindications andpossible side effects of Laser Hair Removal explained to me and my questions have been answered to my satisfaction.</div>
            <div className="text">This agreement will remain in effect for this procedure and all future follow-ups conducted by "BUSINESS NAME".</div>
          </div>

          <div className="confirm-box">
            <div className="text">I confirm that I am at least 18 years of age and by signing this Consent Form, I agree to waive all liability towards my Technician and "BUSINESS NAME" for any injury or damages incurred due to any misrepresentation of my medical history.</div>
          </div>

          <div className="sign">
            <div>
              <div className="last-line-name">Name Printed</div>
              <div className="consent2_date">
                <input id="target" value={date.toLocaleDateString()}/>
                <label for="date" className="lastlinedate">Date </label>
              </div>
            </div>
            <div className="bg_consentform2"> 
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

          {/* <div>
                  <input type="checkbox" name="points" value="marks"/>
                  I voluntarily elect to undergo this treatment, having had the nature and purpose of Laser Hair Removal, alongwith the risks and hazards involved, fully explained to me by "BUSINESS NAME".
          </div> */}
      </div>
    )
  } 
                  
export default Consent2;