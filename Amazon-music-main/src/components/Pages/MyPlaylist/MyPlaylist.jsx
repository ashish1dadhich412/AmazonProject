import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPlaylist } from "../../../redux/features/playlistSlice";
import { Col, Container, Row } from "react-bootstrap";
import SongCard from "../../SongCard/SongCard"

import Loader from "react-js-loader";

const MyPlaylist = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
            } else {
                dispatch(loadPlaylist({ userId: user.uid }));
            }
        });

        return () => unsubscribe();
    }, [auth, navigate, dispatch]);

    const { playlist, loading } = useSelector((state) => state.playlist);

    if(loading) {
        return <Loader type="spinner-default" bgColor={"#ffffff"} color={"#000000"} size={100} />
    }
    

    if (!loading && playlist.length < 1) {
        
        return <div>No tracks added to the playlist</div>;
    }
  
    console.log(playlist);

    return (
        <Container>
            <h1>My Playlist</h1>
            <Row>
                {playlist.map((track, index) => (
                    <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <SongCard trackId={track.trackId} name={track.trackName} image={track.image} />
                    </Col>
                )) }
            </Row>
        </Container>
    );
};

export default MyPlaylist;
