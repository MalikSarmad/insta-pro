import React from 'react'

import { Container, UserImage, UserImageWrapper, UserName } from './styles'

const PostHeader = ({userData}) => {
  
  const {user, userImageURL} = userData;

  return (
    <Container>
        <UserImageWrapper>
            <UserImage source={
              { uri: userImageURL }
            }/>
        </UserImageWrapper>
        <UserName>{`${user}`}</UserName>
    </Container>
  )
}

export default PostHeader