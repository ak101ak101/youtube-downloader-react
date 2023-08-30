import axios from "axios";
import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  useEffect(() => {
    document.title = 'YouTube Video Downloader - iDesktop.TV';
  }, []);
  const [value, setValue] = useState('mp4');

 const handleChange = (event) => {

   setValue(event.target.value);

 };
  const inputUrlRef = useRef();
  // const [urlResult, setUrlResult] = useState(null);
  let serverURL = 'http://142.93.185.172:4000';
  const handleSubmit = (e) => {
    e.preventDefault()
    const youtubeID = inputUrlRef.current.value;
console.log(inputUrlRef.current.value+"hh");
let query = youtubeID;
    const options = {
      method: 'get',
      url: `http://142.93.185.172:4000/download${value}`,
      headers: {

      },
      params: {
        url: youtubeID
      }
    }
    var a = document.createElement('a');
    a.href = `${serverURL}/download${value}?url=${query}`;
    a.setAttribute('download', '');
  a.click();
    axios(options)
      .then((res) => {
        if(res.status === 200) {
        
        } else if(res.status === 400) {
          alert('Invalid url');
        }
      })
      .catch(err => console.log(err))

   

  }

  return (


    
    <div className="app row-xl-6 flex  container-fluid">
       <Navbar fixed='top'  expand="xl" bg="dark" variant="dark" className="bg-dark"  style={{backgroundSize: "100", backgroundColor: "#A92117"}}>
      <Container>
        <Navbar.Brand href="#home">idesktop.tv</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Youtube to mp3</Nav.Link>
            <NavDropdown title="Other Downloaders" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Threads</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              About us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <span className="logo">youtube2mp4</span> */}
      <section className="content">
        <h1 className="content_title">YouTube Video Downloader</h1>
        <p style={{color:"#FFFFFF"}} className="content_description">
          Download YouTube videos into mp4 in just a few clicks!
        </p>
        

        <form onSubmit={handleSubmit} className="form">
          <input ref={inputUrlRef} placeholder="Paste a Youtube video URL link..." className="form_input" type="text" />
          <div>

<label style={{color:"#FFFFFF"}} >

 Select format  

  <select class="form-select" aria-label="Default select example" value={value} onChange={handleChange}>

    <option value="mp4">mp4-360p</option>

    <option value="mp4720">mp4-720p</option>

    <option value="mp41080">mp4-1080p</option>

  </select>

</label>


</div>
<br></br>
          <button type="submit" className="form_button">Download</button>
        </form>

        {/* {urlResult ? <a target='_blank' rel="noreferrer" href={urlResult} className="download_btn">Download mp4</a> : ''} */}
        
      </section>

<div  class="row container-fluid">
<section style={{overflowWrap: 'anywherebackground:rgb(8, 0, 58) none repeat scroll 0% 0% / auto padding-box border-box', display: 'block', boxSizing: 'border-box', background: 'rgb(8, 0, 58) none repeat scroll 0% 0% / auto padding-box border-box'}}>
    <div style={{maxWidth: '1140px', color: 'rgb(255, 255, 255)', background: 'rgb(8, 0, 58) none repeat scroll 0% 0% / auto padding-box border-box', paddingBottom: '48px', paddingTop: '48px', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '15px', paddingRight: '15px', width: '100%', boxSizing: 'border-box'}}>
        <div style={{boxSizing: 'border-box'}}>
            <h2 style={{textAlign: 'center', marginBottom: '16px', flex: '0 0 100%', maxWidth: '100%', paddingLeft: '15px', paddingRight: '15px', position: 'relative', width: '100%', fontSize: '32px', color: 'rgb(255, 255, 255)', fontFamily: 'Nunito, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', fontWeight: 500, lineHeight: '38.4px', marginTop: '0px', boxSizing: 'border-box'}}>
                How to Download YouTube Videos in Multiple Formats</h2>
            <ol style={{marginTop: '0px', marginBottom: '16px', boxSizing: 'border-box'}}>
                <li style={{boxSizing: 'border-box'}}>If you wish to download YouTube videos in different formats, such as HD, MP3, or MP4..</li>
                <li style={{boxSizing: 'border-box'}}>Alternatively, you can try Ummy, another well-known YouTube video downloader. Simply click on the "HD via Ummy" or "MP3 via Ummy" buttons located below your preferred video.</li>
                <li style={{boxSizing: 'border-box'}}>By installing the YouTube downloader application on your computer, you will discover a "Download" button beneath each video on YouTube.</li>
                <li style={{boxSizing: 'border-box'}}>This downloading method functions seamlessly on both Mac OS and all Windows versions, enabling you to effortlessly download YouTube videos.</li>
            </ol>
        </div>
    </div>
</section>
</div>
      
      <div class="row  flex myWrap ">
      <footer className="page-footer footer-bs  font-small blue pt-5" style={{backgroundColor:"black"}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"  style={{color:"#FFFFFF"}}  >Footer Content</h5>
                <p style={{color:"#FFFFFF"}}  >Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                {/* <h5 className="text-uppercase" style={{color:"#FFFFFF"}} >Links</h5>
                <ul className="list-unstyled">
                    <li><a  href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul> */}
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                {/* <h5 className="text-uppercase" style={{color:"#FFFFFF"}} > Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul> */}
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3"><p  style={{color:"#FFFFFF"}} >© 2023 Copyright:  </p>
        <a href=""> YouTube Video Downloader - iDesktop.TV
</a>
    </div>

</footer>
</div>
    </div>


  )
}

export default App
