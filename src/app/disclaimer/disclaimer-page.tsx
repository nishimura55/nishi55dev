import { PageTitle } from '~/src/components/common/PageTitle'

export const DisclaimerPage = () => {
  return (
    <div className='h-full bg-primary p-4 pb-8 text-white'>
      <PageTitle title='免責事項' size='sm' />
      <p className='p-4'>
        当ブログのコンテンツによって生じた損害に対する一切の責任を負いません。
        <br />
        記事執筆にはできる限り正確な情報提供を心がけておりますが、コンテンツの正確性や安全性を保証するものではありません。情報が古くなっていることもあります。
        <br />
        また、当ブログ掲載のリンク先のサイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
      </p>
    </div>
  )
}
