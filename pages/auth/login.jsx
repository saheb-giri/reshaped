import React from 'react'
import { Button, Container, FormControl, Frame, Placeholder, Reshaped, Stack, Text, TextField } from 'reshaped'

const LoginPage = () => {
  return (
    <div>
      <Reshaped theme="quizzer">
        <Container width="480px">
          <Text align="center" variant="title-1">Sign in</Text>
          <Text align="center" variant="body-1" color="neutral-faded">
            Login into your Quizrr account
          </Text>

          <Stack gap="4">
            <FormControl>
              <FormControl.Label>Email Address</FormControl.Label>
              <TextField name="email" type="email" placeholder="name@address.com" />
              <FormControl.Error>Email is incorrect</FormControl.Error>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <TextField name="password" type="password" placeholder="Enter your password" />
              <FormControl.Error>Password is incorrect</FormControl.Error>
            </FormControl>
            <Button color="primary" onClick={() => { }} size="medium">
              Sign In
            </Button>
          </Stack>
          <Text>Don&apos;t have an account yet? Sign up.</Text>
        </Container>


      </Reshaped>
    </div>
  )
}


export default LoginPage