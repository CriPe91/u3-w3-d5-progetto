import { useEffect, useState } from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const MainSection = () => {
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
    <Container xs={12} md={9} className=" offset-md-2 mainPage">
      <Row>
        <Col xs={9} lg={11} className=" mainLinks d-flex">
          <NavLink href="#">TRENDING</NavLink>
          <NavLink href="#">PODCAST</NavLink>
          <NavLink href="#">MOODS AND GENRES</NavLink>
          <NavLink href="#">NEW RELEASES</NavLink>
          <NavLink href="#">DISCOVER</NavLink>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row className="justify-content-center">
              {rockSongs.map((song) => (
                <Col key={song.id} xs={12} sm={6} md={4} lg={3}>
                  <Card id="card" className="bg-transparent border-0  text-center">
                    <Card.Img className="rounded-3" variant="top" src={song.album.cover_medium} alt="track" />
                    <Card.Body className="bg-transparent">
                      <Card.Title className="text-light fs-6 mb-0">{song.title}</Card.Title>
                      <Card.Text className="mt-0">
                        Artist: <span className="display-5 fs-6">{song.artist.name}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="justify-content-center">
              {popSongs.map((song) => (
                <Col key={song.id} xs={12} sm={6} md={4} lg={3} className="">
                  <Card className="bg-transparent border-0  text-center">
                    <Card.Img className="rounded-3" variant="top" src={song.album.cover_medium} alt="track" />
                    <Card.Body>
                      <Card.Title className="text-light fs-6 mb-0">{song.title}</Card.Title>
                      <Card.Text className="mt-0">
                        Artist: <span className="display-5 fs-6">{song.artist.name}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="justify-content-center mb-5">
              {hipHopSongs.map((song) => (
                <Col key={song.id} xs={12} sm={6} md={4} lg={3} className="">
                  <Card className="bg-transparent border-0  text-center">
                    <Card.Img className="rounded-3" variant="top" src={song.album.cover_medium} alt="track" />
                    <Card.Body>
                      <Card.Title className="text-light fs-6 mb-0">{song.title}</Card.Title>
                      <Card.Text className="mt-0 mb-5">
                        Artist: <span className="display-5 fs-6">{song.artist.name}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MainSection;
