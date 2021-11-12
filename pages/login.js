//import styles from '../styles/LiftOffLlc.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Card } from 'react-bootstrap';
import Topbar from '../components/Topbar';
import styles from '../styles/Login.module.css';

export default function Login() {
    return (<>
        <Topbar/>
        <div class='container mt-3'>
            <Card className={styles.card}>
                <Card.Title className={styles.cardtitle}>Welcome back!!!</Card.Title>
                <Form className="m-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><Card.Title>Email address</Card.Title></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><Card.Title>Password</Card.Title></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
        </>
    )
}
