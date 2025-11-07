import React from 'react';
import Header from '../../components/Header.tsx';
import PostList from '../../components/PostList.tsx';
import Footer from '../../components/Footer.tsx';

export default function PostPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  )
}