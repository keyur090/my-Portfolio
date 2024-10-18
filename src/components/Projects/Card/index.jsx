import "./card.css"


const Card = (props) => {

  return (
    <div className="card">
      <div className="picture">
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className="card__details">
        <div className="card__details__top">
          <h2 className="title">{props.title}</h2>
        </div>

        <div className="card__details__middle">{props.data.description}</div>
        <div className="button__container">
              <a href={props.demoLink} target="_blank" className="link"> Demo Link</a>
            </div>
          </div>
        {/* <div className="card__details__bottom"> */}
          {/* <div className="stack__container"> */}
            {/* <div className="stack__left">Stack</div> */}
            {/* <div className="stack__right"> */}
              {/* <div className="stack__box__container"> */}
                {/* {props.stack.map((list, index) => {
                  if (index < 4) {
                    return (
                      <div className="stack__box">
                        <div className="stack__icon__container">
                          <span
                            className="stack__icon"
                            style={{ color: list.iconcolor }}
                          >
                            {list.icon}
                          </span>
                          <span className="stack__name">{list.name}</span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div> */}
              {/* {props.stack.length > 4 ? (
                <div className="stack__view__more">
                  <div
                    className="more__btn"
                    onClick={() => setopenStackExpendBar(!openStackExpendBar)}
                  ></div>
                  <div 
                  className={`stack__expend__box ${openStackExpendBar ?" open__stack__expend__box":""}`}>
                  <h3 className="title">More Stack Used</h3>
                  <div className="stack__box__container">
                  {props.stack.map((list, index) => {
                  if (index >= 4) {
                    return (
                      <div className="stack__box">
                        <div className="stack__icon__container">
                          <span
                            className="stack__icon"
                            style={{ color: list.iconcolor }}
                          >
                            {list.icon}
                          </span>
                          <span className="stack__name">{list.name}</span>
                        </div>
                      </div>
                    );
                  }
                })}

                  </div>

                  </div>
                </div>
              ) : 
                ""
              } */}
            </div>
    //         /* <div className="button__container">
    //           <a href={props.demoLink} target="_blank" className="btn btn__primary">Demo</a>
    //           <div className="btn__share"><AiOutlineShareAlt/></div>
    //         </div>
    //       </div> */
    // //      </div>
    // //   </div>
    // // </div>
  );
};

export default Card;
