import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";

const MainPage = () => {
  const dispatch = useDispatch();
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  const fetchSongs = async (artistName, setSongs) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (response.ok) {
        const { data } = await response.json();
        setSongs(data.slice(0, 4));
      } else {
        throw new Error("Error fetching songs");
      }
    } catch (err) {
      console.error("Error fetching songs:", err);
    }
  };

  useEffect(() => {
    fetchSongs("queen", setRockSongs);
    fetchSongs("katyperry", setPopSongs);
    fetchSongs("eminem", setHipHopSongs);
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>

      <Container fluid>
        <Row className="my-5 justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h2 className="text-white">Rock Classics</h2>
            <Row className="justify-content-center">
              {rockSongs.map((song) => (
                <Col key={song.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={song.album.cover_medium} alt="track" />
                    <Card.Body>
                      <Card.Title>{song.title}</Card.Title>
                      <Card.Text>Artist: {song.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="my-5 justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h2 className="text-white">Pop Culture</h2>
            <Row className="justify-content-center">
              {popSongs.map((song) => (
                <Col key={song.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={song.album.cover_medium} alt="track" />
                    <Card.Body>
                      <Card.Title>{song.title}</Card.Title>
                      <Card.Text>Artist: {song.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="my-5 justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h2 className="text-white">HipHop</h2>
            <Row className="justify-content-center">
              {hipHopSongs.map((song) => (
                <Col key={song.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={song.album.cover_medium} alt="track" />
                    <Card.Body>
                      <Card.Title>{song.title}</Card.Title>
                      <Card.Text>Artist: {song.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
