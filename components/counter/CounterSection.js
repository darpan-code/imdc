import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              Fun <span>Facts</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <CounterItem />
        <CounterItem />
        <CounterItem />
      </div>
    </>
  );
};

const CounterItem = () => {
  return (
    <div className="col-xs-12 col-sm-4">
      <div className="fun-fact gray-default">
        <i className="lnr lnr-heart"></i>
        <h4>Happy Clients</h4>
        <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
          {({ isVisible }) => (
            <span className="fun-fact-block-value">
              {isVisible ? (
                <CountUp start={0} end={parseInt(581, 10)} duration={3} />
              ) : null}
              +
            </span>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default CounterSection;

{
  /* <div className="col-xs-12 col-sm-4">
<div className="fun-fact gray-default">
  <i className="lnr lnr-clock"></i>
  <h4>Working Hours</h4>
  <span className="fun-fact-block-value">4,780</span>
  <span className="fun-fact-block-text"></span>
</div>
</div>

<div className="col-xs-12 col-sm-4 ">
<div className="fun-fact gray-default">
  <i className="lnr lnr-star"></i>
  <h4>Awards Won</h4>
  <span className="fun-fact-block-value">15</span>
  <span className="fun-fact-block-text"></span>
</div>
</div> */
}
