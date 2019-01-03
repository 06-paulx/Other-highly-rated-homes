import React from 'react';
import { relative } from 'path';

const closeButton = closeHandler => {
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

const fb = () => (
  <button
    type="submit"
    className="fb"
    aria-busy="false"
    style={{ marginBottom: '8px' }}
  >
    <span className="_1cjbe3z7">
      <div
        className="_qtix31"
        style={{
          margin: '0px auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
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
  </button>
);

const google = () => (
  <div aria-busy="false">
    <span>
      <div
        style={{
          margin: '0px auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <div style={{ marginRight: '12px' }}>
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '18px',
                width: '18px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                  fill="#EA4335"
                />
                <path
                  d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                  fill="#4285F4"
                />
                <path
                  d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                  fill="#34A853"
                />
                <path d="M0 0h18v18H0V0z" />
              </g>
            </svg>
          </div>
        </div>
        <div>Continue with Google</div>
      </div>
    </span>
  </div>
);

const saveToList = (closeHandler, image, title, rating, reviews, place) => {
  //console.log('id', id);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal">
          {closeButton(closeHandler)}
          <div className="save">Save to list</div>
          <div>
            <div>{fb()}</div>
            <div className="google">{google()}</div>
            <div className="orContainer">
              <div className="or">or</div>
            </div>
            <div className="signUp">
              <div className="signUpLogo">
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    position: 'relative',
                    top: '2px',
                    height: '18px',
                    width: '18px',
                    display: 'block',
                    fill: 'currentcolor',
                  }}
                >
                  <path
                    d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              Sign up with Email
            </div>
            <div className="line" />
            <div className="modalFooter">
              <div className="modalFooterText">
                <div className="member">Already have an Airbnb account? </div>
                <div className="logIn">Log in</div>
              </div>
            </div>
          </div>
          <div>
            <div className="smallListingOuter">
              <div className="smallListingInner">
                <div className="smallListingImageContainer">
                  <img src={image} className="smallListingImage" />
                </div>
                <div>
                  <div className="modalTitle">{title}</div>
                  <div className="modalPlace">{place}</div>
                  <div className="modalRating">
                    <div className="modalStars">{rating} </div>
                    <div className="modalReviews">{reviews} reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Modal(props) {
  //console.log('id props', props.id);
  return props.modalOpen ? (
    saveToList(
      props.close,
      props.image,
      props.title,
      props.rating,
      props.reviews,
      props.place,
      props.id,
    )
  ) : (
    <div />
  );
}
