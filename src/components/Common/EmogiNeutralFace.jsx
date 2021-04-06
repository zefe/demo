import React from 'react';


export const EmogiNeutralFace = ({ onClick, neutralFace}) => {
  let styleClass = "face-rating-blank";
  if (neutralFace === true) {
    styleClass = "face-rating-filled";
  }

  return (
    <div>
        <div onClick={onClick} >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M17.3694 15.9321H8.70269C8.51115 15.9321 8.32745 16.0082 8.192 16.1437C8.05656 16.2791 7.98047 16.4628 7.98047 16.6544C7.98047 16.8459 8.05656 17.0296 8.192 17.165C8.32745 17.3005 8.51115 17.3766 8.70269 17.3766H17.3694C17.5609 17.3766 17.7446 17.3005 17.88 17.165C18.0155 17.0296 18.0916 16.8459 18.0916 16.6544C18.0916 16.4628 18.0155 16.2791 17.88 16.1437C17.7446 16.0082 17.5609 15.9321 17.3694 15.9321Z" className={styleClass}/>
                <path d="M12.9999 1.44434C10.7144 1.44434 8.48028 2.12206 6.57997 3.3918C4.67967 4.66154 3.19857 6.46627 2.32396 8.57777C1.44934 10.6893 1.2205 13.0127 1.66638 15.2543C2.11225 17.4958 3.21281 19.5548 4.82889 21.1709C6.44496 22.787 8.50396 23.8875 10.7455 24.3334C12.9871 24.7793 15.3105 24.5504 17.422 23.6758C19.5335 22.8012 21.3382 21.3201 22.608 19.4198C23.8777 17.5195 24.5555 15.2854 24.5555 12.9999C24.5555 9.93517 23.338 6.99597 21.1709 4.82888C19.0038 2.66179 16.0646 1.44434 12.9999 1.44434ZM12.9999 23.111C11.0001 23.111 9.04523 22.518 7.38246 21.407C5.7197 20.2959 4.42373 18.7168 3.65845 16.8692C2.89316 15.0217 2.69293 12.9887 3.08307 11.0273C3.47321 9.06595 4.4362 7.26432 5.85026 5.85026C7.26433 4.43619 9.06595 3.4732 11.0273 3.08306C12.9887 2.69292 15.0217 2.89316 16.8693 3.65844C18.7168 4.42373 20.296 5.7197 21.407 7.38246C22.518 9.04522 23.111 11.0001 23.111 12.9999C23.111 15.6815 22.0457 18.2533 20.1495 20.1495C18.2533 22.0457 15.6815 23.111 12.9999 23.111Z" className={styleClass}/>
                <path d="M18.1711 11.6134C18.8891 11.6134 19.4711 11.0314 19.4711 10.3134C19.4711 9.59546 18.8891 9.01343 18.1711 9.01343C17.4531 9.01343 16.8711 9.59546 16.8711 10.3134C16.8711 11.0314 17.4531 11.6134 18.1711 11.6134Z" className={styleClass}/>
                <path d="M8.05977 11.6134C8.77774 11.6134 9.35977 11.0314 9.35977 10.3134C9.35977 9.59546 8.77774 9.01343 8.05977 9.01343C7.3418 9.01343 6.75977 9.59546 6.75977 10.3134C6.75977 11.0314 7.3418 11.6134 8.05977 11.6134Z" className={styleClass}/>
            </svg>
        </div>
    </div>
  );
  
};