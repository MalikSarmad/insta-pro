import React, { useEffect, useState } from 'react'

import { Container, List } from './styles'

import Post from '../../components/Post'

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch('https://pixabay.com/api/?key=29931495-a957a817cdb7e55ff424a3634&q=yellow+flowers&image_type=photo&pretty=true')
        .then(response => response.json())
        .then(response => {
            setPosts(response.hits);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        getPosts();
    }, []);

  return (
    <Container>
        <List data={posts}
              keyExtractor={({id}) => id }
              renderItem={({item: post}) => <Post post={post}/>}
        />
    </Container>
  )
}

export default Home