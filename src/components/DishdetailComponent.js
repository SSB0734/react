import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';


    function RenderDish({dish}){
		if(dish!=null){
			return( 
				<Card>
					<CardImg top src={dish.image} alt={dish.name}/>
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

   function RenderComments({comments}){
        const item = comments.map((comment)=>
                <div className="list-unstyled">
                    <div tag="li">{comment.comment}</div>
                    <br />
                    <div tag="li">--{comment.author}, {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                    <br />
                </div>
        );
        return(
        <div>{item}</div>
        );
    }

    const DishDetail = (props) =>{//or const DishDetail = function DishDetail(props){} or ... simply function DishDetail(props){}
        if(props.dish!=null){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish} /></div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments = {props.dish.comments}/>
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