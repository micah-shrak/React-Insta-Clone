import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import moment from 'moment';
import CommentSection from '../CommentSection/CommentSection';

function Post(props) {
	return (
		<div className="post-content">
			<div className="post-header">
				<PostHeader
					thumbnailUrl={props.post.thumbnailUrl}
					username={props.post.username}
				/>
			</div>
			<div className="post-img">
				<img src={props.post.imageUrl} />
			</div>
			<div className="likes-post">
				<p>{props.post.likes} likes</p>
			</div>
			<CommentSection comments={props.post.comments} />
			<div className="time-stamp">
				<p>{props.post.timestamp}</p>
			</div>
		</div>
	);
}

Post.propTypes = {
	username: PropTypes.string,
	thumbnailUrl: PropTypes.string,
	imageUrl: PropTypes.string,
	likes: PropTypes.number,
	timestamp: PropTypes.string,
};

export default Post;
