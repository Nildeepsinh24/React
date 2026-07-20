import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client/react';
import Layout from '../components/Layout';
import ProfileHeader from '../components/ProfileHeader';
import LinkList from '../components/LinkList';
import PortfolioItemManager from '../components/PortfolioItemManager';
import { GET_PROFILE } from '../graphql/queries';

export default function Home() {
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl font-semibold text-gray-500 animate-pulse">Loading Bio-Stack...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl font-semibold text-red-500">Error loading profile data.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Creator Portfolio & Bio-Stack</title>
        <meta name="description" content="A dynamic creator portfolio and bio-stack builder" />
      </Head>
      
      <Layout>
        {/* Section C: GraphQL Bio-Stack implementation */}
        <ProfileHeader profile={data.profile} />
        <LinkList links={data.links} />
        
        {/* Section B: React state & localStorage implementation */}
        <PortfolioItemManager />
      </Layout>
    </>
  );
}
