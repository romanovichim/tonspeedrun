//import { useState } from 'react'
//import './App.css'
import './custom.css'
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Card,Button,Row,Col,Image, Modal, ModalProps, Stack } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { JSX } from 'react/jsx-runtime';
import { check } from './utils/check.ts';

//https://react-bootstrap.github.io/docs/components/modal/
//data-bs-theme="dark"

function MyVerticallyCenteredModal1(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-white">
        Quest #1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h4 className="text-white">🚩 Challenge 1: Simple NFT Deploy</h4>
        <p className="text-white">
          🎫 Mint simple NFT on TON . Let's look at smart contracts of the NFT standard in TON. Get information about the deployed collection in the TON network. And send a message to the collection and thus deploy the NFT  
        </p>
        <p className="text-white">🌟 The final deliverable will be NFT minted on the TON testnet.</p>

        <Button href="https://github.com/romanovichim/TONQuest1" variant="secondary" size="lg">
        Start Quest!
        </Button>
      </Modal.Body>
      <Modal.Footer className="bg-dark ">
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-white">
        Quest #2
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h4 className="text-white">🚩 Challenge 2: Chatbot Contract</h4>
        <p className="text-white">
        🎫 Сompile, test and deploy chatbot smart contract to the test network. Getting Acquainted with the TON Actor Model
        </p>
        <p className="text-white">🌟  The final deliverable will be pipeline for smart contract development.</p>

        <Button href="https://github.com/romanovichim/TONQuest2" variant="secondary" size="lg">
        Start Quest!
        </Button>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MyVerticallyCenteredModal3(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-white">
        Quest #3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
      <h4 className="text-white">🚩 Challenge 3: Jetton Vending Machine</h4>
        <p className="text-white">
        🤖 Smart contracts are kind of like "always on" vending machines that anyone can access. Let's make a decentralized, digital currency (an Jetton Standart token).
        </p>
        <p className="text-white">🌟  The final deliverable will be ICO contract deployed to the testnet.</p>

        <Button href="https://github.com/romanovichim/TONQuest3" variant="secondary" size="lg">
        Start Quest!
        </Button>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MyVerticallyCenteredModal4(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-white">
        Quest #4
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
      <h4 className="text-white">🚩 Challenge 4: Lottery/Raffle</h4>
        <p className="text-white">
        🎰 The final deliverable will be the skill of working with the balance of a smart contract and, of course raffle contract.
        </p>
        <p className="text-white">🌟  Play raffle and test - test a lot of smart contracts.</p>

        <Button href="https://github.com/romanovichim/TONQuest4" variant="secondary" size="lg">
        Start Quest!
        </Button>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-white">
        Quest #5
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
      <h4 className="text-white">🚩 Challenge 5: Create UI to interact with the contract in 5 minutes</h4>
        <p className="text-white">
        🎫 Let's take an open source contract and build a simple website that will allow you to log in, send a transaction to the contract and see the result of the transaction by requesting the Get method.
        </p>
        <p className="text-white">📺 Get a full-fledged web 3 application with a backend in the form of a smart contract.</p>

        <Button href="https://github.com/romanovichim/TONQuest5" variant="secondary" size="lg">
        Start Quest!
        </Button>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal6(props: JSX.IntrinsicAttributes & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-white">
        Quest #6
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
      <h4 className="text-white">🚩 Challenge 6: Analyzing NFT sales on the Getgems marketplace</h4>
        <p className="text-white">
        🎫 Analyzing NFT sales on the Getgems marketplace. We will get information about sales through get-methods of smart contracts
        </p>
        <p className="text-white">🌟 Script that will return the latest sales from the marketplace and distinguish between types of sales.</p>

        <Button href="https://github.com/romanovichim/TONQuest6" variant="secondary" size="lg">
        Start Quest!
        </Button>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function App() {
  //Quest #1 state
  const [modalShow1, setModalShow1] = React.useState(false);

  //Quest #2 state
  const [modalShow2, setModalShow2] = React.useState(false);

  //Quest #3 state
  const [modalShow3, setModalShow3] = React.useState(false);

  //Quest #4 state
  const [modalShow4, setModalShow4] = React.useState(false);

  //Quest #5 state
  const [modalShow5, setModalShow5] = React.useState(false);

  //Quest #6 state
  const [modalShow6, setModalShow6] = React.useState(false);

  const wallet = useTonWallet();

  const [flag, setFlags] = React.useState(false);
  const rawAddress = wallet?.account.address;

    useEffect(() => {
    if(rawAddress){ 
      const getTxes = async () => {
        const flag = await check();
        setFlags(flag);
      };
    
      getTxes(); // run it, run it

      return () => {
        // this now gets called when the component unmounts
      };
    }
  }, [rawAddress]);

  //{flag ? (
 //   <p className="text-white">flag</p>
 // ) : (
 //   <p className="text-white">dno flasg</p>
 // )}    


  return (
    <div className="bg-dark">
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#292c33" }} data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <TonConnectButton/>
    </Container>
  </Navbar >
    <div className="p-5 mb-4 bg-border " style={{ backgroundColor: "#23262d" }} >
    <Container fluid className="py-2 text-center" data-bs-theme="dark">
      <p>Learn how to build on TON blockchain</p>
      <h1 style={{ fontSize: "60px", fontWeight: "340"  }} className="text-white">Speedrun TON </h1>
      <br /> 
      <p className="circle-singleline">1</p> 
      <p className="text-muted mt-2">Watch this <a href="https://www.youtube.com/watch?v=XgzHmV_nnpY">quick video</a> as an Intro to The Open Network.</p>
      <p className="circle-singleline">2</p>  
      <p className="text-muted mt-2">Download <a href="https://tonkeeper.com/">wallet</a>, you will need it to complete quests </p>
      <p className="circle-singleline">3</p>
      <p className="text-muted mt-2">When you are ready to test your knowledge, Speed Run TON:</p>
      
    </Container>
    </div>
    <div  data-bs-theme="dark">
    <Container>
    <Card className="mb-2">
      <Card.Body>
        <Row>
        <Col md={8}>
          <Card.Subtitle className="mb-2 text-muted">Quest #1</Card.Subtitle>
            <Card.Title className="text-white" style={{ fontWeight: "430"  }}>Deploy NFT Example</Card.Title>
            <Card.Text>
            🎫 Mint simple NFT on TON . Let's look at smart contracts of the NFT standard in TON. Get information about the deployed collection in the TON 💎 network. And send a message to the collection and thus deploy the NFT 👑
            </Card.Text>
            
            <Button variant="primary" onClick={() => setModalShow1(true)} >
                Start quest
            </Button>

            <MyVerticallyCenteredModal1
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />

        </Col>
        <Col md={4} className="text-center justify-content-center align-self-center">
          <Image src="https://user-images.githubusercontent.com/18370291/260819282-23deae76-a054-44d7-be5d-ac39bdc9c224.svg" rounded />
        </Col>
        </Row>
      </Card.Body>
    </Card>

    <Card className="mb-2">
      <Card.Body>
        <Row>
        <Col md={8}>
          <Card.Subtitle className="mb-2 text-muted">Quest #2</Card.Subtitle>
            <Card.Title className="text-white" style={{ fontWeight: "430"  }}>Chatbot contract Quest</Card.Title>
            <Card.Text>
            📬 Smart contracts in TON communicate with each other by messages, which leads to interesting chains of smart contracts. It's time to plunge into the world of endless messages.Сompile, test 🔨 and deploy chatbot smart contract to the test network.
            </Card.Text>
          
            <Button variant="secondary" onClick={() => setModalShow2(true)}>
                Start quest
            </Button>

            <MyVerticallyCenteredModal2
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />

        </Col>
        <Col md={4} className="text-center justify-content-center align-self-center">
          <Image src="https://user-images.githubusercontent.com/18370291/260822185-ac39371e-5c69-442b-9fde-62b2176fd62e.svg" rounded />
        </Col>
        </Row>
      </Card.Body>
    </Card>

    <Card className="mb-2">
      <Card.Body>
        <Row>
        <Col md={8}>
          <Card.Subtitle className="mb-2 text-muted">Quest #3</Card.Subtitle>
            <Card.Title className="text-white" style={{ fontWeight: "430"  }}>Vending Machine Jetton Quest</Card.Title>
            <Card.Text>
            🤖 Smart contracts are kind of like "always on" vending machines that anyone can access. Let's make a decentralized, digital currency (an Jetton Standart token). 
            </Card.Text>

            <Button variant="secondary" onClick={() => setModalShow3(true)}>
                Start quest
            </Button>

            <MyVerticallyCenteredModal3
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            />

        </Col>
        <Col md={4} className="text-center justify-content-center align-self-center">
          <Image src="https://user-images.githubusercontent.com/18370291/260822507-d7543ce1-e754-412d-abbe-e65b0a3d0de7.svg" rounded />
        </Col>
        </Row>
      </Card.Body>
    </Card>
    </Container>

    <div className="p-5 mb-4" style={{ backgroundColor: "#23262d" }}>
    <Container fluid className="py-2 " >
      <h1 style={{ fontSize: "40px", fontWeight: "300"  }} className="text-white">This is the middle of the game</h1>
      <p className="text-muted mt-2">To access the next quests, you need to go through the first three and log in with the wallet you used in the walkthrough.</p>
      <p className="text-muted ">I will also welcome your <a href="https://forms.gle/5K4PFdQuvt57swV7A">feedback</a>.</p>
      
    </Container>
    </div>    

    <Container>
    <Card className="mb-2">
      <Card.Body>
        <Row>
        <Col md={8}>
          <Card.Subtitle className="mb-2 text-muted">Quest #4</Card.Subtitle>
            <Card.Title className="text-white" style={{ fontWeight: "430"  }}>Raffle Quest</Card.Title>
            <Card.Text>
            🎰 Randomness is tricky on a public deterministic blockchain. It is important for a developer to know how to make a random that cannot be picked up. In this challenge you will play with raffle contract 💵 and test it. 
            </Card.Text>
            {flag ? (
               <Button variant="secondary" onClick={() => setModalShow4(true)}>
               Start quest
              </Button>
             ) : (
              <Button variant="secondary" onClick={() => setModalShow4(true)} disabled>
              Locked
              </Button>
             )}    
            <MyVerticallyCenteredModal4
              show={modalShow4}
              onHide={() => setModalShow4(false)}
            />

        </Col>
        <Col md={4} className="text-center justify-content-center align-self-center">
          <Image src="https://user-images.githubusercontent.com/18370291/260822773-f8fc1940-54f3-439c-b2c7-f0ab0afa3d61.svg" rounded />
        </Col>
        </Row>
      </Card.Body>
    </Card>

    <Card className="mb-2">
      <Card.Body>
        <Row>
        <Col md={8}>
          <Card.Subtitle className="mb-2 text-muted">Quest #5</Card.Subtitle>
            <Card.Title className="text-white" style={{ fontWeight: "430"  }}>TonConnect Quest</Card.Title>
            <Card.Text>
            🧙 Let's take an open source contract and build a simple website that will allow you to log in 💻, send a transaction to the contract and see the result of the transaction by requesting the Get method.
          </Card.Text>
          {flag ? (
            <Button variant="secondary" onClick={() => setModalShow5(true)}>
            Start quest
            </Button>
           ) : (
            <Button variant="secondary" onClick={() => setModalShow5(true)} disabled>
                Locked
            </Button>
          )}   
            

            <MyVerticallyCenteredModal5
              show={modalShow5}
              onHide={() => setModalShow5(false)}
            />

        </Col>
        <Col md={4} className="text-center justify-content-center align-self-center">
          <Image src="https://user-images.githubusercontent.com/18370291/260822875-74fe6496-c0a1-4617-9210-039872398d06.svg" rounded />
        </Col>
        </Row>
      </Card.Body>
    </Card>

    <Card className="mb-2">
      <Card.Body>
        <Row>
        <Col md={8}>
          <Card.Subtitle className="mb-2 text-muted">Quest #6</Card.Subtitle>
            <Card.Title className="text-white" style={{ fontWeight: "430"  }}>Marketplace Analyzer Quest</Card.Title>
            <Card.Text>
            🔮 Gigabytes of information contain a lot of insights, in order to understand how to find them, you need to be able to collect data from the blockchain. Script that will return 📡 the latest sales from the marketplace and distinguish between types of sales.
            </Card.Text>
            {flag ? (
              <Button variant= "secondary" onClick={() => setModalShow6(true)}>
              Start quest
            </Button>
            ) : (
              <Button variant= "secondary" onClick={() => setModalShow6(true)} disabled>
                Locked
              </Button>
            )}  
            

            <MyVerticallyCenteredModal6
              show={modalShow6}
              onHide={() => setModalShow6(false)}
            />

        </Col>
        <Col md={4} className="text-center justify-content-center align-self-center">
          <Image src="https://user-images.githubusercontent.com/18370291/260823137-b92997e2-c9e9-4029-b549-915769166ba6.svg" rounded />
        </Col>
        </Row>
      </Card.Body>
    </Card>
    </Container>
    


    <div className="p-2" > 
    <Container fluid className="py-1 text-center" >
    <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
    <p className="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg> </p>
    <p className="text-muted"><a href="https://github.com/romanovichim/">Github</a></p>
    <p className="text-muted">Built with </p>
    <p className="text-muted">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>
    </p>
    <p className="text-muted">by</p>
    <p className="text-muted"><a href="https://t.me/ton_learn">ton_learn</a></p>
    </Stack>
    </Container>  

    </div>    


    </div>
    </div>
  )
}

export default App


