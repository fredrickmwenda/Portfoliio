import { Fragment, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { projects } from "../data/projo";
import Modal from "./popup/Modal";

const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  // const [detailsPopup, setDetailsPopup] = useState(false);

  const initialCategory = Object.keys(projects[0])[0];
  const [selectedTab, setSelectedTab] = useState(initialCategory);
  const [modalId, setModalId] = useState(null);
  const [getModal, setGetModal] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setModalId(null); // Clear modalId when changing tabs
    setGetModal(false); // Close modal when changing tabs
  };

  const handleModal = (id) => {
    setModalId(id);
    setGetModal(true);
  };
  // const closeModal = () => {
  //   setModalId(null);
  // };
  return (
    <Fragment>
      {/* <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} /> */}
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3 className="sati">
                <span >Look at my recent projects</span>
              </h3>
            </div>
          </div>

          <div className="container">
            {/* img/svg/hi.svg */}
            <div className="portfolio-main">
              <Tabs>
                <TabList className="portfolio-tab-list" data-aos="fade-up">
                  {Object.keys(projects[0]).map((category) => (
                    <Tab
                      key={category}
                      onClick={() => handleTabChange(category)}
                      className={`react-tabs__tab ${
                        selectedTab === category
                          ? "react-tabs__tab--selected"
                          : ""
                      }`}
                    >
                      {category}
                    </Tab>
                  ))}
                </TabList>

                <div className="container">
                  <TabPanel>
                    <div className="tab-container">
                      {projects[0]["Laravel"].map((project) => (
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img
                              src={project.image}
                              alt="portfolio project demo"
                              className="tab-img"
                            />
                            <h3 className="tab-data">
                              <span className="conent-title">
                                {project.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tab-container">
                      {projects[0]["Python"].map((project) => (
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img
                              src={project.image}
                              alt="portfolio project demo"
                              className="tab-img"
                            />
                            <h3 className="tab-data">
                              <span className="conent-title">
                                {project.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-container">
                      {projects[0]["React"].map((project) => (
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img
                              src={project.image}
                              alt="portfolio project demo"
                              className="tab-img"
                            />
                            <h3 className="tab-data">
                              <span className="conent-title">
                                {project.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tab-container">
                      {projects[0]["Android"].map((project) => (
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img
                              src={project.image}
                              alt="portfolio project demo"
                              className="tab-img"
                            />
                            <h3 className="tab-data">
                              <span className="conent-title">
                                {project.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-container">
                      {projects[0]["Flutter"].map((project) => (
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img
                              src={project.image}
                              alt="portfolio project demo"
                              className="tab-img"
                            />
                            <h3 className="tab-data">
                              <span className="conent-title">
                                {project.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tab-container">
                      {projects[0]["WordPress"].map((project) => (
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img
                              src={project.image}
                              alt="portfolio project demo"
                              className="tab-img"
                            />
                            <h3 className="tab-data">
                              <span className="conent-title">
                                {project.title}
                              </span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                  {/* <TabPanel>
                  <div className="tab-container">
 
                      
                      {projects[0][selectedTab].map(project => (
                  
                        <div
                          key={project.id}
                          data-aos="fade-right"
                          data-aos-delay={project.delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => handleModal(project.id)}
                          >
                            <img src={project.image} alt="portfolio project demo" className="tab-img" />
                            <h3 className="tab-data">
                              <span className="conent-title">{project.title}</span>
                            </h3>
                          </div>
                        </div>
                       ))}
                       
                    
                  </div>
                </TabPanel> */}
                  {/* <TabPanel>
                    <div className="tab-container">
                      {projects.map((item) => {
                        const { id, type, image, delayAnimation } = item;

                        return (
                          <div
                            key={id}
                            data-aos="fade-right"
                            data-aos-delay={delayAnimation}
                          >
                            <div
                              className="tab-content"
                              onClick={() => handleModal(id)}
                            >
                              <img src={image} alt="portfolio project demo" />
                              <h3>
                                <span className="conent-title">{type}</span>
                              </h3>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-container">
                      {PortfolioData.filter((item) =>
                        item.tag.includes("logo")
                      ).map((item) => {
                        const { id, type, image, delayAnimation } = item;
                        return (
                          <div
                            key={id}
                            data-aos="fade-right"
                            data-aos-delay={delayAnimation}
                          >
                            <div
                              className="tab-content"
                              onClick={() => handleModal(id)}
                            >
                              <img src={image} alt="portfolio project demo" />
                              <h3>
                                <span className="conent-title">{type}</span>
                              </h3>
                            </div>
                            {getModal && <Modal props={modalId} />}
                          </div>
                        );
                      })}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-container">
                      {PortfolioData.filter((item) =>
                        item.tag.includes("video")
                      ).map((item) => {
                        const { id, type, image, delayAnimation } = item;
                        return (
                          <div
                            key={id}
                            data-aos="fade-right"
                            data-aos-delay={delayAnimation}
                          >
                            <div
                              className="tab-content"
                              onClick={() => handleModal(id)}
                            >
                              <img src={image} alt="portfolio project demo" />
                              <h3>
                                <span className="conent-title">{type}</span>
                              </h3>
                            </div>
                            {getModal && <Modal props={modalId} />}
                          </div>
                        );
                      })}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-container">
                      {PortfolioData.filter((item) =>
                        item.tag.includes("graphic design")
                      ).map((item) => {
                        const { id, type, image, delayAnimation } = item;
                        return (
                          <div
                            key={id}
                            data-aos="fade-right"
                            data-aos-delay={delayAnimation}
                          >
                            <div
                              className="tab-content"
                              onClick={() => handleModal(id)}
                            >
                              <img src={image} alt="portfolio project demo" />
                              <h3>
                                <span className="conent-title">{type}</span>
                              </h3>
                            </div>
                            {getModal && <Modal props={modalId} />}
                          </div>
                        );
                      })}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-container">
                      {PortfolioData.filter((item) =>
                        item.tag.includes("mockup")
                      ).map((item) => {
                        const { id, type, image, delayAnimation } = item;
                        return (
                          <div
                            key={id}
                            data-aos="fade-right"
                            data-aos-delay={delayAnimation}
                          >
                            <div
                              className="tab-content"
                              onClick={() => handleModal(id)}
                            >
                              <img src={image} alt="portfolio project demo" />
                              <h3>
                                <span className="conent-title">{type}</span>
                              </h3>
                            </div>
                            {getModal && <Modal props={modalId} />}
                          </div>
                        );
                      })}
                    </div>
                  </TabPanel> */}
                </div>
              </Tabs>
            </div>
            {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
