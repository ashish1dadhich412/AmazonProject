// PlaylistSection.jsx
import { Stack, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from 'react-js-loader';
import Carausel from "../../Carousel";

const PlaylistSection = ({ title, isLoading, data }) => {
  if (isLoading) {
    return <Loader type={'spinner-circle'} size={100} color={'#fff'} />;
  }


  return (
    <div className="my-5">
      <Stack direction="horizontal">
        <h1>{title}</h1>
        <LinkContainer className="ms-auto me-4" to={`/playlist/${data.id}`} state={{ data: data}}>
          <Button variant="outline-light" size="sm" className="rounded">View All</Button>
        </LinkContainer>
      </Stack>
      <Carausel data={data.tracks.items} />
    </div>
  );
};

export default PlaylistSection;
