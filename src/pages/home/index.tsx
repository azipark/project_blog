import React from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import PostList from '../../components/PostList.tsx';

export default function Home() {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}