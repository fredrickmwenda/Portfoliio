import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Frontend Development",
    img: "img/service/Frontend.jpg",
    description: [
      "Frontend development plays a crucial role in shaping the user experience of websites and applications. It involves the creation and implementation of the visual and interactive elements that users directly interact with.",
      " Through the use of HTML, CSS, and JavaScript, frontend developers build the layout, design, and functionality of a digital product. They ensure that the interface is not only aesthetically pleasing but also user-friendly and intuitive.",
     
    ],
  },
  {
    name: "UI & UX",
    img: "img/service/userinterface.jpg",
    description: [
      "User Interface (UI) and User Experience (UX) are two integral aspects of creating successful digital products, each contributing distinct elements to the overall design and functionality.",
      "UI refers to the visual and interactive elements through which users interact with a website or application, The layout and organization of UI elements are carefully crafted to enhance usability and guide users through their journey. By focusing on aspects like visual hierarchy, intuitive navigation, and responsive design",
      "UX encompasses the holistic experience that users have while interacting with a digital product. It takes into account every touchpoint and interaction a user has, from the moment they land on a website or open an app to their final action",
    ],
  },
  {
    name: "Backend Development",
    img: "img/service/Backend.jpg",
    description: [
      "Backend development forms the backbone of web applications, encompassing the server-side logic, databases, and other components that power the functionality of a digital product. It's responsible for handling data storage, processing, and serving information to the frontend.",
      "Backend is involved in api creation,  security, implementing measures like data encryption, authentication, and authorization to protect sensitive information and ensure the integrity of the application. Scalability and performance optimization are also key concerns for backend developement.",
      
    ],
  },
  {
    name: "Api Integration",
    img: "img/service/apis.jpg",
    description: [
      "API integration is the process of connecting different software systems through their Application Programming Interfaces (APIs) to enable them to communicate and exchange data seamlessly. APIs serve as intermediaries, allowing one application to make requests and receive responses from another application's services or data.",
      "API integration facilitates seamless data exchange between applications, allowing retrieval of information from one system (e.g., user data) for use in another (e.g., an e-commerce site using a payment gateway). External API integration extends app functionality, like incorporating mapping APIs for location services. APIs enable real-time updates, seen in social media feeds, and often connect third-party services like payment processing, each secured via authentication methods like tokens or OAuth, while proper error handling ensures reliable performance.",
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
