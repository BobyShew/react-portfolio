import React, { Component } from 'react';
import axios from "axios";



export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        }




    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {


        axios.get(`https://samsmith.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true })

        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })

        }).catch(error => {
            console.log("getBlogItems error", error);
        })
    }
    
    render() {
        const {
             banner_image_url,
             category,
             description,
             logo_url,
             name,
             thumb_image_url,
             url,
        } = this.state.portfolioItem;

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          };
      
          const logoStyles = {
            width: "200px"
          };

    return (
        <div className="portfolio-detail-wrapper">
            <div className="portfolio-detail-name">
            <div className="title"><h2>{name}</h2></div>
           </div>
           <div className="portfolio-detail-img" style={bannerStyles}>
                <img src={logo_url} style={logoStyles}/>
            </div>
           <div className="portfolio-detail-description">
                 <div className="description"><p>{description}</p></div>
            </div>
        </div>

    );
    }
}












// import React from 'react';

// export default function(props) {
//     return (
//         <div>
//            <h2>Portfolio Detail for {props.match.params.slug}</h2>

//         </div>

//     );
// }