import { Button, Card, Image, Stack, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTrackQuery } from "../../../redux/api/trackApi";
import Loader from "react-js-loader";
import Stars from "../../SongCard/Rating/Stars";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { getAuth } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../../redux/features/playlistSlice";
import { toast } from 'react-toastify'
import './Trackpage.css'

const Trackpage = () => {
    const { id } = useParams();
    const { isLoading, data } = useGetTrackQuery(id);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch();

    if (isLoading) {
        return <Loader type={'spinner-circle'} size={100} color={'#fff'} />;
    }

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handlePlayList = () => {
        if (!auth.currentUser) {
          navigate('/login')  
        }
        else {
          dispatch(setPlaylist({ userID: auth.currentUser.uid, track: {'trackId':id, 'trackName': data.name, 'image':data.album.images[0].url} }));
          toast.success("Track added to playlist")
        } 
    }
    console.log(data)
    return (
        <div className="mx-5">
            <Card style={{ backgroundColor: '#15181c' }}>
                <Stack direction="horizontal" className='p-5' gap={3}>
                    <Image src={data.album.images[0].url} height={200} width={200} className='rounded' />
                    <div>
                        <p className='text-white fw-bold m-0 text-large' >{data.name}</p>
                        <Stack direction="horizontal" className="ms-2 flex-wrap" gap={1}>
                            <p style={{ color: '#ffffffd9' }} className='m-0'>{data.album.name} &bull; </p>
                            <p style={{ color: '#ffffffd9' }} className='m-0'>{data.album.release_date.slice(0, 4)} &bull; </p>
                            <p style={{ color: '#ffffffd9' }} className='m-0'>{Math.floor(data.duration_ms / 60000)}:{('0' + Math.floor((data.duration_ms % 60000) / 1000)).slice(-2)}  </p>
                            <div className="ms-auto">
                                <Stars rating={data.popularity} />
                            </div>
                        </Stack>
                    </div>
                </Stack>
            </Card>
            <div className="my-5">
                <Stack direction="horizontal" className="my-3" gap={3}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Play Preview</Tooltip>}
                    >
                        <Button variant="outline-light" className="p-0 border-0" onClick={handlePlayPause}>
                            {isPlaying ? <FaPauseCircle size={50} /> : <FaPlayCircle size={50} />}
                        </Button>
                    </OverlayTrigger>
                    <audio ref={audioRef}>
                        <source src={data.preview_url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to Library</Tooltip>}
                    >
                        <Button variant="outline-light" className="p-0 border-0" onClick={handlePlayList}>
                            <CgPlayListAdd size={50} />
                        </Button>
                    </OverlayTrigger>
                </Stack>
                <p className="m-0" style={{ color: '#ffffffd9' }}>Artists</p>
                {data.artists.map((artist, index) => (
                    <p className="fs-4" key={index}>{artist.name}</p>
                ))}
            </div>
        </div>
    );
};

export default Trackpage;
