import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const { id } = router.query;
  return <div>About {id}</div>;
}
