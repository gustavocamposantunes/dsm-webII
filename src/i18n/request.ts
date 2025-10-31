import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supported = ['en', 'pt-BR'] as const;
  const isSupported = (val: string): val is (typeof supported)[number] => supported.includes(val as (typeof supported)[number]);
  const current = locale ?? 'en';
  const finalLocale = isSupported(current) ? current : 'en';
  const messages = (await import(`./messages/${finalLocale}.json`)).default;
  return { locale: finalLocale, messages };
});
