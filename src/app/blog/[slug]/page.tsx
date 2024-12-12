// function generateStaticParams() {
//   return [{ slug: 'first-post' }, { slug: 'second-post' }, { slug: 'third-post' }];
// }

export default function Page({ slug }: any) {
  return <h1>Hello, {slug} Blog Post Page!</h1>;
}
