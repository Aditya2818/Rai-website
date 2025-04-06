import "./Modal.css";

import React from "react";

const Modal = ({ modalRef }) => {
  return (
    <div className="Modal" ref={modalRef}>
      <div className="first-para">
        <div>
          <p>
            <b>Kira Rai Daniel</b> is the Founder and Director of the Rai Arts
            Initiative. She holds a BFA in Modern Dance from Texas Christian
            University and recently earned her Master’s degree in Arts
            Administration from Teachers College, Columbia University, New York.
          </p>
          <p>
            A proud Houston native, Kira’s journey in the performing arts began
            with praise dance, followed by formal training at Meyerland Middle
            School and Kinder High School for the Performing and Visual Arts.
            She further honed her craft through summer intensives at Alvin Ailey
            American Dance Theater and Eisenhower Dance Detroit, performing
            works by renowned choreographers such as Martha Graham, José Limón,
            Jamila Glass, and Stephanie Pizzo.
          </p>
        </div>
        <img src="./kira.png" className="kira-img" />
      </div>
      <div>
        <p>
          At age 22, Kira relocated to New York City to pursue her passion for
          arts administration. During her studies at Teachers College, she
          gained hands-on experience as an engagement intern with American
          Ballet Thatre and as a grant writer for kNoname Artist. Her early
          challenges accessing formal dance training and navigating the
          complexities of a dance career fueled her determination to bridge the
          gap between art and advocacy for the next generation of dancers.
        </p>
        <p>
          Kira founded Rai Arts Initiative after recognizing a significant gap
          between what dancers learn in college and the practical knowledge
          required to succeed in the greater dance world. Initially resistant to
          learning business skills, Kira felt lost upon graduating from
          undergrad, unsure of how to navigate the business aspects of being an
          artist.<b> “Being a dancer is a business just as much as it is a
          performance,” </b>she realized. It wasn’t until her master’s studies in
          arts administration that she understood the importance of this
          knowledge and wished it had been part of her undergraduate education.
          With this realization, Kira became committed to empowering dancers
          with the tools to navigate the broader dance industry and to find ways
          to generate sustainable income. She believes learning these skills
          should be a right, not a privilege, and strives to equip dancers with
          the confidence and abilities to thrive, both on and off the stage.
        </p>
        <p>
          Throughout her academic journey, Kira immersed herself in key areas of
          arts administration, including marketing, fundraising, accounting,
          intellectual property, and contract law. She also enhanced her skills
          through workshops in negotiation and conflict resolution.
        </p>
        <p>
          With Rai Arts Initiative, Kira aims to share her knowledge with
          dancers before they enter the industry, helping them understand that
          their skills and expertise can translate into a variety of
          opportunities. Whether they are dancing or pursuing other paths, Kira
          teaches dancers how to leverage their artistry to build fulfilling,
          impactful careers.
        </p>
      </div>
    </div>
  );
};

export default Modal;
