import {getRequestConfig} from 'next-intl/server';
import {headers} from "next/headers";
import Negotiator from 'negotiator'
import deepmerge from 'deepmerge';

export default getRequestConfig(async () => {
    const availableLanguages = ['ru', 'en', 'ko', 'uk', 'de', 'fr', 'es', 'ja', 'zh', 'ur'];
    const acceptLanguage = (await headers()).get('accept-language');
    const negotiator = new Negotiator({headers: {'accept-language': acceptLanguage || ''}});
    const locale = negotiator.language(availableLanguages) || 'ru';

    const userMessages = (await import(`../../messages/${locale}.json`)).default
    const defaultMessages = (await import(`../../messages/en.json`)).default
    const messages = deepmerge(defaultMessages, userMessages);

    return {locale, messages};
})