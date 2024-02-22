'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// import hooks
import useMounted from 'hooks/useMounted';

const SignUp = () => {

  const hasMounted = useMounted();
  const auth = getAuth();
  
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();  
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async(e) => {

    if(!isPasswordMatch)
      return

    e.preventDefault()

    try {
      
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("User details : ", userCredential)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error caught in internal catch : ", error.message)
          // ..
        });

    } catch (error) {
      
      console.log("Error caught in external catch : ", error.message)

    }

  }

  const isPasswordMatch = async(e) => {

    e.preventDefault()

    if(password != confirmPassword)
      return false;

  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/logo-primary.svg" className="mb-2" alt="" /></Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form>
              {/* Fullname */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Fullname</Form.Label>
                <Form.Control type="text" name="fullname" value={fullname} onChange={ e => setFullname(e.target.value)} placeholder="Fullname" required="true" />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={ e => setEmail(e.target.value)} placeholder="Enter address here" required="true" />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={ e => setPassword(e.target.value)} placeholder="**************" required="true" />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm-password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)} placeholder="**************" required="true" />
              </Form.Group>

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit" onSubmit={handleSubmit()}>Create Free Account</Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">Already member? Login </Link>
                  </div>
                  <div>
                    <Link href="/authentication/forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp