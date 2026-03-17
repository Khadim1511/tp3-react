import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';

function Home() {
    return (
        <div>
            <h2>Page d’accueil</h2>
            <Logo />
            <LecteurAudio />
            <ListeTaches />
        </div>
    );
}
export default Home;