import {connect} from 'react-redux'
import {useRef} from "react"
import {Card} from "react-bootstrap"
import {useEffect, useState} from "react"
import { AiOutlineDollarCircle } from "react-icons/ai"
import {AiOutlineClockCircle} from "react-icons/ai";
import activitiesActions from "../redux/actions/activitiesActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Comments from "./CommentsComponent"
import { toast } from "react-toastify"


function Itinerary(props) {
    const hora = <AiOutlineClockCircle />
    const plata = <AiOutlineDollarCircle />
    const [display, setDisplay] = useState(false)
    const [liked, setliked] = useState("") //para que se le cargue la info al prinpio y no se vuelva a cargar
    const [likes, setlikes] = useState("")

    if (!localStorage.getItem("token") && liked === "") {
        setliked(false)
    } //liked cambia si esta likeado o no. si no hay

    if (props.itinerary && liked === "" && likes === "") {
        if(props.user){
        setliked(props.itinerary.likes.some((id) => id === props.user._id))
        }
        setlikes(props.itinerary.likes.length)
    }
    useEffect(() => {
        !props.activities[0] && props.getActivities(props.itinerary._id)
    }, [props.activities])

    const handleClick = () => {
        setDisplay(!display)
        props.getActivities(props.itinerary._id)
        props.getAllComments()
    }
    const comment = useRef()
    
    function handleComment(e){
        e.preventDefault()
        props.postComments(
            props.itinerary._id,
            props.user._id,
            comment.current.value
        )
        comment.current.value = ""
    }

    function handleLike() {
        if (localStorage.getItem("token") && props.user.email) {
            setliked(!liked)
            liked ? setlikes(likes - 1) : setlikes(likes + 1)
            console.log(props.params)
            props.likes(props.user._id, props.itinerary._id, props.params)
        } else {
            toast.warning("Please sign in to like this itinerary", {
            position: toast.POSITION.TOP_CENTER,
            })
        }
    }

    function precio(price) {
        return Array.from({length: price})
    }

    return (
        <div key= {props.itinerary._id} className="itinerarios">
            <Card  className="card-itinerary">
                <Card.Header className="header-itinerary color-texto">{props.itinerary.title}</Card.Header>
                <Card.Body className="card-body" >
                    <div className="cont-card">
                        <div className="usuario">
                            <img key= {props.itinerary._id} className="foto-perfil" variant="top" src={props.itinerary.src} />
                            <p>{props.itinerary.name}</p>
                        </div>
                        <div className="texto-itinerario">
                            <div className="duracion-costo">
                                <div className='horas'>
                                    <p className='hora'>{hora}</p><p className="duracion">{props.itinerary.duration}Hs</p>
                                </div>
                                <div className="precio">
                                    <p className="color-texto">Price:</p> {precio(props.itinerary.price).map((index) => (
                                        <span key={index + 1} className="plata">{plata}</span>
                                    ))}
                                </div>    
                                <div className="like">
                                <p className="corazones" onClick={() => handleLike()}>
                                    {liked ? 
                                    <img className="corazon" src="../assets/like-rojo.png"></img> : 
                                    <img className="corazon" src="../assets/like.png"></img>}
                                </p><p>{likes}</p>
                                </div>
                            </div>
                            <div className="hashtags">
                                {props.itinerary.hashtags.map((hash, index) => (
                                    <div key={hash} className="color-texto hashtag"> #{hash}</div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                    <div className="actividades">
                        {display && (
                            props.activities[0] && props.activities.map(activity => 
                                {if(activity.itinerary._id === props.itinerary._id){
                                    return(
                                        <div className="actividad">
                                            <div
                                                className="activit-img"
                                                style={{ backgroundImage: `url("${activity.image}")` }}
                                            >
                                                <h3 className="activit-titulo">{activity.title}</h3>
                                            </div>
                                        </div>
                                    )
                                }else{
                                    <h2>Under Construction</h2>
                                }
                                }
                            )
                        )}
                    </div>
                    {display && (
                        <div className="formu-comentarios">
                            <div className="titulo-comentarios">
                                <h3 className='comentario-titulo' >Comments</h3>
                            </div>
                            {props.comments && props.comments.map(comment => {
                                if(comment.itinerary === props.itinerary._id){
                                    return(
                                        <div className='fondo-comentario'>
                                            <Comments comment={comment} itinerary={props.itinerary._id} user={props.user} />
                                        </div>
                                    )
                                }
                            })
                            }
                        </div>
                    )
                    } 
                    {display && (
                        <form className="input-comentar" onSubmit={handleComment}>
                            <input
                                ref={comment}
                                type="text"
                                className="comentar-input"
                                placeholder= "Leave your comment here"
                                />
                            <input className='btn-submit btn-comentar' type="submit" value="Submit" />
                        </form>
                    )}   
                    <button onClick= {handleClick} className="btn-ver">
                        {" "}
                        {display ? "View less" : "View more"}
                    </button>
                </Card.Body>
            </Card>
        </div>
    )
}



const mapDispatchToProps = {
    getActivities: activitiesActions.getActivities,
    getAllComments: itinerariesActions.getAllComments,
    postComments: itinerariesActions.postComments,
    likes: itinerariesActions.likes
}
const mapStateToProps = (state) => {
    return {
        comments: state.itinerariesReducer.comments,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
