import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderDish({dish}){
		if(dish!=null){
			return( 
				<Card>
					<CardImg top src={baseUrl+dish.image} alt={dish.name}/>
					<CardBody>
						<cardTitle>
							{dish.name}
						</cardTitle>
						<CardText>
							{dish.description}
						</CardText>
					</CardBody>
				</Card>
			);
		}
		else{
			return(
				<div></div>
			);
		}
    }

   function RenderComments({comments, postComment, dishId}){
        const item = comments.map((comment)=>
                <div className="list-unstyled">
                    <div tag="li">{comment.comment}</div>
                    <br />
                    <div tag="li">--{comment.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                    <br />
                </div>
        );
        return(
        <>
            <div>{item}
            </div>
            <CommentForm dishId={dishId} postComment={postComment}/>
        </>
        );
    }

    const DishDetail = (props) =>{//or const DishDetail = function DishDetail(props){} or ... simply function DishDetail(props){}
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish} /></div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments = {props.comments} postComment={props.postComment}
                     dishId={props.dish.id}/>
                </div>
            </div>
            </div>
        );
        }
        else{
            return(
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish} /></div>
                    <div className="col-12 col-md-5 m-1"></div>
                    
                </div>
                </div>
            );
        }
    }

export default DishDetail;