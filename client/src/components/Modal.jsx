import React from 'react';

const closeButton = () => {
  return (
    <div className="closeDiv">
      <button
        type="button"
        className="closeModalButton"
        aria-busy="false"
        onClick={closeHandler}
        style={{ padding: '0px', margin: '0px' }}
      >
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-label="Close"
          focusable="false"
          style={{
            height: '16px',
            width: '16px',
            display: 'block',
            fill: 'rgb(118, 118, 118)',
          }}
        >
          <path
            d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const fb = () => {
  {
    /* <button
                type="submit"
                className="fb"
                aria-busy="false"
                style={{ marginBottom: '8px' }}
              >
                <span className="_1cjbe3z7">
                  <div className="_qtix31" style={{ margin: '0px auto' }}>
                    <div className="_ni9axhe">
                      <div style={{ marginRight: '12px' }}>
                        <svg
                          viewBox="0 0 32 32"
                          role="presentation"
                          aria-hidden="true"
                          focusable="false"
                          style={{
                            height: '18px',
                            width: '18px',
                            display: 'block',
                            fill: 'currentcolor',
                          }}
                        >
                          <path
                            d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="_ni9axhe">Continue with Facebook</div>
                  </div>
                </span>
              </button> */
  }
};
const saveToList = (closeHandler, image, title, price) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal">
          {closeButton}
          <div>Close</div>
          <div className="save">Save to list</div>
          <div>
            <div>Facebook</div>
            <div>Google</div>
            <div>or</div>
            <div>Sign up</div>
          </div>
          <div className="smallListingOuter">
            <div className="smallListingInner">
              <div className="smallListingImageContainer">
                <img src={image} className="smallListingImage" />
              </div>
              <div>
                <div>{title}</div>
                <div>{price}</div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Modal(props) {
  return props.modalOpen ? (
    saveToList(props.close, props.image, props.title, props.price)
  ) : (
    <div />
  );
} /*
  constructor(props) {
    super(props);
    this.state = {
      closeModal: true,
    };

    closeModal (){

    }
  }

  render() {
    return this.props.modalState === true ? saveToList() : <div />;
    // <div>
    //   <div>Close</div>
    //   <div>Save to list</div>
    //   <div>Facebook</div>
    //   <div>Google</div>
    //   or
    //   <div>Sign up</div>
    // </div>
  }
}
*/

//export default Modal;
