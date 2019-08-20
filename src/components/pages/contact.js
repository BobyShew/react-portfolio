import React from 'react';
import informationPicture from  "../../../static/assets/images/bio/login.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div   
                className="left-column" 
                style={{
                    background: "url(" + informationPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                />
            <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">801-874-9649</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">samborambo890@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Orem, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}