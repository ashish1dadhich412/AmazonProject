// Home.jsx

import { Col, Container, Row } from 'react-bootstrap';
import { useGetBollyWoodMushQuery, useGetTopFiftyIndiaQuery, useGetTopGlobalQuery, useGetTrendingIndiaQuery } from "../../../redux/api/playlistsApi";
import PlaylistSection from "./PlaylistSection";
import { useSearchParams } from 'react-router-dom';
import { useSearchQuery } from '../../../redux/api/searchApi';
import Loader from "react-js-loader";
import SongCard from '../../SongCard/SongCard';
const Home = () => {
  const { data: top50India, isLoading: top50IndiaLoading, error } = useGetTopFiftyIndiaQuery();
  const { data: trendingIndia, isLoading: trendingIndiaLoading } = useGetTrendingIndiaQuery();
  const { data: topGlobal, isLoading: topGlobalLoading } = useGetTopGlobalQuery();
  const { data: bollyWood, isLoading: bollyWoodLoading } = useGetBollyWoodMushQuery();

  const [searchParam] = useSearchParams();
  const query = searchParam.get('q');

  const { data: searchData, isLoading: searchLoading } = useSearchQuery(query, { skip: !query });



  if (searchLoading) {

    return <Loader type="spinner-default" bgColor={"#ffffff"} color={"#000000"} size={100} />
  }


  if (!searchLoading && query) {
    if (searchData.tracks.items.length < 1) {
      return <h1>No results found</h1>
    }
    else {
      return (
        <Container>
          <h1>Results for {query}....</h1>
          <Row>
            {searchData.tracks.items.map((track, index) => (
              <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                <SongCard trackId={track.id} name={track.name} image={track.album.images[0].url} />
              </Col>
            ))}
          </Row>
        </Container>
      )
    }
  }
  else {
    return (
      <Container>
        <PlaylistSection title="Top 50 India" isLoading={top50IndiaLoading} data={top50India} />
        <PlaylistSection title="Trending in India" isLoading={trendingIndiaLoading} data={trendingIndia} />
        <PlaylistSection title="Top Global Tracks" isLoading={topGlobalLoading} data={topGlobal} />
        <PlaylistSection title="Best Anime Songs 2024" isLoading={bollyWoodLoading} data={bollyWood} />
      </Container>
    );
  }

}



export default Home;
