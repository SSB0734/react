import React,{Component} from 'react';
import {LocalForm, Errors, Control} from 'react-redux-form';
import {Modal, ModalHeader, ModalBody, Input,Button,Label,Col,Row } from 'reactstrap';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen});
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
    }
    render(){
        const maxLength= (len) => (val)=>!(val) || (val.length<=len);
        const minLength = (len)=>(val)=> (!val) || (val.length>=len);
        return(
            <>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <div>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="Rating" md={6}><h6>Rating</h6></Label>
                                <Col md={12}>
                                    <Control.select model=".Rating" name="Rating" className="form-control" defaultValue="5"> 
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={6}><h6>Your Name</h6></Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3),maxLength:maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment"><Col md={2}><h6>Comment</h6></Col></Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                    className="form-control"
                                        rows="12"></Control.textarea>
                                </Col>
                                </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 0}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                    </ModalBody>
            </Modal>
            </>
        );
    }
    };

export default CommentForm;
