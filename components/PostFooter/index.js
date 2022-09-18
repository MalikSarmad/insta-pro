import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, 
         ButtonRow, 
         Separator, 
         Row, 
         PostText, 
         UserName,
         LikesText } from './styles'

const PostFooter = ({post}) => {
  const {user, tags, likes} = post 
  return (
    <Container>
        <ButtonRow>
            <Ionicons size={24} name="heart" color="#fff"/>
        </ButtonRow>
        <Separator />
        <Row>
          <Ionicons size={12} name="heart" color="pink"/>
          <LikesText>{`${likes}`} likes</LikesText>
        </Row>
        <Row>
            <PostText>
                <UserName>{user.toLowerCase()}</UserName>
                {` ${tags}`}
            </PostText>
        </Row>
    </Container>
  )
}

export default PostFooter