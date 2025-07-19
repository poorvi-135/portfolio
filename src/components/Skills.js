import firebase from "../assets/img/firebase.png";
import taiwind from "../assets/img/tailwind.jpg";
import nextjs from "../assets/img/nextjs.jpg";
import nodejs from "../assets/img/node.webp";
import mongo from "../assets/img/mongo.png";
import ml from "../assets/img/ml.jpg";
import react from "../assets/img/react.png";
import js from "../assets/img/js.webp";
import ts from "../assets/img/ts.webp";
import express from "../assets/img/express.jpg"
import dsa from "../assets/img/dsa.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> Here are the technologies and tools I have experience with:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h4>Firebase</h4>
                            </div>
                            <div className="item">
                                <img src={ml} alt="Image" />
                                <h4>Machine learning </h4>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h4>React</h4>
                            </div>
                            <div className="item">
                                <img src={nextjs} alt="Image" />
                                <h4>Next js</h4>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h4>Node js</h4>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h4>Mongodb </h4>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h4>Html , Css , Javascript </h4>
                            </div>
                            <div className="item">
                                <img src={ts} alt="Image" />
                                <h4>Typescript</h4>
                            </div>
                            <div className="item">
                                <img src={dsa} alt="Image" />
                                <h4>data structures and algorithms</h4>
                            </div>
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
