import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

async function defaultFunction<T>(): Promise<GetStaticPropsResult<T>> {
  return {
    props: {} as T,
  };
}

export function withSSRTranslation<T extends Record<string, any>>(
  namespaces: string[],
  fn: GetStaticProps<T> = defaultFunction
) {
  return async (
    ctx: GetStaticPropsContext & { props: Record<string, any> }
  ): Promise<GetStaticPropsResult<T>> => {
    const { locale } = ctx;
    const getStaticPropsResponse = (await fn(ctx)) as any;

    return {
      ...getStaticPropsResponse,
      props: {
        ...(await serverSideTranslations(locale!, namespaces)),
        ...getStaticPropsResponse.props,
      },
    };
  };
}
