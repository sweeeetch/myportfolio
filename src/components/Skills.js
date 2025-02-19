import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    name: "Filmmaking",
    description:
      "Crafting cinematic visuals through directing, shooting, and editing.",
    color: "#526683",
    image:
      "https://res.cloudinary.com/dnn6y8vao/image/upload/v1740002771/filming_o4rgcb.png", // 🎥 Camera Icon
  },
  {
    name: "Voice Over",
    description:
      "Delivering professional voice recordings for commercials, narrations, and more.",
    color: "#A5A9AE",
    image:
      "https://res.cloudinary.com/dnn6y8vao/image/upload/v1740002771/voice-over_uho94s.png", // 🎤 Microphone Icon
  },
  {
    name: "Software Development",
    description: "Building modern and efficient software solutions.",
    color: "#7A7A79",
    image:
      "https://res.cloudinary.com/dnn6y8vao/image/upload/v1740002771/code_u1epwz.png", // 💻 Code/Programming Icon
  },
  {
    name: "Project Management",
    description:
      "Managing teams and projects to ensure smooth execution and delivery.",
    color: "#534D4D",
    image: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png", // 📊 Task/Project Icon
  },
];

const Skills = ({
  setShowFilmMaking,
  setShowVoiceOver,
  setShowSoftwareDev,
}) => {
  const skillsRef = useRef(null);
  // const titleRef = useRef(null);
  // const svgRef = useRef(null);

  useEffect(() => {
    gsap.set(skillsRef.current, { opacity: 0, y: 100 });
    // gsap.fromTo(
    //   [titleRef.current, svgRef.current],
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.2,
    //     ease: "power3.out",
    //     stagger: 0.2,
    //   }
    // );
    ScrollTrigger.create({
      trigger: skillsRef.current,
      start: "top 80%",
      end: "bottom 40%",
      onEnter: () =>
        gsap.to(skillsRef.current, { opacity: 1, y: 0, duration: 0.6 }),
      onEnterBack: () =>
        gsap.to(skillsRef.current, { opacity: 1, y: 0, duration: 0.6 }),
      onLeave: () =>
        gsap.to(skillsRef.current, { opacity: 0, y: 100, duration: 0.6 }),
      onLeaveBack: () =>
        gsap.to(skillsRef.current, { opacity: 0, y: 100, duration: 0.6 }),
    });

    // gsap.fromTo(
    //   titleRef.current,
    //   { x: "-100%", opacity: 0 },
    //   {
    //     x: "0%",
    //     opacity: 1,
    //     duration: 1.2,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: titleRef.current,
    //       start: "top 90%",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );
  }, []);

  const handleSkillClick = (skillName) => {
    if (skillName === "Filmmaking") {
      setShowFilmMaking(true);
      setTimeout(() => {
        document
          .getElementById("filmmaking")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (skillName === "Voice Over") {
      setShowVoiceOver(true);
      setTimeout(() => {
        document
          .getElementById("voiceover")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (skillName === "Software Development") {
      setShowSoftwareDev(true);
      setTimeout(() => {
        document
          .getElementById("softwaredev")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section ref={skillsRef} className="skills-container">
      {/* <svg
        ref={svgRef}
        className="skill-me-svg"
        width="250"
        height="107"
        viewBox="0 0 404 107"
        fill="none"
        style={{ marginBottom: "120px" }}
      >
        <rect
          x="4"
          y="4"
          rx={13}
          width="396"
          height="99"
          stroke="white"
          strokeWidth="8"
        />
        <text
          ref={titleRef}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="Montseratt, sans-serif"
          fontWeight="bold"
        >
          Skills
        </text>
      </svg> */}
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="card"
            style={{ "--clr": skill.color }}
            onClick={() => handleSkillClick(skill.name)}
          >
            <div className="circle">
              <img src={skill.image} alt={skill.name} className="logo" />
            </div>
            <div className="content">
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
