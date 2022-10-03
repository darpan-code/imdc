import { useEffect, useState } from "react";
import CountUp from "react-countup";

const SkillsSection = () => {
  return (
    <div className="col-xs-12 col-sm-5">
      <SkillItem />
      <SkillItem />

      <div className="white-space-10"></div>
      <div className="block-title">
        <h3>Knowledges</h3>
      </div>
      <ul className="knowledges">
        <li>Marketing</li>
        <li>Print</li>
        <li>Digital Design</li>
        <li>Social Media</li>
        <li>Time Management</li>
        <li>Communication</li>
        <li>Problem-Solving</li>
        <li>Social Networking</li>
        <li>Flexibility</li>
      </ul>
      <div className="white-space-50"></div>
    </div>
  );
};

const SkillItem = () => {
  return (
    <>
      <div className="block-title">
        <h3>
          Design <span>Skills</span>
        </h3>
      </div>
      <div className="skills-info skills-second-style">
        <ProgressItem />
        <ProgressItem />
        <ProgressItem />
      </div>
    </>
  );
};

const ProgressItem = () => {
  const value = 55;
  return (
    <>
      <div className="skill clearfix">
        <h4>Web Design</h4>
        <div className="skill-value">
          <CountUp start={0} end={parseInt(95, 10)} duration={3} />
        </div>
      </div>
      <div className="skill-container skill-1">
        <div className="skill-percentage" style={{ width: `${value}%` }}></div>
      </div>
      <style jsx>{`
        .skill-percentage {
          animation: load 3s normal forwards;
        }
        @keyframes load {
          0% {
            width: 0;
          }
          100% {
          }
        }
      `}</style>
    </>
  );
};

export default SkillsSection;
