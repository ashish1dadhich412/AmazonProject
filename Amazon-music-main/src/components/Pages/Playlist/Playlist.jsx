import { Card, Image, Stack, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styles from './Playlist.module.css'

const Playlist = () => {
  const { state } = useLocation();

  const { data } = state

  if (!data) { 
    return (
      <div>Loading....</div>)
  }

  return (
    <div>
      <Card className='mx-5' style={{ backgroundColor: '#15181c' }} >
        <Stack direction="horizontal" className='p-5' gap={3}>
          <Image src={data.images[0].url} height={200} width={200} className=' rounded' />
          <div>
            <p className={`text-white fw-bold m-0 ${styles.text_large}`} >{data.name}</p>
            <p className='text-secondary ms-2'>{data.description}</p>
          </div>
        </Stack>
      </Card>

      <Table borderless
        className='mx-auto my-4'
        style={{ width: '90%' }}
      >
        <thead className={styles.border}>
          <tr >
            <th >#</th>
            <th >Title</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody >
          {data.tracks.items.map((item, index) => (
            <tr key={index} >
              <td>{index + 1}</td>
              <td className={styles.td}>
                <Stack direction="horizontal" gap={3}>
                  <Link to={`/track/${item.track.id}`} className='text-decoration-none'>
                    <Image src={item.track.album.images[0]?.url} height={50} width={50} className='rounded' />
                  </Link>
                  <div>
                    <Link to={`/track/${item.track.id}`} className='text-white fw-bold m-0 text-decoration-none'>{item.track.name}</Link>
                    <p className='text-secondary '>{item.track.artists[0].name}</p>
                  </div>
                </Stack>
              </td>
              <td className={styles.td}>
                {item.track.album.name}
              </td>
              <td className={styles.td_release_date}>
                {item.track.album.release_date}
              </td>
              <td>
                {Math.floor(item.track.duration_ms / 60000)}:{('0' + Math.floor((item.track.duration_ms % 60000) / 1000)).slice(-2)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Playlist;
