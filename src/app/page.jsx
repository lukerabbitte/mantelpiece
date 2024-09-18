import { dummyArticles } from '@/dummy/dummyArticles';
import Tray from "@/lib/components/Tray";
import '@/app/globals.css';

export default function Home() {
  return (
    <main className="flex flex-col">
        <Tray articles={dummyArticles} />
    </main>
  );
}