import ModelCard from "./ModelCard";
import '../assets/Catalog.css';

export default function Catalog() {
    return (
        <section className={ 'container-fluid no-gutters model-section' }>
            <div className={'row pb-2'}>
                <h2 className={'text-start'}>360º Preview models</h2>
                <hr />
            </div>
            <div className={ 'row' }>
                {
                    getCardsData().map(cardData => (
                        <div
                            key={crypto.randomUUID()}
                            className={ 'col-md-3 col-12 pb-4' }
                        >
                            <ModelCard
                                modelData={cardData.modelData}
                                userInfo={cardData.userInfo}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

function getCardsData() {
    return [
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/faca2ad557f64809b598c3a646a8804f/fallbacks/6707ded79a8540d685f631b5ff17a8fe/f5b4ea1c028b4bc7b7dc6a0d7056dd9c.jpeg",
                modelTitle: "Armor for man and horse",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/fc6e731a0131471ba8e45511c7ea9996/fallbacks/f2b85e1fbe0e4133b53d9e91ccb076eb/3a12f4d7a66f49cba11ea349a41356c3.jpeg",
                modelTitle: "Sculpture “Bust of Róża Loewenfeld”",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/f5236789a5094b8fa1d800ffdb29dfa6/fallbacks/b0e04bdb9cf6491f90e74c30e01ebf41/0b90b5e6308e4597b45c73e679df6ed5.jpeg",
                modelTitle: "\"Kama\" Dagger",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/a784af0713a643b19ffcf65194bc0fbf/fallbacks/fcc069c0fc7f4fbdb43ddd02c7c76960/148b91ff864b4c8d8c7db69c33251e83.jpeg",
                modelTitle: "Violin",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/7d6938c0c0b54b06a0210a982a73023e/fallbacks/ec0f677725024c40a2732fc75eab77fe/74c4ddb0546a4a4fa39c1ace39325160.jpeg",
                modelTitle: "Hydria apothecary vase",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/2b0872d545f943e5aa1fcd23568cc405/fallbacks/f9029a05e03f4f7e993f954ed648788d/f2faee6c389a4cb6856ddbd4aa804553.jpeg",
                modelTitle: "Pair of Guardian Kings (Nio)",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/f3316610c8b740c595c22ca1d7df54ca/fallbacks/3e4a8165f1364676804b50131d9aaf7f/d7d15448c49144b2a3a382c90962b3dc.jpeg",
                modelTitle: "Water-Moon Guanyin",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/5f7176a2ae284d6b99fc970c9d265c04/fallbacks/d5bddf51daff4eabbe4834dfe9a6620e/ccd38d80aeee429c992f70ef71595de9.jpeg",
                modelTitle: "Orbiter Space Shuttle OV-103 Discovery",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/500ec4621d764f0dadb8edc93b8700ae/fallbacks/76c536e86ed846d3b9f9645b48cb85d5/0ff2da847eb34da8b9ac4966d2fb31b5.jpeg",
                modelTitle: "Coptic prayer book",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/4522a4cdc1c14190bf1a8811fa27da32/fallbacks/d2d3af2221cd41ec88238485226aabb3/d718d81d22854fbd8128612985a3b56b.jpeg",
                modelTitle: "Löwe",
            },
        },
        {
            modelData: {
                imageUrl: "https://media.sketchfab.com/models/4c379e58642c471fad32406fe90c7cc4/fallbacks/7698ffe651bb4a52bad0c6167777aadc/ab4a1f0a387e40aab27502cf59f65d9d.jpeg",
                modelTitle: "Netsuke - Snake curled around a turtle",
            },
        },
    ];
}