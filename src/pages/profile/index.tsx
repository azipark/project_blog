import React from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import Profile from '../../components/Profile.tsx';
import PostList from '../../components/PostList.tsx';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Profile />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  )
}