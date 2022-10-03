const CareerSection = () => {
  return (
    <div className="col-xs-12 col-sm-7">
      <CarrerItem />
      <CarrerItem />
    </div>
  );
};

const CarrerItem = () => {
  return (
    <>
      <div className="block-title">
        <h3>Education</h3>
      </div>

      <div className="timeline timeline-second-style clearfix">
        <TimelineItem />
        <TimelineItem />
      </div>

      <div className="white-space-50"></div>
    </>
  );
};

const TimelineItem = () => {
  return (
    <div className="timeline-item clearfix">
      <div className="left-part">
        <h5 className="item-period">2008</h5>
        <span className="item-company">University of Studies</span>
      </div>
      <div className="divider"></div>
      <div className="right-part">
        <h4 className="item-title">Frontend Development</h4>
        <p>
          Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
          aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
          lobortis ante.
        </p>
      </div>
    </div>
  );
};

export default CareerSection;
