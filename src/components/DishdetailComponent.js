import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    renderDish(dish){
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

   renderComments(comments){
        const item = comments.map((comment)=>
                <div className="list-unstyled">
                    <div tag="li">{comment.comment}</div>
                    <br />
                    <div tag="li">{comment.author},{comment.date}</div>
                    <br />
                </div>
        );
        return(
        <div>{item}</div>
        );
    }
    
    /*if(this.props.dish!=null){
        let item = this.props.dish.comments.map((comment)=>{
            return(
                <div className="list-unstyled">
                    <h4>Comments</h4>
                    <div tag="li">{comment.comment}</div>
                    <div tag="li">{comment.author}</div>
                </div>
            );
        });*/


    render(){
        if(this.props.dish!=null){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish.comments)}</div>
                
            </div>
        );
        }
        else{
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                    <div className="col-12 col-md-5 m-1"></div>
                    
                </div>
            );
        }
    }
}

export default DishDetail;