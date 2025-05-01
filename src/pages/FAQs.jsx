import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of dance classes do you offer?",
      answer: "We offer classical, hip-hop, contemporary, Bollywood, freestyle, and Zumba dance classes.",
    },
    {
      question: "Are your classes available online?",
      answer: "Yes, we offer both live online and offline sessions for your convenience.",
    },
    {
      question: "Can beginners join?",
      answer: "Absolutely! We have special beginner-friendly batches with dedicated instructors.",
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, students receive certificates after completing specific courses or levels.",
    },
    {
      question: "How long is each dance session?",
      answer: "Each class typically lasts between 60 to 90 minutes, depending on the batch and style.",
    },
    {
      question: "What is the age requirement to join?",
      answer: "We welcome students of all ages, from kids aged 5 to adults and even senior learners.",
    },
    {
      question: "Do I need prior dance experience to join?",
      answer: "Not at all! We have structured programs for absolute beginners as well as experienced dancers.",
    },
    {
      question: "Is there a dress code for the classes?",
      answer: "Comfortable, stretchable clothing is preferred. For specific styles like classical, traditional attire is recommended.",
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes, we offer one free trial class so you can experience our teaching style before enrolling.",
    },
    {
      question: "Are the instructors professionally trained?",
      answer: "Yes, all our instructors are certified and have years of teaching and performance experience.",
    },
    {
      question: "What are the payment options?",
      answer: "We accept online payments via UPI, debit/credit cards, and net banking. EMI options are also available.",
    },
    {
      question: "Can I switch batches if my timing changes?",
      answer: "Yes, subject to availability, we allow flexible batch switching for your convenience.",
    },
    {
      question: "Are there any performance opportunities?",
      answer: "Yes! We regularly organize stage shows and video performances for our students.",
    },
    {
      question: "How can I contact your support team?",
      answer: "You can reach us via the Contact form, email, or phone number listed in the footer of our website.",
    },
  ];  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const styles = {
    container: {
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "50px 20px",
      fontFamily: "Segoe UI, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "2.8rem",
      color: "crimson",
      marginBottom: "30px",
    },
    faqItem: {
      backgroundColor: "#111",
      margin: "15px auto",
      maxWidth: "800px",
      borderRadius: "10px",
      border: "1px solid darkcyan",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    question: {
      padding: "15px 20px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "darkcyan",
    },
    answer: {
      padding: "0 20px 15px 20px",
      color: "#ccc",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Frequently Asked Questions</div>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div
            style={styles.question}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          {openIndex === index && <div style={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
