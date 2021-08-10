import React, { Component, useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import WorkData from '../work_experience.json';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import Data from '../data.json';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button/Button';


function About() {


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
  ]


  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch('../work_experience.json');
    const newJobs = await response.json();
    setJobs(newJobs);
  };
  useEffect(() => {
    fetchJobs();

  }, []);



  const { company, dates, duties, title } = WorkData[value];
  return (


    <div className="about" >

      <h1 className="about-heading">.about(<strong style={{color:'#3C17CB'}}>i</strong>)</h1>
      <div className="myself">
        <div>I am a creative full-stack developer and game developer.</div><br />
        <div>Coding is my passion, along with
          <Typewriter options={{
            strings: ['playing sport', 'travelling', "reading"],
            autoStart: true,
            loop: true,
          }} /> or simply... a cup of coffee.</div><br />
        <div>Born in <i style={{color:'yellow'}}>Vietnam</i>, living and working in <i style={{color:'blue'}}>Melbourne</i>, <i style={{color:'red'}}>Australia</i>.</div><br />

        <div className="exp-year">// <strong style={{color:'#05f7ff'}}>2+</strong> years of experience</div>

        
          <a href="//linkedin.com/in/lbduynguyen" target="blank" className="icon-circle-about">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>

          <a href="//github.com/kevinnguyen2208" target="blank" className="icon-circle-about">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        

     
      </div>


      <hr className="line-break" />

      <div className="title">
        <h1 className="about-heading">My<strong style={{color:'#3C17CB'}}>[SKILLS]</strong></h1>
        <div className="underline"></div>
      </div>
      <div className="skills-container">
        <Carousel breakPoints={breakPoints}>
          <div className="skills-tab">
            <ul className="skills-word">

              <li><strong style={{color:"#3C17CB"}}>Adobe Creative Suite</strong></li>
              <li>{Data.map(skill => {
                return (
                  <h3>{skill.skills1}</h3>
                )
              })}
              </li>
            </ul>
          </div>
          <div className="skills-tab">
            <ul className="skills-word">
              <li><strong style={{color:"#3C17CB"}}>Tech</strong></li>
              <li>{Data.map(skill => {
                return (
                  <h3>{skill.skills2}</h3>
                )
              })}
              </li>
            </ul>
          </div>
          <div className="skills-tab">
            <ul className="skills-word">
              <li><strong style={{color:"#3C17CB"}}>Database Management</strong></li>
              <li>{Data.map(skill => {
                return (
                  <h3>{skill.skills3}</h3>
                )
              })}
              </li>
            </ul>
          </div>
          <div className="skills-tab">
            <ul className="skills-word">
              <li><strong style={{color:"#3C17CB"}}>Others</strong></li>
              <li>{Data.map(skill => {
                return (
                  <h3>{skill.skills4}</h3>
                )
              })}
              </li>
            </ul>
          </div>

        </Carousel>
      </div>

      <hr className="line-break" />

      <section>
        <div className="title">
          <h1 className="about-heading">My<strong style={{color:'#3C17CB'}}>[EXP]</strong></h1>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {
              WorkData.map((item, index) => {
                return <button key={item.id} onClick={() =>
                  setValue(index)}
                  className={`job-btn ${index === value &&
                    `active-btn`}`}
                >
                  {item.company}</button>
              })}

          </div>

          <article className="job-info">

            <h3> {title}</h3>
            <h4 className="company-btn">{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"> </FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>

      <br className="end-br" />

    </div>
  );
}


export default About;