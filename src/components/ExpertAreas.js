import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Trainings", value: 219 },
  { name: "Written Book", value: 48 },
  { name: "Listeners", value: 527 },
  { name: "Own Projects", value: 12 },
];

const skills = [
  { name: "Python", value: 90, icon: "img/skills/python.svg" },
  { name: "Django", value: "80", icon: "img/skills/django.svg" },
  { name: "Laravel", value: "85", icon: "img/skills/laravel.svg" },
  { name: "Android", value: "95", icon: "img/skills/android.svg" },
  { name: "Flutter", value: "90", icon: "img/skills/flutter.svg" },
  { name: "React", value: "90", icon: "img/skills/react.svg" },
  { name: "JQuery", value: "75", icon: "img/skills/jquery.svg" },
  { name: "WordPress", value: "75", icon: "img/skills/wordpress.svg" },
  { name: "Git", value: "75", icon: "img/skills/git.svg" },
];

const experiences = [
  {
    company: "Centrics Limited.",
    designation: "Software Developer",
    time: "Oct 2022 - Feb 2023",
  },
  {
    company: "Zalego Academy",
    designation: "Backend Developer",
    time: "July 2021 - Dec 2021",
  },
  {
    company: "Oracom",
    designation: "Web Developer Intern",
    time: "Oct 2019 - Jan 2020",
  },

];

const educations = [
  {
    institution: "Dedan Kimathi University of Technology (Dekut)",
    certificate: "Degree in Information Technology",
    time: "2015 - 2019",
  },
  // {
  //   institution: "Art Univercity of New York",
  //   certificate: "Art Director Course",
  //   time: "2020 - 2021",
  // },
  // {
  //   institution: "Amazon College",
  //   certificate: "IOS Development",
  //   time: "2018 - 2020",
  // },
  // {
  //   institution: "Univercity of Texas",
  //   certificate: "UX Expert",
  //   time: "2017 - 2018",
  // },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    In the realm of fullstack web development, my proficiency encompasses both the front-end and back-end realms of digital architecture. From crafting captivating user interfaces using HTML, CSS, and JavaScript, to orchestrating robust server-side operations through frameworks like Laravel and Django.
                  </p>
                  <p>
                  My prowess extends seamlessly to mobile application development, where I harness my skills to craft intuitive and dynamic experiences using Android and Flutter.I also encompass integration of APIs, enabling robust interactions and seamless data exchange
                  </p>
                </div>
                <div className="orido_tm_boxed_button">

                  <a href="files/MuriungiResume.pdf" download="resume.pdf">
                    My Resume{" "}
                    {/* <img className="svg" src="img/svg/paper.svg" alt="" /> */}
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} 
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      {/* <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
export default ExpertAreas;
