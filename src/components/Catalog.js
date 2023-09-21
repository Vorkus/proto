import ModelCard from "./ModelCard";

export default function Catalog() {
    return (
        <section className={ 'container-fluid no-gutters' }>
            <div className={ 'row' }>
                <div className={ 'col-4 g-0' }>
                    <ModelCard
                        imageUrl={"https://media.sketchfab.com/models/faca2ad557f64809b598c3a646a8804f/fallbacks/6707ded79a8540d685f631b5ff17a8fe/f5b4ea1c028b4bc7b7dc6a0d7056dd9c.jpeg"}
                    />
                </div>
                <div className={ 'col-4 g-0' }>
                    <ModelCard
                        imageUrl={"https://media.sketchfab.com/models/fc6e731a0131471ba8e45511c7ea9996/fallbacks/f2b85e1fbe0e4133b53d9e91ccb076eb/3a12f4d7a66f49cba11ea349a41356c3.jpeg"}
                    />
                </div>
                <div className={ 'col-4 g-0' }>
                    <ModelCard
                        imageUrl={"https://media.sketchfab.com/models/f5236789a5094b8fa1d800ffdb29dfa6/fallbacks/b0e04bdb9cf6491f90e74c30e01ebf41/0b90b5e6308e4597b45c73e679df6ed5.jpeg"}
                    />
                </div>
            </div>
        </section>
    );
}