import React from 'react'

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';

import { Container, ImageWrapper, PostImage } from './style'

const Post = ({post}) => {
    const {previewURL, user, userImageURL} = post;

  return (
    <Container>
        <PostHeader userData={{user, userImageURL}}/>
        <ImageWrapper>
            <PostImage source={
                { uri: previewURL }
            } />
        </ImageWrapper>
        <PostFooter post={post}/>
    </Container>
  )
}

export default Post