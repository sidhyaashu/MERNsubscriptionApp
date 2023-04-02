import {Modal as Modall,Button,InputGroup,FormControl} from 'react-bootstrap'
import {useState } from 'react'

interface ModalProps {
    text:String;
    variant:"primary" | "secondary" | "danger"
}

const Modal = ({text,variant}:ModalProps) => {
    const [show,setShow] = useState(false)
    const handleClose =()=>setShow(false)
    const handleShow =()=>setShow(true)


  return (
    <>
      <Button variant={variant} onClick={handleShow} >
        {text}
      </Button>

      <Modall show={show} onHide={handleClose} >
        <Modall.Header>
            <Modall.Title>
                {text}
            </Modall.Title>
        </Modall.Header>
        <Modall.Body>
            <InputGroup>
            <InputGroup.Text>Email</InputGroup.Text>
            <FormControl
            type='email'
            />
            </InputGroup>
            <br />
            <InputGroup>
            <InputGroup.Text>Password</InputGroup.Text>
            <FormControl
            type='password'
            />
            </InputGroup>
        </Modall.Body>

        <Modall.Footer  >
            <Button variant='danger' onClick={handleClose}>Close</Button>
            <Button variant='primary' >{text}</Button>
        </Modall.Footer>
      </Modall>
    </>
  )
}

export default Modal
