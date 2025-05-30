import React from 'react';
import Layout from '../../components/layout/Layout';
import { Building2, Users, Shield, Trophy } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title></title>
        <meta name="description" content={t('about_description')} />
      </Helmet>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-[#1A2531] py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                {t('about_cpromart')}
              </h1>
              <p className="text-lg text-gray-300">
                {t('connecting_quality_construction_companies')}
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-12 text-3xl font-bold text-gray-900">{t('our_mission')}</h2>
              <p className="text-lg text-gray-600">
                {t('our_mission_description')}
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B546A]">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Quality Companies</h3>
                <p className="text-gray-600">
                  We carefully vet and showcase the best construction companies.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B546A]">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{t('easy_connection')}</h3>
                <p className="text-gray-600">
                  {t('simple_direction_communication')}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B546A]">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{t('trust_and_security')}</h3>
                <p className="text-gray-600">
                  {t('verified_companies')}
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B546A]">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{t('excellence')}</h3>
                <p className="text-gray-600">
                  {t('promote_quality')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">{t('our_story')}</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-4">
                  {t('our_story_intro')}
                </p>
                <p className="mb-4">
                  {t('our_story_description')}
                </p>
                <p>
                  {t('our_story_conclusion')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage