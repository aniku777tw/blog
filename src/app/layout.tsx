import '@/app/globals.css';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import InteractiveBackground from '@/components/common/InteractiveBackground';
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col" cz-shortcut-listen="true">
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}
