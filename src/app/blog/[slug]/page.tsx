// function generateStaticParams() {
//   return [{ slug: 'first-post' }, { slug: 'second-post' }, { slug: 'third-post' }];
// }

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params: { slug } }: Props) {
  return <h1>Hello, {slug} Blog Post Page!</h1>;
}
