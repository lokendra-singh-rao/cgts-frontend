'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { useState } from 'react';

const SignIn = () => {

  const hasMounted = useMounted();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //Sign in function
  const handleSubmit = () => {
  
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
              <p className="mb-6">Please enter login credentials</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form>
                {/* Username */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Email {email}</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email here" value={email} onChange={ e => setEmail(e.target.value)} required="true" />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password {password}</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" value={password} onChange={ e => setPassword(e.target.value)} required="true" />
                </Form.Group>

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <Button variant="primary" onSubmit={handleSubmit()} type="submit">Sign In</Button>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link href="/authentication/sign-up" className="fs-5">Create An Account </Link>
                    </div>
                    <div>
                      <Link href="/authentication/forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                    </div>
                  </div>
                </div>
              </Form>}


          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn