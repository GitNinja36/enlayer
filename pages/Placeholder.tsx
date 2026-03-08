import React from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';

interface PlaceholderProps {
  title: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ title }) => {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-4 py-2 bg-orange-50 text-primary rounded-full text-sm font-semibold mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-graphite mb-6">{title}</h1>
          <p className="text-slate text-lg">
            We are currently building this page. Please check back later or contact us for more information.
          </p>
        </div>
      </Container>
    </Section>
  );
};