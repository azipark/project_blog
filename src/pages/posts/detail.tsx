import React from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import PostDetail from '../../components/PostDetail.tsx';


export default function PostPage() {
  return (
    <>
      <Header />
      <PostDetail/>
      <Footer />
    </>
  );
}