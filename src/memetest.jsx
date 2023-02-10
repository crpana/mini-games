import { useState } from "react";

const MEMES = [
    'https://i.kym-cdn.com/entries/icons/original/000/017/618/pepefroggie.jpg',
    'https://i.kym-cdn.com/photos/images/original/000/862/065/0e9.jpg',
    'https://i.kym-cdn.com/entries/icons/original/000/002/830/sad_frog.jpg',
    'https://i.kym-cdn.com/photos/images/newsfeed/001/182/912/02f.jpg',
    'https://i.kym-cdn.com/entries/icons/original/000/028/526/honklhonk.jpg',
    'https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png',
    'https://i.kym-cdn.com/entries/icons/original/000/032/340/cover1.jpg',
    'https://i.kym-cdn.com/entries/icons/original/000/029/082/maxresdefault_(2).jpg',
    'https://i.kym-cdn.com/entries/icons/original/000/026/452/928d8a9a57515320068a2c339e88fd28.jpg',
    'https://i.kym-cdn.com/photos/images/newsfeed/001/218/292/7e6.png'

].flatMap((m) => [m, m]).sort(() => Math.random() - 0.5);



export default function Memetest() {
    console.log(MEMES);

    const [correct, setCorrect] = useState([]);
    const [select, setSelect] = useState([]);

    return (
        <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(128px,1fr))',
            gap: 24
        }}>
            {
                MEMES.map(image =>
                    <li key={image} style={{ padding: 12, border: '1px solid #555' }}>
                        <img src={image} alt='memes' key={image} />
                    </li>


                )
            }

        </ul>
    );
}