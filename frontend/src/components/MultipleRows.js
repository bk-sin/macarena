import Slider from "react-slick";
import {Card} from "react-bootstrap";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";


function MultipleRows (props) {
    !props.cities[0] && props.getCities()
    
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        speed: 900,
        rows: 2,
        slidesPerRow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                speed: 900,
                rows: 4,
                slidesPerRow: 1,
            }
        }
    ]
    };
    return (
        <div>
            <Slider {...settings} >
                {props.cities.length > 0 && props.cities.map((city, index) => {
                    if(index < 12){
                        return (
                            <div key={city.name} className="tarjetass">
                                <Card className="mt-2 tarjeta">
                                    <Card.Img
                                        variant="top"
                                        src={city.src}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {city.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    }    
                })}
            </Slider>
        </div>
    );
    
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MultipleRows)