import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider, useLocale } from "next-intl";

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../public/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: t("Index.title"),
  };
}

async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const messages = await getMessages(params.locale);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;
