// Import the react JS packages
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Common/Header/Header';
import './Home.css';

// Define the Home function
const Home = () => {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('access_token') === null) {
  //     window.location.href = '/login';
  //   } else {
  //     (async () => {
  //       try {
  //         const { data } = await axios.get(
  //           'http://127.0.0.1:8000/home/', {
  //             headers: {
  //               'Content-Type': 'application/json'
  //             }
  //           }
  //         );
  //         setMessage(data.message);
  //       } catch (e) {
  //         console.log('not auth');
  //       }
  //     })();
  //   }
  // }, []);
  
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title display-6 ml-5 text-center">WHY MENTAL HEALTH IS IMPORTANT</h5>
            <p className="card-text fs-5 ml-5 text-start">
              Mental health is a cornerstone of our overall well-being and ability to live satisfying and fulfilling lives. 
              It profoundly influences how we think, feel, and act, shaping our ability to handle stress, form relationships, 
              and make decisions. Additionally, it serves as the foundation upon which we build resilience, navigate life's 
              challenges, and foster meaningful connections.
              <br/>
              Mental health also influences physical health outcomes, impacting the immune system, cardiovascular health, and 
              even longevity. Chronic stress, often rooted in mental health challenges, can contribute to a range of physical 
              ailments. Recognizing and addressing mental health needs is not just an investment in emotional stability but 
              a vital commitment to fostering a healthier, more resilient body.
              <br/>
              According to global health organizations, one in four people worldwide will be affected by a mental or 
              neurological disorder at some point in their lives. These conditions not only affect individuals but reverberate 
              through families, communities, and economies. Here we can see how mental health is not only an individual issue, 
              but how taking care of your mental health means you are taking care of the health of so many others.
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10">
        <div className="container">
          <h5 className="display-6 ml-5 text-center">Common Mental Health Conditions</h5>
          <ul>
            <li>
              <strong>Depression:</strong> Depression is a mood disorder characterised by persistent feelings of sadness, 
              hopelessness, and a lack of interest or pleasure in daily activities.
            </li>
            <li>
              <strong>Anxiety Disorders:</strong> This category includes various disorders like generalised anxiety disorder, 
              panic disorder, and social anxiety disorder. Anxiety disorders involve excessive worry, fear, or nervousness 
              that can interfere with daily functioning.
            </li>
            <li>
              <strong>Eating Disorders:</strong> Eating disorders involve extreme attitudes, behaviours, and emotions 
              related to food and weight.
            </li>
            <li>
              <strong>Post-Traumatic Stress Disorder (PTSD):</strong> PTSD can develop after experiencing a traumatic event, 
              or through chronic exposure to traumatising circumstances. Symptoms may include flashbacks, nightmares, and 
              severe anxiety, impacting daily life.
            </li>
            <li>
              <strong>Burnout:</strong> While burnout shares some symptoms with depression, it is typically associated with 
              work-related stress. Symptoms may include chronic fatigue, reduced performance, and feelings of cynicism.
            </li>
            <li>
              <strong>Personality Disorders:</strong> A group of mental health conditions characterised by enduring patterns 
              of cognition, emotion, and behaviour that deviate significantly from cultural expectations. These patterns often 
              lead to impaired functioning in various aspects of life, including relationships, work, and self-identity.
            </li>
            <li>
              <strong>Substance Use Disorder:</strong> Substance use disorder involves problematic use of substances, 
              leading to significant impairment or distress. It includes disorders related to alcohol, drugs, and other 
              addictive substances.
            </li>
          </ul>

          <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10">
            <h2 className="display-6 ml-5 text-center">Signs and Symptoms</h2>
            <p>
              Recognising the signs and symptoms of good or poor mental health can help you to engage in early prevention 
              strategies to protect your overall well-being. It also enables you to seek professional help and support if 
              someone you love or care about seems to be struggling with their mental health.
            </p>
            <p>
              There is an incredibly wide range of mental illnesses, and each person will exhibit different signs and symptoms. 
              The experience of mental health is also so unique and personalised, that it can be difficult to identify a short 
              list of symptoms.
            </p>
            <p>
              When keeping an eye out for this sign, remember that the key is looking for significant changes. Some people may 
              naturally be more energetic, and in this case, a drop in energy would be a warning sign, instead of ongoing 
              restlessness.
            </p>

            <h5>Changes in Mood</h5>
            <p>
              Subtle, or significant, changes in mood may indicate a change in mental state. This includes persistent sadness, 
              irritability, or frequent mood swings. There may also be unexplained changes in energy levels; people may suddenly 
              be excessively restless or incredibly lethargic.
            </p>

            <h5>Altered Thought Patterns</h5>
            <p>
              Someone may be experiencing persistent negative thoughts, excessive worry, or racing thoughts that interfere with 
              daily functioning. These fears or stresses may cause difficulty concentrating, making decisions, or experiencing 
              memory issues.
            </p>

            <h5>Emotional Changes</h5>
            <p>
              These intense feelings of fear, anxiety, or guilt, without apparent cause, can also be an indicator of emotional 
              changes. A person suffering from poor mental health may experience either heightened emotional sensitivity or 
              emotional numbness.
            </p>

            <h5>Behavioural Changes</h5>
            <p>
              Changes in someone’s behaviour are some of the easiest signs to identify in others when it comes to staying vigilant 
              about mental health. Keep an eye out for noticeable changes in sleep patterns, such as insomnia or oversleeping. 
              Eating patterns are also important to monitor, so look out for alterations in appetite, leading to significant weight 
              loss or gain.
            </p>

            <h5>Social Withdrawal</h5>
            <p>
              People may withdraw from their social circles when they start to feel unwell psychologically. This typically presents 
              as increased isolation from friends, family, or social activities as well as avoidance of once-enjoyed activities or hobbies.
            </p>

            <h5>Physical Symptoms</h5>
            <p>
              Sometimes people experience ‘psychosomatic’ symptoms, meaning that their mental ‘unwellness’ manifests as physical 
              symptoms in their body. Some examples include unexplained aches and pains, digestive issues, or changes in libido.
            </p>

            <h5>Impaired Functioning</h5>
            <p>
              People struggling with their mental health often find it difficult to maintain the same level of performance in their life. 
              This could present as a decline in performance at work, school, or daily responsibilities or perhaps struggles in maintaining 
              relationships or fulfilling social obligations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
 

