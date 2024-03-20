import { useState } from "react";
const faqs = [
  {
    title:
      "Is the us of the service completely Free of Charge and are there any additional costs for users?",
    text: "Absolutly, the use of our service are completely free for all users and there are no additional fees",
  },
  {
    title: "Who is liable in case of disputes?",
    text: "We at falschpark.ch take full responsibilities and handle all administrative tasks",
  },
  {
    title:
      "As a property owner or manager, do I need a judicial prohibition to have a vehicle towed?",
    text: "No, to have illegally parked vehicles towed, neither a judcical prohibition or signage is required! ",
  },
  {
    title:
      "Can I have a car towed if it's parked illegally on my private parking space?",
    text: "Yes, as long as you provide us with your lease agreement proving that you rent the parking space, and sign the necessary assignment (cession) allowing us to claim the incured costs from the person who parked illegally. ",
  },
];
function Accordion() {
  const [curOpen, setOpen] = useState(null);
  return (
    <>
      <h1 className="see-how-title">You asked, we answer.</h1>
      <div className="accordion">
        {faqs.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setOpen}
            number={i + 1}
            title={el.title}
            text={el.text}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
function AccordionItem({ number, title, text, curOpen, onOpen }) {
  const isOpen = number === curOpen;
  console.log("this is curOpen:", curOpen, "this is curNum:", number);
  function handleToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="accordion-icon">{isOpen ? "-" : "+"}</p>
      <p className="title">{title}</p>

      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}
export default Accordion;
